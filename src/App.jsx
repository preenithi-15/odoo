import React, { useState, useEffect } from 'react';
import './index.css';
import AuthContainer from './Auth';

const sampleData = {
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
    { name: "Cairo", image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2b50?w=400&q=80" }
  ],
  budget: { total: 70000, spent: 45000, remaining: 25000 }
};

const welcomeMessages = [
  `Ready for an adventure, ${sampleData.user.name}?`,
  `Let's explore the world, ${sampleData.user.name}!`,
  `Where to next, ${sampleData.user.name}?`,
  `Your journey awaits, ${sampleData.user.name}.`,
  `Discover new horizons, ${sampleData.user.name}.`
];

function AmbientFlights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Spawn an ambient flight every 8 seconds
    const interval = setInterval(() => {
      const id = Date.now();
      const style = {
        top: `${Math.random() * 60 + 10}%`,
        animation: `ambient-flight ${6 + Math.random() * 4}s linear forwards`
      };
      setFlights(f => [...f, { id, style }]);

      // Remove after animation
      setTimeout(() => {
        setFlights(f => f.filter(flight => flight.id !== id));
      }, 10000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {flights.map(f => (
        <i key={f.id} className="ti ti-plane ambient-flight" style={{ fontSize: '32px', ...f.style }}></i>
      ))}
    </>
  );
}

function WelcomeMessage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-container">
      <h1 key={index} className="welcome-text">{welcomeMessages[index]}</h1>
    </div>
  );
}

function PreTripCard() {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const [strokeOffset, setStrokeOffset] = useState(circumference);

  useEffect(() => {
    const offset = circumference - (sampleData.upcomingTrip.readiness / 100) * circumference;
    setTimeout(() => setStrokeOffset(offset), 100);
  }, [circumference]);

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>{sampleData.upcomingTrip.destination}</h2>
          <p className="text-muted" style={{ fontSize: '14px' }}>In {sampleData.upcomingTrip.daysUntil} days</p>
        </div>
        <div style={{ position: 'relative', width: '64px', height: '64px' }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r={radius} stroke="var(--border-color)" strokeWidth="6" fill="none" />
            <circle 
              className="progress-ring__circle"
              cx="32" cy="32" r={radius} 
              stroke="var(--teal)" strokeWidth="6" fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: 'var(--teal)' }}>
            {sampleData.upcomingTrip.readiness}%
          </div>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="card" style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ti ti-cloud-rain float-anim text-teal" style={{ fontSize: '24px' }}></i>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{sampleData.weather.temp}</div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>{sampleData.weather.rain}% Rain</div>
          </div>
        </div>
        <div className="card" style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ti ti-currency-dollar text-amber float-anim" style={{ fontSize: '24px', animationDirection: 'reverse' }}></i>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>1 USD</div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>₹{sampleData.currency.rate}</div>
          </div>
        </div>
      </div>

      <button className="btn btn-full btn-coral pulse-anim">
        <i className="ti ti-alert-circle"></i>
        Emergency SOS
      </button>
    </div>
  );
}

function RecentTrips() {
  return (
    <div>
      <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: '600' }}>Recent Trips</h3>
      <div className="grid-horizontal">
        {sampleData.recentTrips.map((trip, i) => (
          <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '100px', backgroundImage: `url('${trip.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{trip.name}</span>
              {trip.verified && <i className="ti ti-rosette-discount-check-filled" style={{ color: '#3B82F6', fontSize: '16px' }}></i>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecommendedDestinations() {
  return (
    <div>
      <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: '600' }}>Recommended</h3>
      <div className="grid-horizontal">
        {sampleData.recommended.map((dest, i) => (
          <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', minWidth: '160px' }}>
            <div style={{ height: '120px', backgroundImage: `url('${dest.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: '500' }}>
              {dest.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BudgetSummary() {
  const percentSpent = (sampleData.budget.spent / sampleData.budget.total) * 100;
  return (
    <div className="card">
      <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: '600' }}>Budget Summary</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
        <span style={{ fontWeight: '500' }}>Spent: ₹{sampleData.budget.spent.toLocaleString()}</span>
        <span className="text-muted">Left: ₹{sampleData.budget.remaining.toLocaleString()}</span>
      </div>
      <div className="budget-bar-container">
        <div className="budget-bar-fill" style={{ width: `${percentSpent}%`, transition: 'width 1s ease-out' }}></div>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="nav-item active"><i className="ti ti-home"></i>Home</div>
      <div className="nav-item"><i className="ti ti-map-2"></i>Itinerary</div>
      <div className="nav-item"><i className="ti ti-star"></i>Reviews</div>
      <div className="nav-item"><i className="ti ti-passport"></i>Passport</div>
      <div className="nav-item text-coral"><i className="ti ti-sos"></i>SOS</div>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <AmbientFlights />
      <div className="content-area">
        <WelcomeMessage />
        <PreTripCard />
        <RecentTrips />
        <button className="btn btn-full btn-amber" style={{ height: '48px', fontSize: '16px' }}>
          <i className="ti ti-plus"></i>
          Plan New Trip
        </button>
        <RecommendedDestinations />
        <BudgetSummary />
      </div>
      <BottomNav />
    </>
  );
}

export default function App() {
  // authState: 'login', 'signup', 'forgot', 'dashboard'
  const [authState, setAuthState] = useState('login');

  return (
    <div className="app-container">
      {authState === 'dashboard' ? (
        <Dashboard />
      ) : (
        <AuthContainer view={authState} setView={setAuthState} onComplete={() => setAuthState('dashboard')} />
      )}
    </div>
  );
}
