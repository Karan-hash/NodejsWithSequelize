const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./models/user');
const app = express();

dotenv.config(); // Load environment variables from .env file
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON and url-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync the model with the database
User.sync({ force: false }) // Set force to true to drop and recreate the table on every app start
  .then(() => {
    console.log('Users table synced with the database.');
  })
  .catch((err) => {
    console.error('Error syncing users table:', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define a route that handles POST requests with a JSON body
app.post('/post-example', (req, res) => {
  const data = req.body; // Access the parsed request body
  res.json({ message: 'Received POST request', data });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
