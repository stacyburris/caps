# LAB - 11 - Event Driven Applications

## Author: Stacy Burris

### Links and Resources

+ [Pull Request](https://github.com/stacyburris/caps/pull/1)
+ [GitHub](https://github.com/stacyburris/caps)
+ [ci/cd](https://github.com/stacyburris/caps/actions)

### Setup

.env requirements
  + `STORE=fancy Cat Dresses`
```
 "dependencies": {
    "dotenv": "^8.2.0",
    "faker": "^5.1.0",
    "jest": "^26.6.3"
  }
  ```

### Running the app

+ nodemon or node caps.js

### Console Return Example
```
EVENT: {
  event: 'pickup',
  time: 2020-12-22T00:47:22.157Z,
  payload: {
    storeName: 'fancy Cat Dresses',
    orderId: '347c5f6c-e1d9-4cac-a1f6-e4ebf3749390',
    customerName: 'Heather Hayes',
    address: 'New Rickie, New Hampshire'
  }
}
DRIVER: picked up 347c5f6c-e1d9-4cac-a1f6-e4ebf3749390
EVENT: {
  event: 'in-transit',
  time: 2020-12-22T00:47:23.165Z,
  payload: {
    storeName: 'fancy Cat Dresses',
    orderId: '347c5f6c-e1d9-4cac-a1f6-e4ebf3749390',
    customerName: 'Heather Hayes',
    address: 'New Rickie, New Hampshire'
  }
}
DRIVER: delivered 347c5f6c-e1d9-4cac-a1f6-e4ebf3749390
VENDOR: Thank you for ordering 347c5f6c-e1d9-4cac-a1f6-e4ebf3749390
EVENT: {
  event: 'delivered',
  time: 2020-12-22T00:47:25.162Z,
  payload: {
    storeName: 'fancy Cat Dresses',
    orderId: '347c5f6c-e1d9-4cac-a1f6-e4ebf3749390',
    customerName: 'Heather Hayes',
    address: 'New Rickie, New Hampshire'
  }
}
```

### Tests

Unit Tests: npm test

### UML

+ (Created with diagrams)

+ ![uml-lab11](uml-lab11.png)