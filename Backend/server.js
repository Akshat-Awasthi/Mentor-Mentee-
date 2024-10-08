require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database'); // Database connection
const userRoutes = require('./Routes/userRoutes'); // User routes

const app = express();
const PORT = process.env.PORT || 5000; // Default port 5000 if not specified

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
