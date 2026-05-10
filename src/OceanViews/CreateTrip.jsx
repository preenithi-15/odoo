import React, { useState } from 'react';

export default function CreateTrip({ navigate }) {
  const [photo, setPhoto] = useState(null);
  const [selectedType, setSelectedType] = useState('luxury');

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const travelTypes = [
    { id: 'budget', name: 'Budget', img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80' },
    { id: 'luxury', name: 'Luxury', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
    { id: 'adventure', name: 'Adventure', img: 'https://images.unsplash.com/photo-1533240332313-0bc499f52fcb?w=400&q=80' },
    { id: 'family', name: 'Family', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80' },
    { 
      id: 'accessible', 
      name: 'Accessible Travel', 
      img: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&q=80',
      badge: true 
    }
  ];

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* Fullscreen Hero */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="ocean-bg"></div>
        <div className="ocean-overlay"></div>
        <div className="particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 4}s` }}></div>
          ))}
        </div>
        
        {/* Animated airplane */}
        <i className="ti ti-plane hover-glow" style={{ position: 'absolute', top: '30%', color: 'white', fontSize: '48px', animation: 'ambient-flight 12s linear infinite', opacity: 0.8 }}></i>
        <i className="ti ti-cloud hover-glow" style={{ position: 'absolute', top: '15%', left: '10%', color: 'white', fontSize: '64px', animation: 'float-premium 6s ease-in-out infinite', opacity: 0.4 }}></i>
        <i className="ti ti-cloud hover-glow" style={{ position: 'absolute', top: '25%', right: '15%', color: 'white', fontSize: '48px', animation: 'float-premium 8s ease-in-out infinite', opacity: 0.3 }}></i>

        <div className="glass-panel animate-slide-up" style={{ padding: '40px 24px', borderRadius: 'var(--radius-lg)', textAlign: 'center', maxWidth: '90%', zIndex: 10 }}>
          <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '16px' }}>Plan Your Dream Journey</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: 1.5, marginBottom: '24px', fontFamily: 'var(--font-accent)' }}>
            Create immersive AI-powered travel experiences with smarter routes, accessibility support, and personalized adventures.
          </p>
          <button className="btn-aqua" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Start New Trip <i className="ti ti-arrow-down"></i>
          </button>
        </div>

        <div className="wave-divider"></div>
      </div>

      {/* Trip Form Section */}
      <div style={{ padding: '32px 24px', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--deep-ocean)' }}>Trip Details</h2>
        
        <div className="glass-card-premium" style={{ padding: '24px', marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--deep-ocean)' }}>Trip Name</label>
            <input type="text" className="form-input-premium" placeholder="e.g., Summer in Kyoto" />
          </div>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--deep-ocean)' }}>Start Date</label>
              <input type="date" className="form-input-premium" />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--deep-ocean)' }}>End Date</label>
              <input type="date" className="form-input-premium" />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--deep-ocean)' }}>Trip Description</label>
            <textarea className="form-input-premium" rows="3" placeholder="What are you looking forward to?"></textarea>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--deep-ocean)' }}>Cover Photo</label>
            {!photo ? (
              <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '120px', border: '2px dashed var(--aqua)', borderRadius: 'var(--radius-md)', cursor: 'pointer', backgroundColor: 'rgba(0,194,255,0.05)' }}>
                <i className="ti ti-upload" style={{ fontSize: '32px', color: 'var(--aqua)', marginBottom: '8px' }}></i>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Tap to upload</span>
                <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handlePhotoUpload} />
              </label>
            ) : (
              <div style={{ position: 'relative', height: '160px', borderRadius: 'var(--radius-md)', overflow: 'hidden', animation: 'fade-in 300ms ease' }}>
                <img src={photo} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button onClick={() => setPhoto(null)} style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <i className="ti ti-x"></i>
                </button>
              </div>
            )}
          </div>
        </div>

        <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--deep-ocean)' }}>Travel Type</h3>
        <div className="scroll-x">
          {travelTypes.map(t => (
            <div 
              key={t.id} 
              className="glass-card-premium" 
              onClick={() => setSelectedType(t.id)}
              style={{ 
                minWidth: '220px', 
                height: '140px', 
                padding: 0, 
                cursor: 'pointer',
                border: selectedType === t.id ? '2px solid var(--aqua)' : '1px solid rgba(255,255,255,0.5)',
                boxShadow: selectedType === t.id ? '0 0 20px rgba(0, 194, 255, 0.4)' : '',
                animation: t.badge ? 'pulse-opacity 3s infinite' : 'none'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${t.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,119,182,0.8), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: 'white', fontWeight: 600, fontSize: '18px', zIndex: 2 }}>
                {t.name}
              </div>
              {t.badge && (
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--aqua)', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2, boxShadow: '0 0 10px var(--aqua)' }}>
                  <i className="ti ti-wheelchair"></i> Accessible
                </div>
              )}
              {selectedType === t.id && (
                <div style={{ position: 'absolute', top: '12px', right: t.badge ? '100px' : '12px', background: 'var(--sea-green)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <i className="ti ti-check"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <button className="btn-aqua" style={{ width: '100%', height: '56px', fontSize: '18px' }} onClick={() => navigate('city-search')}>
            Build Itinerary <i className="ti ti-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
