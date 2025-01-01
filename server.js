const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Video Approval System is Running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

