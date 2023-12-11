// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a port number for the server to listen on
const port = 3000;

// Use the express.json() middleware to automatically parse JSON bodies
app.use(express.json());

// Define a GET route for the root of the API
// When someone makes a GET request to the root, the callback function is executed
app.get('/', (req, res) => {
  // Send a response back to the client
  res.send('Welcome to the IoT Backend API!');
});

// Define a POST route for adding a new IoT device
app.post('/devices', (req, res) => {
  // Here you would normally add logic to handle the request and add the device to your database
  // For now, we're just sending a placeholder response back to the client
  res.status(201).send('Device added');
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  // Log a message to the console so we know the server has started successfully
  console.log(`Server running at http://localhost:${port}`);
});
