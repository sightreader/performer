export enum Command {
  EnumerateMidiDevices,
  SelectMidiDevices,
  EnumerateScores,
  LoadScore,
  SetScoreDisplayPosition,
  SetPlaybackPosition
}

export enum RequestResponse {
  Request,
  Response
}

export class EnumerateMidiDevicesRequest {
  Command = Command.EnumerateMidiDevices;
  Kind = RequestResponse.Request;
}

export class EnumerateMidiDevicesResponse {
  Command = Command.EnumerateMidiDevices;
  Kind = RequestResponse.Request;
  InputDeviceNames = [];
  OutputDeviceNames = [];
  EnabledInputDeviceNames = [];
  EnabledOutputDeviceNames = [];
  Error = "";

  public constructor(init?: Partial<EnumerateMidiDevicesResponse>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any[]): EnumerateMidiDevicesResponse {
    return new EnumerateMidiDevicesResponse({
      Command: decoded[0],
      Kind: decoded[1],
      Error: decoded[2],
      InputDeviceNames: decoded[3],
      OutputDeviceNames: decoded[4],
      EnabledInputDeviceNames: decoded[5],
      EnabledOutputDeviceNames: decoded[6]
    });
  }
}
