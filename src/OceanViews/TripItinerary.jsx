import React, { useState } from 'react';

export default function TripItinerary({ navigate }) {
  const [activeDay, setActiveDay] = useState(1);
  const [reading, setReading] = useState(false);

  const days = [1, 2, 3];

  const handleReadout = () => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech not supported in this browser.");
      return;
    }
    
    if (reading) {
      window.speechSynthesis.cancel();
      setReading(false);
    } else {
      const text = "Day 1 itinerary. 9:00 AM, Senso-ji Temple Tour. Duration 2 hours. Highly accessible. 12:30 PM, Lunch at Tsukiji Market.";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setReading(false);
      window.speechSynthesis.speak(utterance);
      setReading(true);
    }
  };

  return (
    <div style={{ paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
      {/* City Header */}
      <div style={{ height: '260px', backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', color: 'white' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px' }}>Tokyo, Japan</h1>
          <div style={{ fontSize: '14px', opacity: 0.9 }}>Aug 12 - Aug 20 • 3 Travelers</div>
        </div>
        
        {/* Play Button Voice Readout */}
        <button 
          onClick={handleReadout}
          style={{ position: 'absolute', bottom: '24px', right: '24px', width: '48px', height: '48px', borderRadius: '50%', background: reading ? 'var(--coral)' : 'var(--aqua)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,0,0,0.3)', cursor: 'pointer', transition: 'all 0.3s' }}
          className="hover-glow"
        >
          <i className={`ti ${reading ? 'ti-player-stop' : 'ti-volume'} `} style={{ fontSize: '24px' }}></i>
        </button>
      </div>

      <div style={{ padding: '24px' }}>
        
        {/* City Metadata Panel */}
        <div className="glass-card-premium" style={{ padding: '16px', marginBottom: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Safety</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--sea-green)' }}>9.9/10</div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', borderRight: '1px solid rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Transport</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--aqua)' }}>Excellent</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Avg Cost</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--deep-ocean)' }}>$120/d</div>
          </div>
        </div>

        {/* Smart Filters */}
        <div className="scroll-x" style={{ paddingBottom: '16px', paddingTop: '4px' }}>
          {['Accessible', 'Low Crowd', 'Pet Friendly', 'Budget'].map(f => (
            <button key={f} style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,194,255,0.3)', color: 'var(--deep-ocean)', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}>
              {f}
            </button>
          ))}
        </div>

        {/* Day Navigation */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', position: 'sticky', top: '72px', zIndex: 40, background: 'rgba(248, 250, 252, 0.9)', padding: '12px 0', backdropFilter: 'blur(10px)' }}>
          {days.map(d => (
            <button 
              key={d}
              onClick={() => setActiveDay(d)}
              style={{ flex: 1, padding: '12px', borderRadius: 'var(--radius-sm)', border: 'none', background: activeDay === d ? 'var(--deep-ocean)' : 'rgba(255,255,255,0.8)', color: activeDay === d ? 'white' : 'var(--text-main)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeDay === d ? '0 8px 20px rgba(0, 119, 182, 0.3)' : 'none' }}
            >
              Day {d}
            </button>
          ))}
        </div>

        {/* Timeline View */}
        <div style={{ position: 'relative', paddingLeft: '24px' }}>
          <div className="timeline-path" style={{ left: '6px' }}></div>

          {/* Activity 1 */}
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <div className="timeline-dot" style={{ left: '3px', top: '24px', background: 'var(--sea-green)', boxShadow: '0 0 10px var(--sea-green)' }}></div>
            
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--deep-ocean)', marginBottom: '8px', paddingLeft: '16px' }}>9:00 AM (2h)</div>
            
            <div className="glass-card-premium" style={{ marginLeft: '16px', padding: '16px', borderLeft: '4px solid var(--sea-green)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Senso-ji Temple Tour</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span><i className="ti ti-cash"></i> Free</span>
                <span><i className="ti ti-walk"></i> 1.2km</span>
                <span style={{ color: 'var(--sea-green)', fontWeight: 600 }}><i className="ti ti-users"></i> Low Crowd</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(0, 223, 162, 0.1)', color: 'var(--sea-green)', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>Ramp Available</span>
                <span style={{ background: 'rgba(0, 194, 255, 0.1)', color: 'var(--deep-ocean)', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>Wheelchair Friendly</span>
              </div>
            </div>
          </div>

          {/* Transport Segment */}
          <div style={{ position: 'relative', marginBottom: '32px', paddingLeft: '16px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)', fontSize: '13px' }}>
            <div style={{ background: 'rgba(255,255,255,0.8)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
              <i className="ti ti-train" style={{ color: 'var(--aqua)' }}></i>
            </div>
            <span>Subway Ginza Line • 15 mins</span>
          </div>

          {/* Activity 2 */}
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <div className="timeline-dot" style={{ left: '3px', top: '24px', background: 'var(--aqua)' }}></div>
            
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--deep-ocean)', marginBottom: '8px', paddingLeft: '16px' }}>12:30 PM (1.5h)</div>
            
            <div className="glass-card-premium" style={{ marginLeft: '16px', padding: '16px', borderLeft: '4px solid var(--aqua)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Tsukiji Outer Market</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span><i className="ti ti-cash"></i> $$</span>
                <span style={{ color: '#E24B4A', fontWeight: 600 }}><i className="ti ti-users"></i> High Crowd</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Emergency Buttons */}
      <div style={{ position: 'fixed', bottom: '100px', right: '24px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 100 }}>
        <button style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'white', border: 'none', color: '#E24B4A', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', cursor: 'pointer' }} className="hover-glow">
          <i className="ti ti-first-aid" style={{ fontSize: '20px' }}></i>
        </button>
        <button style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'white', border: 'none', color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', cursor: 'pointer' }} className="hover-glow">
          <i className="ti ti-shield" style={{ fontSize: '20px' }}></i>
        </button>
        <button style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #E24B4A, #FF7B7B)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 25px rgba(226, 75, 74, 0.4)', cursor: 'pointer', fontWeight: 700, fontSize: '14px' }} className="hover-glow">
          SOS
        </button>
      </div>
    </div>
  );
}
