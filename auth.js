const express = require('express');
const router = express.Router();

// Mock database for users
const users = [];

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({ message: 'Login successful', token: 'mock-jwt-token', user });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Signup Route
router.post('/signup', (req, res) => {
  const { name, email, password, confirm, terms, accessBlind, accessDeaf, accessWheel, pace, group, destinations, profilePicture } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Check if user exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email is already registered' });
  }
  
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password, // Mock storage
    profilePicture,
    preferences: {
      accessBlind, accessDeaf, accessWheel, pace, group, destinations
    }
  };
  
  users.push(newUser);
  
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

// Forgot Password Route
router.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  
  res.json({ message: 'Password reset link sent if email exists' });
});

// Admin Route to get all users
router.get('/users', (req, res) => {
  // Omit passwords for security
  const safeUsers = users.map(u => {
    const { password, ...rest } = u;
    return rest;
  });
  res.json(safeUsers);
});

module.exports = router;
