'use strict';

// brain!!!

// require('./driver/driver');
//require('./vendor/vendor');

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const caps = io.of('/caps');



io.on('connection', (socket) => {
  console.log('Connection success to the BRAIN/main socket', socket.id);
});

caps.on('connection', (socket) => {
  socket.on('join', room => {
    socket.join(room);
  });

  socket.on('pickup', (payload) => {
    console.log('EVENT:', { events: 'pickup', time: new Date().toString(), payload });
    caps.emit('pickup', payload);
  });
  socket.on('in-transit', (payload) => {
    console.log('EVENT:', { events: 'in-transit', time: new Date().toString(), payload });
    caps.to(payload.storeName).emit('in-transit', payload);
  });
  socket.on('delivered', (payload) => {
    console.log('EVENT:', { events: 'delivered', time: new Date().toString(), payload });
    caps.to(payload.storeName).emit('delivered', payload);

  });
});

