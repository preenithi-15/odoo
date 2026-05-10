import React, { useState } from 'react';

export default function ActivitySearch({ navigate }) {
  const [activeTab, setActiveTab] = useState('Culture');

  const tabs = ['Adventure', 'Food', 'Nature', 'Culture', 'Nightlife', 'Relaxation'];

  const activities = [
    {
      id: 1, name: 'Senso-ji Temple Tour', category: 'Culture',
      img: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=600&q=80',
      duration: '2h', cost: 'Free', crowd: 'High', rating: 4.8, distance: '1.2km',
      badges: ['Wheelchair Friendly', 'Quiet Spaces', 'Senior Friendly'],
      community: { access: 4.9, safety: 4.8, comfort: 4.5, crowd: 3.2 }
    },
    {
      id: 2, name: 'Tsukiji Outer Market', category: 'Food',
      img: 'https://images.unsplash.com/photo-1551043047-1d2adf00f3fe?w=600&q=80',
      duration: '3h', cost: '$$$', crowd: 'Very High', rating: 4.9, distance: '3.5km',
      badges: ['Good for Kids', 'Tactile Maps'],
      community: { access: 3.5, safety: 4.5, comfort: 3.0, crowd: 2.1 }
    },
    {
      id: 3, name: 'Meiji Shrine Walk', category: 'Nature',
      img: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=600&q=80',
      duration: '1.5h', cost: 'Free', crowd: 'Low', rating: 4.7, distance: '5.0km',
      badges: ['Wheelchair Friendly', 'Quiet Spaces', 'Pets Allowed', 'Ramps'],
      community: { access: 4.8, safety: 4.9, comfort: 4.7, crowd: 4.8 }
    }
  ];

  return (
    <div style={{ padding: '24px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
      
      {/* Header & Tabs */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Activities in Tokyo</h1>
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <i className="ti ti-search" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '20px' }}></i>
          <input type="text" className="form-input-premium" placeholder="Search experiences..." style={{ paddingLeft: '48px' }} />
        </div>

        <div className="scroll-x" style={{ paddingBottom: '8px', borderBottom: '1px solid rgba(0,194,255,0.2)' }}>
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none', border: 'none', padding: '8px 12px', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
                color: activeTab === tab ? 'var(--deep-ocean)' : 'var(--text-muted)',
                position: 'relative',
                whiteSpace: 'nowrap'
              }}
            >
              {tab}
              {activeTab === tab && (
                <div style={{ position: 'absolute', bottom: '-9px', left: 0, right: 0, height: '3px', background: 'var(--aqua)', borderRadius: '3px', boxShadow: '0 0 10px var(--aqua)' }}></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {activities.map(act => (
          <div key={act.id} className="glass-card-premium" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '160px', backgroundImage: `url('${act.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: 'var(--radius-sm)', fontSize: '12px', fontWeight: 700, color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <i className="ti ti-star-filled" style={{ color: '#F59E0B' }}></i> {act.rating}
              </div>
            </div>

            <div style={{ padding: '16px', background: 'rgba(255,255,255,0.8)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--deep-ocean)', marginBottom: '8px' }}>{act.name}</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '4px' }}><i className="ti ti-clock" style={{ color: 'var(--aqua)' }}></i> {act.duration}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '4px' }}><i className="ti ti-cash" style={{ color: 'var(--sea-green)' }}></i> {act.cost}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '4px' }}><i className="ti ti-map-pin" style={{ color: 'var(--deep-ocean)' }}></i> {act.distance}</div>
              </div>

              {/* Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {act.badges.map(b => (
                  <div key={b} style={{ background: 'rgba(0,194,255,0.1)', border: '1px solid var(--aqua)', color: 'var(--deep-ocean)', fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
                    {b}
                  </div>
                ))}
              </div>

              {/* Community Ratings */}
              <div style={{ background: 'rgba(248, 250, 252, 0.5)', borderRadius: 'var(--radius-sm)', padding: '12px', marginBottom: '16px', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>Community Experience</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Access</span> <span style={{ fontWeight: 600, color: act.community.access > 4 ? 'var(--sea-green)' : 'var(--text-main)' }}>{act.community.access}/5</span>
                  </div>
                  <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Crowd</span> <span style={{ fontWeight: 600, color: act.community.crowd < 3 ? '#E24B4A' : 'var(--sea-green)' }}>{act.community.crowd}/5</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-aqua" style={{ flex: 1, padding: '10px' }} onClick={() => navigate('trip-itinerary')}>
                  Add <i className="ti ti-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
