import { EventEmitter } from "angular2/core";
export declare class ChatInput {
    doSendMessage: EventEmitter<{}>;
    sendMessage(input: any): void;
    keyPress(event: KeyboardEvent): void;
}
