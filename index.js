const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
// const User = require('./models/user');

// Importing Models and Database connection
require('./models/index');
const app = express();

dotenv.config(); // Load environment variables from .env file
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON and url-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/user', userRoutes);


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
