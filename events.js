//'use strict';

// firing events!!!


// const io = require('socket.io-client');
// cost host = 'http://localhost:3000';

// // connect to the host
// const socket = io.connect(host);

// // listen for the 'hi' event
// socket.on('hi', payload => {
//   console.log('the HUB said: ', payload);
// })

// socket.emit('hello', 'Stacy');

///////old code////

//const Events = require('events');

//const events = new Events();  // makes a new Event Pool
//console.log('WHATS HAPPENING', events)

// anytime I want to emit and event or listen for an event, I will require this module. That way we are all listening to the same pool of events.
// this is called a singleton

//module.exports = events;


// Global Event Pool (shared by all modules)


// events.on('pickup', (payload) => {
//   console.log('EVENT:', {
//     event: 'pickup',
//     time: new Date(),
//     payload
//   });
// });

// events.on('in-transit', (payload) => {
//   console.log('EVENT:', {
//     event: 'in-transit',
//     time: new Date(),
//     payload
//   });
// });

// events.on('delivered', (payload) => {
//   console.log('EVENT:', {
//     event: 'delivered',
//     time: new Date(),
//     payload
//   });
// });


