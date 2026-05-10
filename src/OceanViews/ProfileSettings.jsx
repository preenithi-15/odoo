import React, { useState } from 'react';

export default function ProfileSettings({ navigate }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const savedDestinations = [
    { name: 'Tokyo', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80' },
    { name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80' },
    { name: 'Paris', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80' },
    { name: 'Swiss Alps', img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80' }
  ];

  return (
    <div style={{ paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
      {/* Top Hero Section */}
      <div style={{ height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <button onClick={() => navigate('my-trips')} style={{ position: 'absolute', top: '24px', left: '24px', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--aqua)', color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
          <i className="ti ti-arrow-left"></i>
        </button>

        <div style={{ position: 'relative', width: '100px', height: '100px', marginBottom: '16px', animation: 'float-premium 6s ease-in-out infinite' }}>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--aqua)', boxShadow: '0 0 20px rgba(0,194,255,0.5)' }} />
          <button style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--deep-ocean)', color: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            <i className="ti ti-camera"></i>
          </button>
        </div>
        <h1 style={{ fontSize: '24px', color: 'var(--deep-ocean)', fontWeight: 700, margin: 0 }}>Sarah Anderson</h1>
      </div>

      <div style={{ padding: '0 24px' }}>
        
        {/* Profile Details */}
        <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Personal Details</h2>
        <div className="glass-card-premium" style={{ padding: '24px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Full Name</label>
            <input type="text" className="form-input-premium" defaultValue="Sarah Anderson" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Email Address</label>
            <input type="email" className="form-input-premium" defaultValue="sarah@traveloop.ai" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Language</label>
            <select className="form-input-premium" defaultValue="en">
              <option value="en">English (US)</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <button className="btn-aqua" style={{ width: '100%', marginTop: '8px' }}>
            Save Changes <i className="ti ti-check"></i>
          </button>
        </div>

        {/* Travel Passport Stats */}
        <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Travel Passport</h2>
        <div className="glass-card-premium" style={{ padding: '24px', marginBottom: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248, 250, 252, 0.9))', border: '2px solid var(--aqua)', position: 'relative', overflow: 'hidden' }}>
          <i className="ti ti-world" style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px', color: 'var(--aqua)', opacity: 0.1 }}></i>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--deep-ocean)', textShadow: '0 0 10px rgba(0,194,255,0.3)' }}>12</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Countries</div>
          </div>
          <div style={{ position: 'relative', zIndex: 2, borderLeft: '1px solid rgba(0,0,0,0.1)', borderRight: '1px solid rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--sea-green)', textShadow: '0 0 10px rgba(0,223,162,0.3)' }}>8</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Trips</div>
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#EF9F27', textShadow: '0 0 10px rgba(239,159,39,0.3)' }}>15</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Stamps</div>
          </div>
        </div>

        {/* Saved Destinations */}
        <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Saved Destinations</h2>
        <div className="scroll-x" style={{ paddingBottom: '16px', marginBottom: '16px' }}>
          {savedDestinations.map(dest => (
            <div key={dest.name} style={{ width: '120px', height: '160px', borderRadius: 'var(--radius-md)', backgroundImage: `url('${dest.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer' }} className="hover-glow">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,30,60,0.8), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: 'white', fontSize: '14px', fontWeight: 600 }}>{dest.name}</div>
            </div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Emergency Contacts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          <div className="glass-card-premium" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,194,255,0.1)', color: 'var(--aqua)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
              <i className="ti ti-users"></i>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--deep-ocean)' }}>Mark Anderson</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Family Contact</div>
            </div>
            <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--aqua)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
              <i className="ti ti-phone"></i>
            </button>
          </div>
          <div className="glass-card-premium" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(226,75,74,0.1)', color: '#E24B4A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
              <i className="ti ti-first-aid"></i>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--deep-ocean)' }}>Dr. Sarah Jenkins</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Medical Contact</div>
            </div>
            <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E24B4A', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 15px rgba(226,75,74,0.4)' }} className="hover-glow">
              <i className="ti ti-phone"></i>
            </button>
          </div>
        </div>

        {/* Admin Access (Hidden Demo Link) */}
        <button onClick={() => navigate('admin-dashboard')} style={{ width: '100%', background: 'transparent', border: '1px dashed var(--text-muted)', color: 'var(--text-muted)', padding: '12px', borderRadius: 'var(--radius-sm)', marginBottom: '32px', cursor: 'pointer' }}>
          <i className="ti ti-lock"></i> Access Admin Dashboard
        </button>

        {/* Delete Account */}
        <div className="glass-card-premium" style={{ padding: '20px', border: '1px solid rgba(226,75,74,0.3)', background: 'rgba(226,75,74,0.05)', textAlign: 'center' }}>
          <i className="ti ti-alert-triangle" style={{ fontSize: '24px', color: '#E24B4A', marginBottom: '8px' }}></i>
          <h3 style={{ fontSize: '16px', color: '#E24B4A', marginBottom: '8px' }}>Danger Zone</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>Once you delete your account, there is no going back. Please be certain.</p>
          <button onClick={() => setShowDeleteModal(true)} style={{ background: '#E24B4A', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer' }} className="hover-glow">
            Delete Account
          </button>
        </div>

      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,30,60,0.8)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', animation: 'fade-in 0.2s ease' }}>
          <div className="glass-card-premium" style={{ width: '100%', padding: '24px', textAlign: 'center', animation: 'slide-up-premium 0.3s ease' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(226,75,74,0.1)', color: '#E24B4A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 16px' }}>
              <i className="ti ti-trash"></i>
            </div>
            <h2 style={{ fontSize: '20px', color: 'var(--deep-ocean)', marginBottom: '8px' }}>Are you sure?</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>This action cannot be undone. All your trips, notes, and memories will be permanently deleted.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setShowDeleteModal(false)} style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.8)', border: '1px solid var(--text-muted)', borderRadius: 'var(--radius-sm)', color: 'var(--text-main)', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => navigate('login')} style={{ flex: 1, padding: '12px', background: '#E24B4A', border: 'none', borderRadius: 'var(--radius-sm)', color: 'white', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 15px rgba(226,75,74,0.3)' }}>Delete Forever</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
