import msgpack from "@ygoe/msgpack";
import {
  EnumerateMidiDevicesRequest,
  EnumerateMidiDevicesResponse
} from "./Commands/Command";

export class Client {
  private socket!: WebSocket;

  public get Socket() {
    return this.socket;
  }

  public async connect() {
    if (!process.browser) {
      return;
    }

    return new Promise((resolve, reject) => {
      (window as any).client = this;

      this.socket = new WebSocket("ws:/192.168.200.70:55367");
      console.log("Opening websocket connection...");
      this.socket.onerror = event => {
        console.error("[Websocket] Errored:", event);
      };
      this.socket.onclose = event => {
        console.log("[Websocket] Closed:", event);
      };
      this.socket.onopen = event => {
        console.log("[Websocket] Opened:", event);
        resolve();
      };
      this.socket.onmessage = async event => {
        var message = msgpack.deserialize(
          await new Response(event.data as Blob).arrayBuffer()
        );
        var command = EnumerateMidiDevicesResponse.FromMessagePack(message);
        console.log("[Websocket] Received:", message);
      };
    });
  }
}
