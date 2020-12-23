'use strict';


require('dotenv').config();
// bring in client
const io = require('socket.io-client');
// connecting to the caps namespace
const host = "http://localhost:3000/caps";
const socket = io.connect(host);

// library
const faker = require('faker');
const storeName = process.env.STORE;



// put the vendor in a private room where they are only listening for events that come from them
socket.emit('join', storeName);

socket.on('delivered', (payload) => {
  console.log(`Thank you for delivering ${payload.orderId}`);
}); // Whenever the ‘delivered’ event occurs


setInterval(() => {
  //console.log('STORENAME', storeName);
  let newCustomerOrder = { // Create a fake order, as an object:
    storeName: storeName, // storeName, orderId, customerName, address
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.state()}`
  };
  socket.emit('pickup', newCustomerOrder) // Emit a ‘pickup’ event and attach the fake order as payload

}, 5000); // Every 5 seconds, simulate a new customer order

