'use strict';

const vendor = require('../vendor');
const driver = require('../driver');
const events = require('../events');

describe('Console Logs', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Delivered console.log is called', () => {
    events.emit('delivered', { orderId: 1 });
    expect(consoleSpy).toBeCalled();
  });

  it('Pickup console.log is called', () => {
    events.emit('pickup', { orderId: 1 });
    expect(consoleSpy).toBeCalled();
  });

  it('In-transit console.log is called', () => {
    events.emit('in-transit', { orderId: 1 });
    expect(consoleSpy).toBeCalled();
  });
});