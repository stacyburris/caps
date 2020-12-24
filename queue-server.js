'use strict';

const uuid = require('uuid').v4;
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const caps = io.of('/caps');

const queue = {
  messages: {}
};

caps.on('connection', (socket) => {
  socket.on('join', room => {
    console.log(`${socket.id} is joining ${room}`);
    socket.join(room);

  })
});
caps.on('connection', (socket) => {

  socket.on('new order', payload => {
    console.log('New order received', payload);
    const id = uuid();
    queue.messages[id] = payload;
    socket.emit('added');
    caps.emit('orders', { id, payload });
  });
  socket.on('received', messages => {
    console.log('Order heard', messages);
    delete queue.messages[messages.id];

  });
  socket.on('getAll', () => {

    Object.keys(queue.messages).forEach(() => {
      socket.emit('messages', { payload: queue.messages[payload.client] });
    });
  });

  socket.on('delivered', payload => {
    const id = uuid();
    queue.messages[id] = payload;
    console.log('EVENT:', { events: 'delivered', time: new Date().toString(), payload });
    console.log('Order has been delivered!', payload);
    caps.to(payload.storeName).emit('delivered', payload);
    socket.emit('delivered', { id, payload });
  });

  socket.on('pickup', (payload) => {
    console.log('EVENT:', { events: 'pickup', time: new Date().toString(), payload });
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    console.log('EVENT:', { events: 'in-transit', time: new Date().toString(), payload });
    caps.to(payload.storeName).emit('in-transit', payload);
  });

})