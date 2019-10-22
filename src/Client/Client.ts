import msgpack from '@ygoe/msgpack';
import { EnumerateMidiDevicesRequest, EnumerateMidiDevicesResponse } from './Commands/Command';

export class Client {
    constructor() {
        if (!process.browser) {
            return;
        }
        (window as any).client = this;

        var socket = new WebSocket("ws:/192.168.200.70:55367");
        console.log('Opening websocket connection...')
        socket.onerror = event => {
            console.error('[Websocket] Errored:', event)
        };
        socket.onclose = event => {
            console.info('[Websocket] Closed:', event)
        };
        socket.onopen = event => {
            console.info('[Websocket] Opened:', event);
            var command = new EnumerateMidiDevicesRequest();
            var encodedCommand = msgpack.serialize(command);
            socket.send(encodedCommand);
        };
        socket.onmessage = async event => {
            console.log('Reply Event:', event)
            console.log('Reply Data:', event.data), typeof event.data;
            var message = msgpack.deserialize(await new Response(event.data as Blob).arrayBuffer());
            var command = EnumerateMidiDevicesResponse.FromMessagePack(message);
            console.log('[Websocket] Received:', command);
        };
    }
}