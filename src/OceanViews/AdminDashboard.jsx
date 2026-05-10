import React, { useState } from 'react';

export default function AdminDashboard({ navigate }) {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'Tokyo Accessible Tours', type: 'Tour Operator', claim: 'Wheelchair Friendly', status: 'Pending' },
    { id: 2, name: 'Kyoto Imperial Stay', type: 'Hotel', claim: 'Quiet Spaces, Ramps', status: 'Pending' }
  ]);

  const handleApprove = (id) => {
    setVendors(vendors.map(v => v.id === id ? { ...v, status: 'Approved' } : v));
  };

  const handleReject = (id) => {
    setVendors(vendors.map(v => v.id === id ? { ...v, status: 'Rejected' } : v));
  };

  return (
    <div style={{ paddingBottom: '100px', position: 'relative', zIndex: 10, background: 'linear-gradient(to bottom, #001E3C, #003050)', minHeight: '100vh', color: 'white' }}>
      
      {/* Holographic Header */}
      <div style={{ height: '260px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '24px' }}>
        {/* Animated Grid Background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,194,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5, animation: 'pan-grid 20s linear infinite' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(0,223,162,0.2), transparent 50%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at bottom left, rgba(0,194,255,0.2), transparent 50%)' }}></div>

        <button onClick={() => navigate('profile')} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,194,255,0.3)', color: 'var(--aqua)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }} className="hover-glow">
          <i className="ti ti-arrow-left"></i>
        </button>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--sea-green)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sea-green)', animation: 'pulse-opacity 2s infinite' }}></div> System Online
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 700, margin: 0, textShadow: '0 0 20px rgba(0,194,255,0.5)' }}>Travel Intelligence</h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>Global AI monitoring and vendor verification.</p>
        </div>
      </div>

      <div style={{ padding: '0 24px' }}>
        
        {/* Core Analytics Widgets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px', marginTop: '-20px', zIndex: 2, position: 'relative' }}>
          <div style={{ background: 'rgba(0,20,40,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,194,255,0.2)', borderRadius: '16px', padding: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Total Trips</div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
              12,450 <i className="ti ti-trending-up" style={{ fontSize: '16px', color: 'var(--sea-green)' }}></i>
            </div>
          </div>
          <div style={{ background: 'rgba(0,20,40,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,223,162,0.2)', borderRadius: '16px', padding: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Active Users</div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
              8,902 <i className="ti ti-trending-up" style={{ fontSize: '16px', color: 'var(--sea-green)' }}></i>
            </div>
          </div>
        </div>

        {/* Accessibility Heatmap (Simulated Chart) */}
        <h2 style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--aqua)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ti ti-accessible"></i> Accessibility Insights
        </h2>
        <div style={{ background: 'rgba(0,20,40,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            <span>Top Wheelchair-Friendly Cities</span>
            <span>Rating</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { city: 'Tokyo, Japan', val: 95 },
              { city: 'Vienna, Austria', val: 88 },
              { city: 'Barcelona, Spain', val: 82 }
            ].map(c => (
              <div key={c.city}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>
                  <span>{c.city}</span>
                  <span style={{ color: 'var(--sea-green)' }}>{c.val}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${c.val}%`, background: 'var(--sea-green)', boxShadow: '0 0 10px var(--sea-green)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family Travel Trends */}
        <h2 style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: '#EF9F27', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ti ti-users"></i> Family Trends
        </h2>
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '16px' }}>
          <div style={{ minWidth: '160px', background: 'linear-gradient(135deg, rgba(239,159,39,0.1), rgba(0,0,0,0.4))', border: '1px solid rgba(239,159,39,0.3)', borderRadius: '12px', padding: '16px' }}>
            <i className="ti ti-baby-carriage" style={{ fontSize: '24px', color: '#EF9F27', marginBottom: '8px' }}></i>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Kid-Friendly Search</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>+42%</div>
          </div>
          <div style={{ minWidth: '160px', background: 'linear-gradient(135deg, rgba(0,194,255,0.1), rgba(0,0,0,0.4))', border: '1px solid rgba(0,194,255,0.3)', borderRadius: '12px', padding: '16px' }}>
            <i className="ti ti-dog" style={{ fontSize: '24px', color: 'var(--aqua)', marginBottom: '8px' }}></i>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Pet-Friendly Hotels</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>+18%</div>
          </div>
        </div>

        {/* Vendor Management */}
        <h2 style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'white', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ti ti-shield-check"></i> Verification Queue
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {vendors.map(v => (
            <div key={v.id} style={{ background: 'rgba(0,20,40,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px', position: 'relative', overflow: 'hidden' }}>
              {v.status === 'Approved' && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,223,162,0.1)', zIndex: 0 }}></div>}
              {v.status === 'Rejected' && <div style={{ position: 'absolute', inset: 0, background: 'rgba(226,75,74,0.1)', zIndex: 0 }}></div>}
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>{v.name}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{v.type}</div>
                  </div>
                  <div style={{ background: v.status === 'Pending' ? 'rgba(239,159,39,0.2)' : v.status === 'Approved' ? 'rgba(0,223,162,0.2)' : 'rgba(226,75,74,0.2)', color: v.status === 'Pending' ? '#EF9F27' : v.status === 'Approved' ? 'var(--sea-green)' : '#E24B4A', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>
                    {v.status}
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', marginBottom: '16px', borderLeft: '3px solid var(--aqua)' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px', textTransform: 'uppercase' }}>Claim to Verify</div>
                  <div style={{ fontSize: '13px', color: 'var(--aqua)', fontWeight: 600 }}>{v.claim}</div>
                </div>

                {v.status === 'Pending' && (
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => handleApprove(v.id)} style={{ flex: 1, height: '40px', background: 'rgba(0,223,162,0.2)', border: '1px solid var(--sea-green)', color: 'var(--sea-green)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <i className="ti ti-check"></i> Approve
                    </button>
                    <button onClick={() => handleReject(v.id)} style={{ flex: 1, height: '40px', background: 'rgba(226,75,74,0.2)', border: '1px solid #E24B4A', color: '#E24B4A', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <i className="ti ti-x"></i> Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
