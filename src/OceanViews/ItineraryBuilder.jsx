import React, { useState, useEffect } from 'react';

export default function ItineraryBuilder({ navigate }) {
  const [optimizing, setOptimizing] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOptimizing(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const cities = [
    {
      id: 1, name: 'Tokyo', desc: 'Neon lights and ancient temples.',
      img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80',
      weather: '24°C Sunny',
      accessWarning: false,
    },
    {
      id: 2, name: 'Kyoto', desc: 'Fushimi Inari Shrine (Stairs heavy).',
      img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80',
      weather: '22°C Cloudy',
      accessWarning: true,
      altOption: 'Nijo Castle (Fully accessible flat paths, elevator access)'
    },
    {
      id: 3, name: 'Osaka', desc: 'Street food paradise in Dotonbori.',
      img: 'https://images.unsplash.com/photo-1590559899731-a382839cecd5?w=400&q=80',
      weather: '25°C Clear',
      accessWarning: false,
    }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '100px', background: 'var(--frost-white)' }}>
      {/* Dynamic Animated Header */}
      <div style={{ padding: '40px 24px 80px 24px', background: 'linear-gradient(135deg, var(--deep-ocean), var(--aqua))', borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px', position: 'relative', overflow: 'hidden' }}>
        <div className="particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 4}s` }}></div>
          ))}
        </div>
        <button onClick={() => navigate('my-trips')} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', marginBottom: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ti ti-arrow-left" style={{ fontSize: '20px' }}></i>
        </button>
        <h1 style={{ color: 'white', fontSize: '28px', marginBottom: '8px' }}>Build Your Journey</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontFamily: 'var(--font-accent)' }}>AI-Powered Route Optimization Active</p>
      </div>

      <div style={{ padding: '0 24px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        
        {/* AI Route Optimization Panel */}
        <div className="glass-card-premium" style={{ padding: '20px', marginBottom: '32px', border: '2px solid var(--aqua)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,194,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className={`ti ${optimizing ? 'ti-loader ti-spin' : 'ti-brain'}`} style={{ fontSize: '24px', color: 'var(--aqua)' }}></i>
            </div>
            <div>
              <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)' }}>Smart Route Optimization</h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{optimizing ? 'Calculating best routes...' : '3 suggestions found'}</p>
            </div>
          </div>
          
          {!optimizing && (
            <div className="animate-slide-up" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', margin: '0 -20px', paddingLeft: '20px', paddingRight: '20px' }}>
              <div style={{ minWidth: '140px', background: 'rgba(0, 223, 162, 0.1)', border: '1px solid var(--sea-green)', borderRadius: 'var(--radius-sm)', padding: '12px', cursor: 'pointer' }} className="hover-glow">
                <i className="ti ti-accessible" style={{ color: 'var(--sea-green)', fontSize: '20px', marginBottom: '8px' }}></i>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--deep-ocean)' }}>Easier Transport</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Fewer transfers</div>
              </div>
              <div style={{ minWidth: '140px', background: 'rgba(0, 194, 255, 0.1)', border: '1px solid var(--aqua)', borderRadius: 'var(--radius-sm)', padding: '12px', cursor: 'pointer' }} className="hover-glow">
                <i className="ti ti-coin" style={{ color: 'var(--aqua)', fontSize: '20px', marginBottom: '8px' }}></i>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--deep-ocean)' }}>Cheaper Route</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Save $140</div>
              </div>
              <div style={{ minWidth: '140px', background: 'rgba(137, 207, 243, 0.2)', border: '1px solid var(--sky-blue)', borderRadius: 'var(--radius-sm)', padding: '12px', cursor: 'pointer' }} className="hover-glow">
                <i className="ti ti-clock-fast" style={{ color: 'var(--deep-ocean)', fontSize: '20px', marginBottom: '8px' }}></i>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--deep-ocean)' }}>Fastest Route</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>-2 hrs travel</div>
              </div>
            </div>
          )}
        </div>

        {/* Floating Timeline */}
        <div style={{ position: 'relative', paddingLeft: '48px', marginBottom: '32px' }}>
          <div className="timeline-path">
            {/* Glowing route lines */}
            <svg style={{ position: 'absolute', top: 0, left: '-1px', width: '4px', height: '100%' }}>
              <line x1="2" y1="0" x2="2" y2="100%" stroke="var(--aqua)" strokeWidth="4" strokeDasharray="10" style={{ animation: 'draw-route 2s linear infinite reverse' }} />
            </svg>
          </div>
          
          {cities.map((city, index) => (
            <div key={city.id} style={{ position: 'relative', marginBottom: '32px' }}>
              <div className="timeline-dot" style={{ top: '32px' }}></div>
              
              <div className="glass-card-premium" style={{ padding: '0', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div style={{ height: '120px', backgroundImage: `url('${city.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                  <h3 style={{ position: 'absolute', bottom: '12px', left: '16px', color: 'white', fontSize: '20px', fontWeight: 600 }}>{city.name}</h3>
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: 'var(--radius-sm)', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <i className="ti ti-cloud"></i> {city.weather}
                  </div>
                  
                  {/* Simulated drag handle */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', width: '32px', height: '32px', background: 'rgba(0,0,0,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'grab' }}>
                    <i className="ti ti-grip-vertical"></i>
                  </div>
                </div>

                <div style={{ padding: '16px' }}>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>{city.desc}</p>
                  
                  {/* Accessibility Warning */}
                  {city.accessWarning && (
                    <div style={{ marginTop: '12px', animation: 'fade-in 500ms ease' }}>
                      <div style={{ background: '#FFF3CD', borderLeft: '4px solid #FFC107', padding: '12px', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', marginBottom: '8px', display: 'flex', gap: '12px' }}>
                        <i className="ti ti-alert-triangle" style={{ color: '#856404', fontSize: '20px' }}></i>
                        <div>
                          <div style={{ color: '#856404', fontWeight: 600, fontSize: '13px' }}>This attraction has stairs.</div>
                        </div>
                      </div>
                      <div style={{ background: 'var(--frost-white)', border: '1px solid var(--aqua)', padding: '12px', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <i className="ti ti-wheelchair" style={{ color: 'var(--aqua)', fontSize: '20px' }}></i>
                        <div>
                          <div style={{ color: 'var(--deep-ocean)', fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>Alternative accessible option nearby:</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{city.altOption}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Transport Icon Connector between cities */}
                  {index < cities.length - 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', color: 'var(--aqua)', fontSize: '12px', fontWeight: 600 }}>
                      <i className="ti ti-train" style={{ fontSize: '20px', animation: 'float-premium 3s infinite' }}></i>
                      Shinkansen 2h 15m
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add Stop Button */}
          <div style={{ position: 'relative' }}>
            <div className="timeline-dot" style={{ top: '16px', background: 'var(--text-muted)', boxShadow: 'none' }}></div>
            <button style={{ width: '100%', padding: '16px', background: 'transparent', border: '2px dashed var(--aqua)', borderRadius: 'var(--radius-md)', color: 'var(--aqua)', fontWeight: 600, fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} className="hover-glow">
              <i className="ti ti-plus"></i> Add Stop
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
