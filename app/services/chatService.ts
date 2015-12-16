import * as io from 'socket.io-client';
export class ChatMessage {
  date: Date;
  constructor(public text: string = '') { }
}

export class ChatService {
  socket:any;
  messages: ChatMessage[]=[];
  constructor() {
    this.socket = io('http://localhost:3333');
    this.initListener();
  }

  sendMessage (msg:ChatMessage) {
    msg.date = new Date();
    this.socket.emit('chat message', msg);
  };

  initListener() {
    this.socket.on('chat message', (msg:ChatMessage) => {
      this.messages.unshift(msg);
    });
  }
}
