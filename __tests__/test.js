'use strict';

const vendor = require('../vendor/vendor');
const driver = require('../driver/driver');
const caps = require('../caps');
//const socket = io.connect(host);
// const events = require('../events');

describe('Console Logs', () => {
  jest.useFakeTimers();
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Delivered console.log is called', () => {
    caps.emit('delivered', { orderId: 1 });
    expect(consoleSpy).toBeCalled();
  });

  it('Pickup console.log is called ', () => {
    socket.emit('pickup', { orderId: 1 });
    expect(consoleSpy).toBeCalled();
  });

  it('In-transit console.log is called', () => {
    caps.emit('in-transit', { orderId: 1 });
    expect(consoleSpy).toBeCalled();
  });
  it('In-transit console.log is called!!!', () => {

    caps.emit('in-transit', { orderId: 3 });
    expect(setTimeout).toHaveBeenCalledTimes(3);
  });
});