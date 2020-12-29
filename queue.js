'use strict';

/// code review from class 12/29
// queue.js 

const io = require('socket.io-client');


class Queue {
  // keep track of my client via my client id
  // keep track of how I am connecting to my hub via my url
  constructor(id) {
    this.id = id;
    this.socket = io.connect('http://localhost:3000');
  }

  // this method is going to allow me to reuse code over and over
  trigger(event, payload) {
    this.socket.emit(event, { clientID: this.id, payload });
  }
}
module.exports = Queue;