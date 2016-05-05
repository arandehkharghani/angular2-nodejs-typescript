import { EventEmitter } from "angular2/core";
export declare class ChatLogin {
    doLogin: EventEmitter<{}>;
    login(username: string): void;
    keyPress(event: KeyboardEvent, username: string): void;
}
