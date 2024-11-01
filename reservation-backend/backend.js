const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies

const mongoURL = process.env.MONGODB_URL;
// MongoDB connection
mongoose.connect(mongoURL)
    
.then(() => console.log('Connected to Mongo Atlas'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Define a reservation schema and model
const reservationSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  guests: Number,
  phone: String,
  notes: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// POST endpoint to save a reservation
app.post('/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body); // Create a new reservation document
    await reservation.save(); // Save to MongoDB
    res.status(201).send('Reservation saved successfully');
  } catch (error) {
    res.status(500).send('Error saving reservation');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
