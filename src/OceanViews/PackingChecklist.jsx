import React, { useState } from 'react';

export default function PackingChecklist({ navigate }) {
  const [items, setItems] = useState([
    { id: 1, text: 'Passport & Visas', category: 'Documents', packed: true, priority: 'Essential' },
    { id: 2, text: 'Universal Adapter', category: 'Electronics', packed: false, priority: 'Essential' },
    { id: 3, text: 'Rain Jacket', category: 'Clothing', packed: false, priority: 'Optional' },
    { id: 4, text: 'Power Bank', category: 'Electronics', packed: true, priority: 'Essential' },
    { id: 5, text: 'First Aid Kit', category: 'Emergency', packed: false, priority: 'Emergency' },
    { id: 6, text: 'Swimwear', category: 'Clothing', packed: false, priority: 'Optional' }
  ]);

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Documents', 'Electronics', 'Clothing', 'Emergency'];

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = activeCategory === 'All' ? items : items.filter(i => i.category === activeCategory);
  
  const totalItems = items.length;
  const packedItems = items.filter(i => i.packed).length;
  const progress = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  const getPriorityColor = (priority) => {
    if (priority === 'Essential') return 'var(--aqua)';
    if (priority === 'Emergency') return '#E24B4A';
    return 'var(--text-muted)';
  };

  return (
    <div style={{ padding: '24px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <button onClick={() => navigate('trip-itinerary')} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--sea-green)', color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
          <i className="ti ti-arrow-left"></i>
        </button>
        <h1 style={{ fontSize: '28px', color: 'var(--deep-ocean)', margin: 0 }}>Packing List</h1>
      </div>

      {/* Progress Tracker */}
      <div className="glass-card-premium" style={{ padding: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* SVG Circular Progress */}
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
            <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="8" />
            <circle 
              cx="40" cy="40" r="36" fill="none" 
              stroke="var(--sea-green)" 
              strokeWidth="8" 
              strokeDasharray="226" 
              strokeDashoffset={226 - (226 * progress) / 100} 
              style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
              strokeLinecap="round"
            />
          </svg>
          <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--deep-ocean)' }}>{progress}%</div>
        </div>
        <div>
          <h2 style={{ fontSize: '18px', color: 'var(--deep-ocean)', marginBottom: '4px' }}>Ready to go!</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{packedItems} of {totalItems} items packed</p>
        </div>
      </div>

      {/* Smart Weather Suggestion */}
      <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', background: 'rgba(239, 159, 39, 0.1)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid #EF9F27' }}>
        <i className="ti ti-cloud-rain" style={{ color: '#EF9F27', fontSize: '24px' }}></i>
        <div>
          <div style={{ fontWeight: 600, color: '#EF9F27', fontSize: '14px', marginBottom: '4px' }}>Weather Alert: Rain expected</div>
          <div style={{ fontSize: '13px', color: 'var(--text-main)', marginBottom: '8px' }}>High chance of rain on Day 2 in Kyoto.</div>
          <button style={{ background: '#EF9F27', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }} className="hover-glow">
            + Add Umbrella
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="scroll-x" style={{ paddingBottom: '16px', paddingTop: '4px' }}>
        {categories.map(c => (
          <button 
            key={c}
            onClick={() => setActiveCategory(c)}
            style={{ 
              padding: '8px 20px', 
              borderRadius: 'var(--radius-full)', 
              background: activeCategory === c ? 'var(--deep-ocean)' : 'rgba(255,255,255,0.7)',
              color: activeCategory === c ? 'white' : 'var(--deep-ocean)',
              border: activeCategory === c ? 'none' : '1px solid rgba(0,194,255,0.3)',
              fontWeight: 600, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Checklist */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
        {filteredItems.map(item => (
          <div key={item.id} className="glass-card-premium" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', opacity: item.packed ? 0.6 : 1, transition: 'all 0.3s' }}>
            
            <div onClick={() => toggleItem(item.id)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: item.packed ? 'none' : '2px solid var(--aqua)', background: item.packed ? 'var(--sea-green)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s' }}>
              {item.packed && <i className="ti ti-check" style={{ color: 'white', fontSize: '16px' }}></i>}
            </div>
            
            <div style={{ flex: 1, textDecoration: item.packed ? 'line-through' : 'none', transition: 'all 0.3s' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--deep-ocean)' }}>{item.text}</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.category}</span>
                <span style={{ fontSize: '11px', fontWeight: 600, color: getPriorityColor(item.priority) }}>• {item.priority}</span>
              </div>
            </div>

            <button onClick={() => deleteItem(item.id)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '8px' }}>
              <i className="ti ti-trash"></i>
            </button>
          </div>
        ))}

        <div className="glass-card-premium hover-glow" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '2px dashed var(--aqua)', background: 'rgba(255,255,255,0.4)', cursor: 'pointer', justifyContent: 'center' }}>
          <i className="ti ti-plus" style={{ color: 'var(--aqua)', fontSize: '20px' }}></i>
          <span style={{ color: 'var(--aqua)', fontWeight: 600 }}>Add new item</span>
        </div>
      </div>
    </div>
  );
}
