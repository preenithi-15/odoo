import React, { useState } from 'react';

export default function CitySearch({ navigate }) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Europe', 'Asia', 'Budget', 'Accessible', 'Low Crowd', 'Family'];

  const cities = [
    {
      id: 1, name: 'Tokyo', country: 'Japan',
      img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
      cost: '$$$', popularity: 9.8, weather: '24°C',
      accessScore: 'Yellow', crowd: 'High', safety: 9.9
    },
    {
      id: 2, name: 'Vienna', country: 'Austria',
      img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80',
      cost: '$$', popularity: 8.5, weather: '18°C',
      accessScore: 'Green', crowd: 'Low', safety: 9.5
    },
    {
      id: 3, name: 'Bali', country: 'Indonesia',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      cost: '$', popularity: 9.5, weather: '30°C',
      accessScore: 'Red', crowd: 'Medium', safety: 7.8
    }
  ];

  const getScoreColor = (score) => {
    if (score === 'Green') return '#00DFA2';
    if (score === 'Yellow') return '#EF9F27';
    if (score === 'Red') return '#E24B4A';
    return 'var(--text-muted)';
  };

  return (
    <div style={{ padding: '24px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
      
      {/* Header & Animated Search */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Explore Destinations</h1>
        <div style={{ position: 'relative', animation: 'fade-in 400ms ease' }}>
          <i className="ti ti-search" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--aqua)', fontSize: '20px' }}></i>
          <input 
            type="text" 
            className="form-input-premium" 
            placeholder="Where do you want to go?" 
            style={{ paddingLeft: '48px', height: '56px', fontSize: '18px', boxShadow: '0 8px 30px rgba(0, 194, 255, 0.2)', border: '2px solid rgba(0, 194, 255, 0.3)' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div className="glass-card-premium animate-slide-up" style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', padding: '8px 0', zIndex: 20 }}>
              <div style={{ padding: '12px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }} className="hover-glow">
                <i className="ti ti-map-pin text-gradient"></i> {search} in Japan
              </div>
              <div style={{ padding: '12px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }} className="hover-glow">
                <i className="ti ti-map-pin text-gradient"></i> {search} City Center
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Pills */}
      <div className="scroll-x" style={{ paddingBottom: '16px', paddingTop: '4px' }}>
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{ 
              padding: '8px 20px', 
              borderRadius: 'var(--radius-full)', 
              background: activeFilter === f ? 'linear-gradient(135deg, var(--aqua), var(--deep-ocean))' : 'rgba(255,255,255,0.7)',
              color: activeFilter === f ? 'white' : 'var(--deep-ocean)',
              border: activeFilter === f ? 'none' : '1px solid rgba(0,194,255,0.3)',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            className={activeFilter !== f ? 'hover-glow' : ''}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Destination Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '16px' }}>
        {cities.map((city) => (
          <div key={city.id} className="glass-card-premium" style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ height: '180px', backgroundImage: `url('${city.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.9)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <i className="ti ti-star-filled" style={{ color: '#F59E0B' }}></i> {city.popularity}
              </div>
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.9)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <i className="ti ti-cloud"></i> {city.weather}
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,119,182,0.8), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: 'white' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '2px' }}>{city.name}</h3>
                <div style={{ fontSize: '14px', opacity: 0.9 }}><i className="ti ti-map-pin"></i> {city.country}</div>
              </div>
            </div>
            
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.8)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: getScoreColor(city.accessScore) }}></div>
                  <span style={{ fontSize: '13px', color: 'var(--text-main)', fontWeight: 500 }}>Access: {city.accessScore}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="ti ti-shield-check" style={{ color: 'var(--sea-green)' }}></i>
                  <span style={{ fontSize: '13px', color: 'var(--text-main)', fontWeight: 500 }}>Safety: {city.safety}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="ti ti-users" style={{ color: 'var(--text-muted)' }}></i>
                  <span style={{ fontSize: '13px', color: 'var(--text-main)', fontWeight: 500 }}>Crowd: {city.crowd}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="ti ti-cash" style={{ color: 'var(--aqua)' }}></i>
                  <span style={{ fontSize: '13px', color: 'var(--text-main)', fontWeight: 500 }}>Cost: {city.cost}</span>
                </div>
              </div>

              <button className="btn-aqua" style={{ width: '100%', height: '48px' }} onClick={() => navigate('activity-search')}>
                Add to Trip <i className="ti ti-plus"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
