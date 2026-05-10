import React from 'react';

export default function OceanLayout({ children, navigate, hideNavbar = false }) {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Universal Background */}
      <div className="ocean-bg"></div>
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 4}s` }}></div>
        ))}
      </div>

      {/* Universal Navbar */}
      {!hideNavbar && (
        <div className="glass-navbar" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--deep-ocean)', cursor: 'pointer' }} onClick={() => navigate('my-trips')}>
            Traveloop <i className="ti ti-plane-tilt text-gradient"></i>
          </h2>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--aqua), var(--deep-ocean))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
            SA
          </div>
        </div>
      )}

      {/* Content Injection */}
      <div style={{ position: 'relative', zIndex: 10, animation: 'fade-in 400ms ease' }}>
        {children}
      </div>
    </div>
  );
}
