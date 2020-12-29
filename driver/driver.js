'use strict';
const io = require('socket.io-client');
const host = "http://localhost:3000/caps";
const socket = io.connect(host);
///////////////////////////////////////////////////////////////
/// demo in class

const Queue = require('../driver/queue');
const queue = new Queue('driver');

queue.subscribe('pickup', payload => {
  console.log('Pick up', payload);
  pickup(payload);
});

function pickup(payload) {
  setTimeout(() => {
    queue.trigger('in-transit', payload);

    deliver(payload);
  }, 1000);





  /////////////////////////////////////////////////////////////////////
  // - Drivers Module
  console.log('DRIVER PAGE');


  socket.on('pickup', pickUp); // On the ‘pickup’ event … // callback 


  function pickUp(payload) {
    //console.log('PICKUP', pickUp);
    setTimeout(() => {

      //console.log(`Picked up Order ${payload.orderId}`); // Log “DRIVER: picked up [ORDER_ID]” to the console.
      socket.emit('in-transit', payload); // Emit an ‘in-transit’ event with the payload you received
    }, 1500); // Wait 1 second

    setTimeout(() => {
      socket.emit('delivered', payload); // Emit a ‘delivered’ event with the same payload  
      console.log(`Delivered Order ${payload.orderId}`); // Log “delivered” to the console
      //console.log(`Thank you for delivering ${payload.orderId}`);
    }, 3000); // Wait 3 seconds
  }







