require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging (useful for debugging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Basic test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Scrap Inventory API is running',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      scrap: '/api/scrap',
      dashboard: '/api/dashboard'
    }
  });
});

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/scrap', require('./routes/scrap'));
app.use('/api/dashboard', require('./routes/dashboard'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}`);
  console.log(`🔍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
