import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ChatMessage, ChatService} from '../../services/chatService';


@Component({
  selector: 'chat',
  templateUrl: './components/chat/chat.html',
  styleUrls: ['./components/chat/chat.css'],
  directives: [CORE_DIRECTIVES],
  viewProviders: [ChatService]
})
export class ChatCmp {

  message: ChatMessage = new ChatMessage();
  error: string = '';
  constructor(public cs:ChatService) {}
  sendMessage():void {
      if(this.validateMessage(this.message)) {
          this.cs.sendMessage(this.message);
          this.message = new ChatMessage();
      }
  };

  validateMessage(message:ChatMessage):Boolean {
    if(message.text.length===0) {
        this.error = 'you need to insert a message!';
        return false;
    }else {
        this.error = '';
        return true;
    }
  }
}


