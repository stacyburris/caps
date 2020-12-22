'use strict';

// Main Hub Application
// event pool
const events = require('./events');
//console.log('HELLOOOO', events);
// require our body parts so they will hear our events

require('./driver');
require('./vendor');


// Manages the state of every package (ready for pickup, in transit, delivered, etc)

events.on('pickup', (payload) => {
  console.log('EVENT:', {
    event: 'pickup',
    time: new Date(),
    payload
  });
});

events.on('in-transit', (payload) => {
  console.log('EVENT:', {
    event: 'in-transit',
    time: new Date(),
    payload
  });
});

events.on('delivered', (payload) => {
  console.log('EVENT:', {
    event: 'delivered',
    time: new Date(),
    payload
  });
});



// Logs every event to the console with a timestamp and the event payload
// i.e. “EVENT {}”
