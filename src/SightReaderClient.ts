import { Client } from "./Client/Client";
import msgpack from "@ygoe/msgpack";
import {
  EnumerateMidiDevicesRequest,
  EnumerateMidiDevicesResponse,
  Command,
  RequestResponse,
  SelectMidiDevicesResponse,
  SelectMidiDevicesRequest,
  EnumerateScoresResponse,
  EnumerateScoresRequest,
  LoadScoreResponse,
  LoadScoreRequest
} from "./Client/Commands/Command";

export class SightReaderClient {
  private verovio: any;
  private client: Client = new Client();
  private score: string = "";
  private static instance: SightReaderClient = new SightReaderClient();

  public static get Instance() {
    return SightReaderClient.instance;
  }

  async connect() {
    await this.client.connect();
  }

  async getVerovio() {
    return new Promise((resolve, reject) => {
      if (!this.verovio) {
        this.verovio = new (window as any).verovio.toolkit();
      }

      resolve(this.verovio);
    });
  }

  async setupScore(verovioOptions: any) {
    return this.getVerovio().then((verovio: any) => {
      var options = {
        font: "Bravura",
        slurThickness: 0.3,
        spacingNonLinear: 0.7,
        stemWidth: 0.3,
        svgViewBox: true,
        noHeader: true,
        noFooter: true,
        svgBoundingBoxes: false,
        breaks: "auto",
        pageMarginBottom: 0,
        pageMarginLeft: 10,
        pageMarginRight: 0,
        pageMarginTop: 0,
        scale: 1000,
        ...verovioOptions
      };
      console.log("Setting up Verovio with options:", options);
      this.verovio.setOptions(options);
      verovio.loadData(this.score);
    });
  }

  async renderScore(pageNumber: number) {
    return new Promise((resolve, reject) => {
      return this.getVerovio().then((verovio: any) => {
        console.log("verovio.rendertsvg:", verovio);
        (window as any).verovio3 = verovio;
        resolve(verovio.renderToSVG(pageNumber));
      });
    });
  }

  get Score() {
    return this.score;
  }

  setScore(score: Uint8Array) {
    this.score = new TextDecoder("utf-8").decode(score);
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
          message.Command !== Command.EnumerateMidiDevices &&
          message.Kind !== RequestResponse.Response
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

  async selectMidiDevices(
    inputDeviceNames: string[],
    outputDeviceNames: string[]
  ): Promise<SelectMidiDevicesResponse> {
    await this.connectCheck();
    return new Promise((resolve, reject) => {
      async function onResponse(this: any, event: MessageEvent) {
        const buffer = await new Response(event.data as Blob).arrayBuffer();
        var message = msgpack.deserialize(buffer);

        if (
          message.Command !== Command.SelectMidiDevices &&
          message.Kind !== RequestResponse.Response
        ) {
          return;
        }

        this.client.Socket.removeEventListener("message", onResponse);
        resolve(EnumerateMidiDevicesResponse.FromMessagePack(message));
      }

      this.client.Socket.addEventListener("message", onResponse.bind(this));
      this.client.Socket.send(
        msgpack.serialize(
          new SelectMidiDevicesRequest({
            InputDeviceNames: inputDeviceNames,
            OutputDeviceNames: outputDeviceNames
          })
        )
      );
    });
  }

  async EnumerateScores(): Promise<EnumerateScoresResponse> {
    return this.SendRequest(
      new EnumerateScoresRequest(),
      Command.EnumerateScores,
      EnumerateScoresResponse
    );
  }

  async LoadScore(scoreFilePath: string): Promise<LoadScoreResponse> {
    var command = new LoadScoreRequest();
    command.FilePath = scoreFilePath;

    return this.SendRequest(command, Command.LoadScore, LoadScoreResponse);
  }

  private ConstructCommandResponse<T>(instance: T, message: any): any {
    switch ((instance as any).constructor) {
      case EnumerateMidiDevicesResponse:
        return EnumerateMidiDevicesResponse.FromMessagePack(message);
      case SelectMidiDevicesResponse:
        return SelectMidiDevicesResponse.FromMessagePack(message);
      case EnumerateScoresResponse:
        return EnumerateScoresResponse.FromMessagePack(message);
      case LoadScoreResponse:
        return LoadScoreResponse.FromMessagePack(message);
      default:
        console.error(
          "Unable to construct command response for (instance, message):",
          instance,
          message
        );
        break;
    }
  }

  private async SendRequest<TRequest, TResponse>(
    requestCommand: any,
    command: Command,
    ResponseType: any
  ): Promise<TResponse> {
    await this.connectCheck();

    var self = this;
    return new Promise((resolve, reject) => {
      async function onResponse(event: MessageEvent) {
        const buffer = await new Response(event.data as Blob).arrayBuffer();
        var message = msgpack.deserialize(buffer);

        if (
          message.Command !== command &&
          message.Kind !== RequestResponse.Response
        ) {
          return;
        }

        self.client.Socket.removeEventListener("message", onResponse);
        resolve(self.ConstructCommandResponse(new ResponseType(), message));
      }

      this.client.Socket.addEventListener("message", onResponse);
      console.log("[Socket -> Peer] Sending:", requestCommand);
      this.client.Socket.send(msgpack.serialize(requestCommand));
    });
  }
}
