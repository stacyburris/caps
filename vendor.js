'use strict';


require('dotenv').config();


const events = require('./events');
const faker = require('faker');
const storeName = process.env.STORE; // Declare your store name (perhaps in a .env file, so that this module is re-usable)

// Vendor Module

setInterval(() => {
  let newCustomerOrder = { // Create a fake order, as an object:
    storeName: storeName, // storeName, orderId, customerName, address
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.state()}`
  };
  events.emit('pickup', newCustomerOrder) // Emit a ‘pickup’ event and attach the fake order as payload

}, 5000); // Every 5 seconds, simulate a new customer order




events.on('delivered', thanks); // Whenever the ‘delivered’ event occurs

function thanks(payload) { // Log “thank you” to the console
  console.log(`VENDOR: Thank you for ordering ${payload.orderId}`);
}


// HINT: Have some fun by using the faker library to make up phony information
// Monitor the system for events …

module.exports = thanks;