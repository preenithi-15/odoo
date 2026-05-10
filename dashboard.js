const express = require('express');
const router = express.Router();

// Mock Dashboard Data
const dashboardData = {
  user: { name: "Sarah" },
  upcomingTrip: { destination: "Tokyo", daysUntil: 3, readiness: 80 },
  weather: { rain: 80, temp: "22°C" },
  currency: { rate: 83.4 },
  recentTrips: [
    { name: "Kyoto", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80", verified: true },
    { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80", verified: true },
    { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80", verified: true }
  ],
  recommended: [
    { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80" },
    { name: "Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80" },
    { name: "Seoul", image: "https://images.unsplash.com/photo-1538681105587-85640961bf8b?w=400&q=80" },
    { name: "Cairo", image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2b50?w=400&q=80" },
    { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80" },
    { name: "Santorini", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&q=80" },
    { name: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80" },
    { name: "Machu Picchu", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&q=80" },
    { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80" }
  ],
  collaborators: [],
  budget: { total: 70000, spent: 45000, remaining: 25000 }
};

// Get Dashboard Data
router.get('/', (req, res) => {
  res.json(dashboardData);
});

router.use(express.json());

// Add Collaborator
router.post('/collaborators', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }
  
  if (!dashboardData.collaborators) {
    dashboardData.collaborators = [];
  }
  
  // Prevent duplicate adds
  if (!dashboardData.collaborators.find(c => c.username === username)) {
    dashboardData.collaborators.push({
      id: Date.now(),
      username,
      avatar: `https://ui-avatars.com/api/?name=${username}&background=random`
    });
  }
  
  res.json({ message: 'Collaborator added', collaborators: dashboardData.collaborators });
});

module.exports = router;
