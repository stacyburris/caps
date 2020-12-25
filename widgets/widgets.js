'use strict';

require('dotenv').config();
const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/caps');
const faker = require('faker');
const storeName = 'acme-widgets';


console.log('Connection success to the client acme-widgets');

let vendorsPayload = { messageID: storeName, event: 'delivered' };

socket.emit('getAll', vendorsPayload);

// put the vendor in a private room where they are only listening for events that come from them
socket.emit('join', storeName);

socket.on('connection', () => {
  console.log('connection to client');
});

socket.on('messages', messages => {
  //console.log(`Thank you for delivering ${messages.orderId}`);
  console.log(`Receiving Flowers message ${messages.payload}`);
  //console.log('in client with new messages', messages);
  socket.emit('received', messages)
});


setInterval(() => {

  let newCustomerOrder = { // Create a fake order, as an object:
    storeName: storeName, // storeName, orderId, customerName, address
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.state()}`
  };
  socket.emit('pickup', newCustomerOrder) // Emit a ‘pickup’ event and attach the fake order as payload

}, 5000); // Every 5 seconds, simulate a new customer order

/////
