'use strict';

require('dotenv').config();
const uuid = require('uuid').v4;   // !!!
const port = process.env.PORT || 3000; // !!
const io = require('socket.io')(port);  // !!
const caps = io.of('/caps');



/////////////////////////////////////////////////////////////////////////////////////////////////
// a queue server hub that keeps a log of the delivery, keyed by retailer and event type
//broadcasts "Delivery Confirmations" to retailers

const messages = {}  //!! queue

/**
 * (payload)
{
  pickup: {
    driver: {
      23: {
        store: companyID,
        code: 387487147u,
        orderID: 93r832939,
        customer: popeye
        address: 125 place west
      }
    }
  },
  delivered: {

  }
} 
 */

const caps = io.of('/caps');
caps.on('connection', socket => {
  console.log(`${socket.id} is joining name space caps`);

  // listening for pickup event
  socket.on('pickup', message => {
    let messageID = uuid();
    // put the message in my message queue
    messages['pickup']['driver'][messageID] = message.payload;
    // using variables so can use bracket notation

    // send a confirmation
    caps.in('driver').emit('pickup', { messageID, payload: message.payload })

  })

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const queue = {
  messages: {}
};

// namespace
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

});

