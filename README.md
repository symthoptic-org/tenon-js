>[NOTE]
>Tenon API is isnt done yet so this wont work


# SYMTHOPTIC Tenon

Node.js module for interacting with the SYMTHOPITC Tenon API.

## Installation

```bash
npm install @symthoptic/tenon
```
## Usage

```javascript
const tenon = require('@symthoptic/tenon');

// Example for chat
tenon.chat({
  model: 'tenon-5',
  history: ['msg1', 'msg2'],
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Example for create
tenon.create({
  model: 'tenon-5',
  message: 'Message for the AI model here',
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

## Configuration

Before using the module, you need to configure it with your Tenon API key using the configure function.

```javascript
tenon.configure({
  apiKey: 'tenon_xxxxxxxxxxxxxxxxxxxx',
});
```

# License
(c) Symthoptic. Licensed under MIT. All rights reserved
