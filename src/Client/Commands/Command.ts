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
  Error = "";
  InputDeviceNames: string[] = [];
  OutputDeviceNames: string[] = [];
  EnabledInputDeviceNames: string[] = [];
  EnabledOutputDeviceNames: string[] = [];

  public constructor(init?: Partial<EnumerateMidiDevicesResponse>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any): EnumerateMidiDevicesResponse {
    return new EnumerateMidiDevicesResponse(decoded);
  }
}

export class SelectMidiDevicesRequest {
  Command = Command.SelectMidiDevices;
  Kind = RequestResponse.Request;
  InputDeviceNames: string[] = [];
  OutputDeviceNames: string[] = [];

  public constructor(init?: Partial<SelectMidiDevicesRequest>) {
    Object.assign(this, init);
  }
}

export class SelectMidiDevicesResponse {
  Command = Command.SelectMidiDevices;
  Kind = RequestResponse.Response;
  Error = "";
  InputDeviceNames: string[] = [];
  OutputDeviceNames: string[] = [];
  EnabledInputDeviceNames: string[] = [];
  EnabledOutputDeviceNames: string[] = [];

  public constructor(init?: Partial<SelectMidiDevicesResponse>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any): SelectMidiDevicesResponse {
    return new SelectMidiDevicesResponse(decoded);
  }
}
