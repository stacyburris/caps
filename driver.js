'use strict';

const events = require('./events'); // Monitor the system for events …

// - Drivers Module

events.on('pickup', pickUp); // On the ‘pickup’ event … // callback 
events.on('in-transit', inTransit);

function pickUp(payload) {
  setTimeout(() => {
    // console.log(`DRIVER: picked up ${payload.orderId}`); // Log “DRIVER: picked up [ORDER_ID]” to the console.
    events.emit('in-transit', payload); // Emit an ‘in-transit’ event with the payload you received
  }, 1000); // Wait 1 second

}

events.on('pickup', driverPickup);

function driverPickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
}

function inTransit(payload) {
  setTimeout(() => {
    //console.log(`DRIVER: delivered ${payload.orderId}`); // Log “delivered” to the console
    events.emit('delivered', payload); // Emit a ‘delivered’ event with the same payload  
  }, 3000); // Wait 3 seconds

}

events.on('in-transit', inDelivery);

function inDelivery(payload) {
  console.log(`DRIVER: delivered ${payload.orderId}`);
}

module.exports = { driverPickup, pickUp, inTransit, inDelivery };





