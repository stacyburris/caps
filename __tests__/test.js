'use strict';
const faker = require('faker');
const vendor = require('../flowers/flowers206');
//const driver = require('../driver/driver');
//const caps = require('../caps');


describe('Console Logs', () => {
  //jest.useFakeTimers();
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  let newCustomerOrder = { // Create a fake order, as an object:
    storeName: '1-206-flowers', // storeName, orderId, customerName, address
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.state()}`
  };

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Console.log is called', () => {
    setTimeout(() => {
      vendor(newCustomerOrder);
      expect(consoleSpy).toHaveBeenCalled();
    });
  }, 2000);

});


  // it('Pickup console.log is called ', () => {
  //   socket.emit('pickup', { orderId: 1 });
  //   expect(consoleSpy).toBeCalled();
  // });

  // it('In-transit console.log is called', () => {
  //   caps.emit('in-transit', { orderId: 1 });
  //   expect(consoleSpy).toBeCalled();
  // });
  // it('In-transit console.log is called!!!', () => {

  //   caps.emit('in-transit', { orderId: 3 });
  //   expect(setTimeout).toHaveBeenCalledTimes(3);
  // });
