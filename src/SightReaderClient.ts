import { Client } from "./Client/Client";
import msgpack from "@ygoe/msgpack";
import {
  EnumerateMidiDevicesRequest,
  EnumerateMidiDevicesResponse,
  Command,
  RequestResponse
} from "./Client/Commands/Command";

export class SightReaderClient {
  private client: Client = new Client();
  private static instance: SightReaderClient = new SightReaderClient();

  public static get Instance() {
    return SightReaderClient.instance;
  }

  async connect() {
    await this.client.connect();
  }

  private async connectCheck() {
    if (
      !this.client.Socket ||
      this.client.Socket.readyState !== this.client.Socket.OPEN
    ) {
      await this.client.connect();
    }
  }

  async enumerateMidiDevices(): Promise<EnumerateMidiDevicesResponse> {
    await this.connectCheck();
    return new Promise((resolve, reject) => {
      async function onResponse(this: any, event: MessageEvent) {
        const buffer = await new Response(event.data as Blob).arrayBuffer();
        var message = msgpack.deserialize(buffer);

        if (
          message[0] !== Command.EnumerateMidiDevices &&
          message[1] !== RequestResponse.Response
        ) {
          return;
        }

        this.client.Socket.removeEventListener("message", onResponse);
        resolve(EnumerateMidiDevicesResponse.FromMessagePack(message));
      }

      this.client.Socket.addEventListener("message", onResponse.bind(this));
      this.client.Socket.send(
        msgpack.serialize(new EnumerateMidiDevicesRequest())
      );
    });
  }
}
