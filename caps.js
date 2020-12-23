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
  // console.log('Connection success to CAPS namespace', socket.id);

  socket.on('pickup', (payload) => {
    console.log('EVENT:', { events: 'pickup', time: new Date().toString(), payload });
    caps.emit('pickup', payload);
  });
  socket.on('in-transit', (payload) => {
    console.log('EVENT:', { events: 'in-transit', time: new Date().toString(), payload });
    caps.to(payload.store).emit('in-transit', payload);
  });
  socket.on('delivered', (payload) => {
    console.log('EVENT:', { events: 'delivered', time: new Date().toString(), payload });
    caps.to(payload.store).emit('delivered', payload);

  });
});

  // logEvent('pickup', payload));
  // socket.on('in-transit', (payload) => logEvent('in-transit', payload));
  // socket.on('delivered', (payload) => logEvent('delivered', payload));


  // function logEvent(event, payload) {
  //   const time = new Date().toString();
  //   console.log('EVENT:', { event, time, payload });
  //   caps.emit('pickup', payload);

  // 
