'use strict';


require('dotenv').config();

const io = require('socket.io-client');
const host = "http://localhost:3000/caps";
const socket = io.connect(host);


const faker = require('faker');
const storeName = process.env.STORE; // Declare your store name (perhaps in a .env file, so that this module is re-usable)


// Vendor Module

socket.emit('join', storeName);

socket.on('delivered', (payload) => {
  console.log(`Thank you for delivering ${payload.orderId}`);
}); // Whenever the ‘delivered’ event occurs

// function thanks(payload) {
//   console.log(`Thank you for delivering ${payload.orderId}`);
// }

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

//module.exports = thanks;