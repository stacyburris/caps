'use strict';


const Events = require('events');

const events = new Events();  // makes a new Event Pool
//console.log('WHATS HAPPENING', events)

// anytime I want to emit and event or listen for an event, I will require this module. That way we are all listening to the same pool of events.
// this is called a singleton

module.exports = events;


// Global Event Pool (shared by all modules)