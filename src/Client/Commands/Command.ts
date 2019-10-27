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

export class EnumerateScoresRequest {
  Command = Command.EnumerateScores;
  Kind = RequestResponse.Request;
}

export class EnumerateScoresResponse {
  Command = Command.EnumerateScores;
  Kind = RequestResponse.Response;
  Error = "";
  FilePaths: string[] = [];
  ActiveScoreFilePath: string = "";

  public constructor(init?: Partial<EnumerateScoresResponse>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any): EnumerateScoresResponse {
    return new EnumerateScoresResponse(decoded);
  }
}

export class LoadScoreRequest {
  Command = Command.LoadScore;
  Kind = RequestResponse.Request;
  FilePath = "";

  public constructor(init?: Partial<LoadScoreRequest>) {
    Object.assign(this, init);
  }
}

export class LoadScoreResponse {
  Command = Command.LoadScore;
  Kind = RequestResponse.Response;
  Error = "";
  Score: Uint8Array = new Uint8Array(0);
  ActiveScoreFilePath: string = "";

  public constructor(init?: Partial<LoadScoreResponse>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any): LoadScoreResponse {
    return new LoadScoreResponse(decoded);
  }
}

export class SetScoreDisplayPositionRequest {
  Command = Command.SetScoreDisplayPosition;
  Kind = RequestResponse.Request;
  MeasureNumbers = [];
  GroupIndices = [];

  public constructor(init?: Partial<SetScoreDisplayPositionRequest>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any): SetScoreDisplayPositionRequest {
    return new SetScoreDisplayPositionRequest(decoded);
  }
}

export class SetScoreDisplayPositionResponse {
  Command = Command.SetScoreDisplayPosition;
  Kind = RequestResponse.Response;
  Error = "";

  public constructor(init?: Partial<SetScoreDisplayPositionResponse>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any): SetScoreDisplayPositionResponse {
    return new SetScoreDisplayPositionResponse(decoded);
  }
}

export class SetPlaybackPositionRequest {
  Command = Command.SetPlaybackPosition;
  Kind = RequestResponse.Request;
  MeasureNumber = 0;

  public constructor(init?: Partial<SetPlaybackPositionRequest>) {
    Object.assign(this, init);
  }
}

export class SetPlaybackPositionResponse {
  Command = Command.SetPlaybackPosition;
  Kind = RequestResponse.Response;
  Error = "";
  MeasureNumber = 0;

  public constructor(init?: Partial<SetPlaybackPositionResponse>) {
    Object.assign(this, init);
  }

  static FromMessagePack(decoded: any): SetPlaybackPositionResponse {
    return new SetPlaybackPositionResponse(decoded);
  }
}
