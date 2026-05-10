import React from 'react';

export default function SharedItinerary({ navigate }) {
  const collaborators = [
    { id: 1, name: 'Sarah', avatar: 'SA', color: 'var(--aqua)' },
    { id: 2, name: 'Mike', avatar: 'MI', color: 'var(--sea-green)' },
    { id: 3, name: 'Emma', avatar: 'EM', color: '#EF9F27' },
  ];

  const highlights = [
    { id: 1, text: 'Senso-ji Temple', img: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=400&q=80' },
    { id: 2, text: 'Mt. Fuji View', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80' },
    { id: 3, text: 'Shibuya Crossing', img: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=400&q=80' },
  ];

  return (
    <div style={{ paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
      {/* Majestic Hero Banner */}
      <div style={{ height: '350px', backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,30,60,0.9), transparent, rgba(0,0,0,0.3))' }}></div>
        
        {/* Top Actions */}
        <div style={{ position: 'absolute', top: '24px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => navigate('trip-itinerary')} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
            <i className="ti ti-arrow-left"></i>
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
              <i className="ti ti-heart"></i>
            </button>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
              <i className="ti ti-dots-vertical"></i>
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div style={{ position: 'absolute', bottom: '32px', left: '24px', right: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span style={{ background: 'var(--aqua)', color: 'white', fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '4px' }}>Public</span>
            <span style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: 'white', fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '4px' }}><i className="ti ti-star-filled" style={{ color: '#F59E0B' }}></i> 4.9 (120 saves)</span>
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '8px', lineHeight: 1.1 }}>The Ultimate Japan Explorer</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '16px' }}>14 Days • 3 Cities • Budget-Friendly</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Collaborators */}
            <div style={{ display: 'flex' }}>
              {collaborators.map((c, i) => (
                <div key={c.id} style={{ width: '32px', height: '32px', borderRadius: '50%', background: c.color, border: '2px solid rgba(0,30,60,0.9)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600, marginLeft: i === 0 ? 0 : '-12px', zIndex: 10 - i }}>
                  {c.avatar}
                </div>
              ))}
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: '2px dashed rgba(255,255,255,0.5)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginLeft: '-12px', zIndex: 7, cursor: 'pointer' }} className="hover-glow">
                <i className="ti ti-plus"></i>
              </div>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>Sarah & 2 others</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        
        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
          <button className="btn-aqua" style={{ flex: 1, height: '48px' }}>
            <i className="ti ti-copy"></i> Copy Trip
          </button>
          <button style={{ flex: 1, height: '48px', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--aqua)', color: 'var(--deep-ocean)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }} className="hover-glow">
            <i className="ti ti-pencil"></i> Request Edit
          </button>
        </div>

        {/* Social Share */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '12px', fontWeight: 600 }}>Share to Socials</h3>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', cursor: 'pointer' }} className="hover-glow"><i className="ti ti-brand-instagram"></i></div>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', cursor: 'pointer' }} className="hover-glow"><i className="ti ti-brand-whatsapp"></i></div>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#000000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', cursor: 'pointer' }} className="hover-glow"><i className="ti ti-brand-x"></i></div>
          </div>
        </div>

        {/* Trip Highlights Gallery */}
        <h2 style={{ fontSize: '20px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Trip Highlights</h2>
        <div className="scroll-x" style={{ paddingBottom: '16px' }}>
          {highlights.map((h) => (
            <div key={h.id} style={{ width: '160px', height: '220px', borderRadius: 'var(--radius-md)', backgroundImage: `url('${h.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,30,60,0.8), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: 'white', fontSize: '14px', fontWeight: 600 }}>{h.text}</div>
            </div>
          ))}
        </div>

        {/* Read-Only Timeline Preview */}
        <h2 style={{ fontSize: '20px', color: 'var(--deep-ocean)', marginBottom: '16px', marginTop: '16px' }}>Itinerary Preview</h2>
        <div className="glass-card-premium" style={{ padding: '20px' }}>
          <div style={{ position: 'relative', paddingLeft: '16px' }}>
            <div className="timeline-path" style={{ left: 0, background: 'var(--text-muted)', opacity: 0.2 }}></div>
            
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <div className="timeline-dot" style={{ left: '-3px', top: '4px', background: 'var(--text-muted)', boxShadow: 'none' }}></div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--deep-ocean)', marginBottom: '4px' }}>Day 1: Arrival & Exploration</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Senso-ji Temple, Tokyo Skytree, Ueno Park</div>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <div className="timeline-dot" style={{ left: '-3px', top: '4px', background: 'var(--text-muted)', boxShadow: 'none' }}></div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--deep-ocean)', marginBottom: '4px' }}>Day 2: Food & Culture</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Tsukiji Market, Akihabara, Shibuya</div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div className="timeline-dot" style={{ left: '-3px', top: '4px', background: 'var(--text-muted)', boxShadow: 'none' }}></div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--aqua)', marginBottom: '4px', cursor: 'pointer' }}>View Full 14-Day Itinerary <i className="ti ti-arrow-right"></i></div>
            </div>
          </div>
        </div>

        {/* Community Comments Placeholder */}
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '20px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Community (24)</h2>
          <div className="glass-card-premium" style={{ padding: '16px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#EF9F27', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600 }}>JD</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--deep-ocean)' }}>John Doe</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>2 hours ago</div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.5 }}>
              Copied this itinerary for my upcoming trip! The accessibility highlights saved me so much research time. Thank you!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
