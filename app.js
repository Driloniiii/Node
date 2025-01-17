require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');  

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use('/api/auth', authRoutes);  // Use auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
