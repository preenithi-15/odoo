import React, { useState, useEffect } from 'react';

export default function TravelNotes({ navigate }) {
  const [activeMood, setActiveMood] = useState(null);
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (recording) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [recording]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const getMoodColor = () => {
    if (activeMood === 'Great') return 'rgba(0, 223, 162, 0.2)';
    if (activeMood === 'Okay') return 'rgba(239, 159, 39, 0.2)';
    if (activeMood === 'Difficult') return 'rgba(226, 75, 74, 0.2)';
    return 'transparent';
  };

  const notes = [
    { id: 1, type: 'text', title: 'Hidden Ramen Shop', text: 'Found this amazing place in a Tokyo alley. They only serve 50 bowls a day. Must return!', time: 'Yesterday, 8:45 PM', city: 'Tokyo' },
    { id: 2, type: 'voice', title: 'Audio Journal: Shibuya', duration: '02:15', time: 'Yesterday, 2:30 PM', city: 'Tokyo' },
    { id: 3, type: 'text', title: 'Bullet Train Reminder', text: 'Platform 14. Train leaves exactly at 9:00 AM. Bring cash for the bento box.', time: 'Today, 7:00 AM', city: 'Kyoto Transit' }
  ];

  const memories = [
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&q=80',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80',
    'https://images.unsplash.com/photo-1551043047-1d2adf00f3fe?w=400&q=80'
  ];

  return (
    <div style={{ paddingBottom: '100px', position: 'relative', zIndex: 10, transition: 'background 0.5s', backgroundColor: getMoodColor() }}>
      
      {/* Header */}
      <div style={{ padding: '24px 24px 0 24px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <button onClick={() => navigate('trip-itinerary')} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--sky-blue)', color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
          <i className="ti ti-arrow-left"></i>
        </button>
        <h1 style={{ fontSize: '28px', color: 'var(--deep-ocean)', margin: 0 }}>Travel Notes</h1>
      </div>

      <div style={{ padding: '0 24px' }}>
        
        {/* Mood Tracker */}
        <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>How was your trip today?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
          <button 
            onClick={() => setActiveMood('Great')}
            style={{ padding: '16px 8px', borderRadius: 'var(--radius-md)', background: activeMood === 'Great' ? 'var(--sea-green)' : 'rgba(255,255,255,0.7)', border: 'none', color: activeMood === 'Great' ? 'white' : 'var(--text-main)', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeMood === 'Great' ? '0 8px 20px rgba(0, 223, 162, 0.4)' : 'none', transform: activeMood === 'Great' ? 'scale(1.05)' : 'scale(1)' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>😊</div>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>Great</div>
          </button>
          <button 
            onClick={() => setActiveMood('Okay')}
            style={{ padding: '16px 8px', borderRadius: 'var(--radius-md)', background: activeMood === 'Okay' ? '#EF9F27' : 'rgba(255,255,255,0.7)', border: 'none', color: activeMood === 'Okay' ? 'white' : 'var(--text-main)', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeMood === 'Okay' ? '0 8px 20px rgba(239, 159, 39, 0.4)' : 'none', transform: activeMood === 'Okay' ? 'scale(1.05)' : 'scale(1)' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>😐</div>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>Okay</div>
          </button>
          <button 
            onClick={() => setActiveMood('Difficult')}
            style={{ padding: '16px 8px', borderRadius: 'var(--radius-md)', background: activeMood === 'Difficult' ? '#E24B4A' : 'rgba(255,255,255,0.7)', border: 'none', color: activeMood === 'Difficult' ? 'white' : 'var(--text-main)', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeMood === 'Difficult' ? '0 8px 20px rgba(226, 75, 74, 0.4)' : 'none', transform: activeMood === 'Difficult' ? 'scale(1.05)' : 'scale(1)' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>😞</div>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>Difficult</div>
          </button>
        </div>

        {/* Voice Notes Recorder */}
        <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Capture Audio</h2>
        <div className="glass-card-premium" style={{ padding: '24px', marginBottom: '32px', textAlign: 'center', background: recording ? 'linear-gradient(135deg, rgba(226,75,74,0.1), transparent)' : 'rgba(255,255,255,0.7)', border: recording ? '2px solid #E24B4A' : '1px solid rgba(255,255,255,0.5)', transition: 'all 0.3s' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px', marginBottom: '16px' }}>
            {recording ? (
              <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '40px' }}>
                {[...Array(12)].map((_, i) => (
                  <div key={i} style={{ width: '6px', background: '#E24B4A', borderRadius: '3px', animation: `float-premium ${Math.random() * 0.5 + 0.5}s ease-in-out infinite alternate` }}></div>
                ))}
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Tap the microphone to start recording</div>
            )}
          </div>

          <div style={{ fontSize: '24px', fontWeight: 700, color: recording ? '#E24B4A' : 'var(--deep-ocean)', marginBottom: '24px', fontVariantNumeric: 'tabular-nums' }}>
            {formatTime(timer)}
          </div>

          <button 
            onClick={() => setRecording(!recording)}
            style={{ width: '64px', height: '64px', borderRadius: '50%', background: recording ? 'white' : 'var(--aqua)', border: recording ? '4px solid #E24B4A' : 'none', color: recording ? '#E24B4A' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', cursor: 'pointer', boxShadow: recording ? '0 0 30px rgba(226,75,74,0.5)' : '0 10px 25px rgba(0,194,255,0.4)', transition: 'all 0.3s' }}
          >
            <i className={`ti ${recording ? 'ti-square-rounded-filled' : 'ti-microphone'}`} style={{ fontSize: '28px' }}></i>
          </button>
        </div>

        {/* Written Notes */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)' }}>Journal Entries</h2>
          <button style={{ background: 'none', border: 'none', color: 'var(--aqua)', fontWeight: 600, cursor: 'pointer' }} className="hover-glow">+ Add Note</button>
        </div>

        <div style={{ position: 'relative', paddingLeft: '16px', marginBottom: '40px' }}>
          <div className="timeline-path" style={{ left: 0, opacity: 0.2 }}></div>
          
          {notes.map(note => (
            <div key={note.id} style={{ position: 'relative', marginBottom: '24px' }}>
              <div className="timeline-dot" style={{ left: '-4px', top: '24px', background: note.type === 'voice' ? 'var(--aqua)' : 'var(--sea-green)', boxShadow: 'none' }}></div>
              
              <div className="glass-card-premium" style={{ marginLeft: '12px', padding: '16px', background: 'rgba(255,255,255,0.9)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '8px' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><i className="ti ti-pencil"></i></button>
                  <button style={{ background: 'none', border: 'none', color: '#E24B4A', cursor: 'pointer' }}><i className="ti ti-trash"></i></button>
                </div>

                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px', display: 'flex', gap: '8px' }}>
                  <span><i className="ti ti-clock"></i> {note.time}</span>
                  <span><i className="ti ti-map-pin"></i> {note.city}</span>
                </div>
                
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--deep-ocean)', marginBottom: note.type === 'text' ? '8px' : '16px' }}>
                  {note.type === 'voice' && <i className="ti ti-microphone" style={{ color: 'var(--aqua)', marginRight: '4px' }}></i>}
                  {note.title}
                </h3>
                
                {note.type === 'text' && (
                  <p style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: 1.5 }}>{note.text}</p>
                )}

                {note.type === 'voice' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,194,255,0.1)', padding: '8px 12px', borderRadius: 'var(--radius-full)' }}>
                    <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--aqua)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><i className="ti ti-player-play-filled" style={{ fontSize: '12px' }}></i></button>
                    <div style={{ height: '4px', flex: 1, background: 'rgba(0,194,255,0.3)', borderRadius: '2px', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', background: 'var(--aqua)', borderRadius: '2px' }}></div>
                      <div style={{ position: 'absolute', left: '30%', top: '-4px', width: '12px', height: '12px', borderRadius: '50%', background: 'white', border: '2px solid var(--aqua)' }}></div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--deep-ocean)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{note.duration}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Memory Gallery */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)' }}>Memory Gallery</h2>
          <button style={{ background: 'none', border: 'none', color: 'var(--aqua)', fontWeight: 600, cursor: 'pointer' }} className="hover-glow"><i className="ti ti-upload"></i> Upload</button>
        </div>
        
        <div className="scroll-x" style={{ paddingBottom: '16px' }}>
          {memories.map((m, i) => (
            <div key={i} style={{ width: '140px', height: '140px', borderRadius: 'var(--radius-md)', backgroundImage: `url('${m}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer' }} className="hover-glow">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,30,60,0.5), transparent)' }}></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
