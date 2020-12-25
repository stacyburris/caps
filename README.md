# LAB - 13 - Message Queues

## Author: Stacy Burris

### Collaborators:

+ Simon Panek, Nathan Cox, Mariko Alvarado, Dina Ayoub, Stacy Burris, Tina Meyers, Sara Strasner

### Links and Resources

+ [Pull Request](https://github.com/stacyburris/caps/pull/6)
+ [GitHub](https://github.com/stacyburris/caps)
+ [ci/cd](https://github.com/stacyburris/caps/actions)

### Setup

.env requirements
  + `port=3000`
```
 "dependencies": {
    "dotenv": "^8.2.0",
    "faker": "^5.1.0",
    "jest": "^26.6.3",
    "socket.io": "^2.3.0",
    "socket.io-client": "^2.3.1"
  }
  ```

### Running the app

+ Terminals
  + node queue-server.js
  + node flowers206.js
  + node widgets.js
  + node driver.js

### Console Return Example

```
caps[queue !?]$ node queue-server.js
/caps#q5JI5sr92mWTXCvrAAAB is joining 1-206-flowers
/caps#o_VySTr1NN18dTxuAAAC is joining acme-widgets
EVENT: {
  events: 'pickup',
  time: 'Thu Dec 24 2020 16:48:18 GMT-0800 (Pacific Standard Time)',
  payload: {
    storeName: '1-206-flowers',
    orderId: '689650ab-1adc-404b-b693-3aa57f764a11',
    customerName: 'Calvin Toy',
    address: 'Serenaville, Wisconsin'
  }
}
EVENT: {
  events: 'in-transit',
  time: 'Thu Dec 24 2020 16:48:19 GMT-0800 (Pacific Standard Time)',
  payload: {
    storeName: '1-206-flowers',
    orderId: '689650ab-1adc-404b-b693-3aa57f764a11',
    customerName: 'Calvin Toy',
    address: 'Serenaville, Wisconsin'
  }
}
EVENT: {
  events: 'pickup',
  time: 'Thu Dec 24 2020 16:48:20 GMT-0800 (Pacific Standard Time)',
  payload: {
    storeName: 'acme-widgets',
    orderId: '8573424e-bdc8-4cc9-98bd-8dfe41ef5e66',
    customerName: 'Miriam Haag',
    address: 'Abelview, South Dakota'
  }
}
EVENT: {
  events: 'delivered',
  time: 'Thu Dec 24 2020 16:48:21 GMT-0800 (Pacific Standard Time)',
  payload: {
    storeName: '1-206-flowers',
    orderId: '689650ab-1adc-404b-b693-3aa57f764a11',
    customerName: 'Calvin Toy',
    address: 'Serenaville, Wisconsin'
  }
}
Order has been delivered! {
  storeName: '1-206-flowers',
  orderId: '689650ab-1adc-404b-b693-3aa57f764a11',
  customerName: 'Calvin Toy',
  address: 'Serenaville, Wisconsin'
}
EVENT: {
  events: 'in-transit',
  time: 'Thu Dec 24 2020 16:48:21 GMT-0800 (Pacific Standard Time)',
  payload: {
    storeName: 'acme-widgets',
    orderId: '8573424e-bdc8-4cc9-98bd-8dfe41ef5e66',
    customerName: 'Miriam Haag',
    address: 'Abelview, South Dakota'
  }
}
```

### Tests

Unit Tests: npm test

### UML

+ (Created with diagrams)

+ [uml-lab11](/assets/uml-lab11.png)
+ [uml-lab12](/assets/uml-lab12.jpg)
+ [uml-lab13](/assets/UML-lab13.png)
