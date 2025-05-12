// Load environment variables from the .env file
require('dotenv').config();

// Import necessary dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');

// Initialize the Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // Parse incoming JSON requests

// Set up the routes for the API
app.use('/api/cars', carRoutes);

// Function to connect to MongoDB database
const connectToDatabase = async () => {
  try {
    // Establish a connection to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection established successfully.');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit the application if database connection fails
  }
};

// Function to start the server
const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
};

// Initialize the app: Connect to the database and then start the server
const initializeApp = async () => {
  await connectToDatabase(); // Connect to the database
  const PORT = process.env.PORT || 3000; // Use the environment variable or default to port 3000
  startServer(PORT); // Start the server
};

// Run the initialization function
initializeApp();
