import React, { useState } from 'react';

export default function MyTrips({ navigate }) {
  const [showUnlock, setShowUnlock] = useState(true);

  const trips = [
    { id: 1, name: 'Summer in Kyoto', dates: 'Aug 12 - Aug 20', dests: 3, img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80' },
    { id: 2, name: 'Maldives Retreat', dates: 'Nov 5 - Nov 12', dests: 1, img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80' },
    { id: 3, name: 'Alpine Adventure', dates: 'Jan 10 - Jan 22', dests: 4, img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80' }
  ];

  return (
    <div style={{ padding: '24px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
      {/* Greeting & Search */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', color: 'var(--deep-ocean)', marginBottom: '8px' }}>Welcome back, Sarah</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '16px' }}>Where is your next adventure taking you?</p>
        
        <div style={{ position: 'relative' }}>
          <i className="ti ti-search" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
          <input type="text" className="form-input-premium" placeholder="Search destinations, trips..." style={{ paddingLeft: '48px' }} />
        </div>
      </div>

      {/* Stats Widgets */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
        <div className="glass-card-premium" style={{ padding: '16px', textAlign: 'center' }}>
          <i className="ti ti-world" style={{ fontSize: '24px', color: 'var(--aqua)', marginBottom: '8px' }}></i>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--deep-ocean)' }}>12</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Countries</div>
        </div>
        <div className="glass-card-premium" style={{ padding: '16px', textAlign: 'center' }}>
          <i className="ti ti-plane-departure" style={{ fontSize: '24px', color: 'var(--sea-green)', marginBottom: '8px' }}></i>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--deep-ocean)' }}>8</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Total Trips</div>
        </div>
      </div>

      {/* Tokyo Stamp Unlocked */}
      {showUnlock && (
        <div className="glass-card-premium animate-slide-up" style={{ padding: '20px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248, 250, 252, 0.9))', border: '2px solid var(--aqua)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,194,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse-opacity 2s infinite' }}>
            <i className="ti ti-stamp" style={{ fontSize: '32px', color: 'var(--aqua)' }}></i>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '16px', color: 'var(--deep-ocean)', marginBottom: '4px' }}>Tokyo Stamp Unlocked!</h3>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>You've earned a new passport stamp.</p>
          </div>
          <button onClick={() => setShowUnlock(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><i className="ti ti-x"></i></button>
        </div>
      )}

      {/* Trip Cards */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '20px', color: 'var(--deep-ocean)' }}>Upcoming Trips</h2>
        <button className="link-btn" onClick={() => navigate('create')}>+ New Trip</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {trips.map((trip) => (
          <div key={trip.id} className="glass-card-premium" style={{ height: '220px', padding: 0, display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => navigate('trip-itinerary')}>
            <div style={{ height: '140px', backgroundImage: `url('${trip.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.9)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, color: 'var(--deep-ocean)' }}>
                {trip.dests} Destinations
              </div>
            </div>
            <div style={{ padding: '16px', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.8)' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>{trip.name}</h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}><i className="ti ti-calendar" style={{ marginRight: '4px' }}></i> {trip.dates}</div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', background: 'white', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow"><i className="ti ti-download"></i></button>
                <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: 'var(--aqua)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow"><i className="ti ti-arrow-right"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
