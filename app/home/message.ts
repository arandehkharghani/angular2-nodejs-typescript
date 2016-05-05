import {Component} from "angular2/core";

@Component({
  selector: "chat-message",
  properties: ["message: message"],
  template: `
  <div class="message">
    <div class="sender">{{message.user}}</div>
    <div class="text">{{message.text}}</div>
  </div>
  `,
})
export class ChatMessage {
  message: any;

  get time() {
    return new Date(this.message.time);
  }
}
