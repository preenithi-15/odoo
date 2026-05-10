import React, { useState, useEffect } from 'react';

export default function TripBudget({ navigate }) {
  const [animateCharts, setAnimateCharts] = useState(false);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const t = setTimeout(() => setAnimateCharts(true), 100);
    return () => clearTimeout(t);
  }, []);

  const totalBudget = 4500;
  const currentSpend = 2850;
  const health = currentSpend > totalBudget ? 'Red' : currentSpend > totalBudget * 0.8 ? 'Yellow' : 'Green';

  const breakdown = [
    { name: 'Transport', amount: 850, color: 'var(--aqua)', percent: 30 },
    { name: 'Hotels', amount: 1200, color: 'var(--deep-ocean)', percent: 42 },
    { name: 'Activities', amount: 450, color: 'var(--sea-green)', percent: 15 },
    { name: 'Meals', amount: 350, color: '#F59E0B', percent: 13 }
  ];

  const days = [
    { day: 'Day 1', spend: 120, status: 'Green' },
    { day: 'Day 2', spend: 280, status: 'Yellow' },
    { day: 'Day 3', spend: 450, status: 'Red' }, // Expensive day
    { day: 'Day 4', spend: 85, status: 'Green' }, // Cheapest day
  ];

  const formatCurrency = (amount) => {
    const multipliers = { USD: 1, EUR: 0.92, JPY: 150.5 };
    const symbols = { USD: '$', EUR: '€', JPY: '¥' };
    return `${symbols[currency]}${Math.round(amount * multipliers[currency]).toLocaleString()}`;
  };

  return (
    <div style={{ padding: '24px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
      
      {/* Header & Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <button onClick={() => navigate('trip-itinerary')} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--aqua)', color: 'var(--deep-ocean)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="hover-glow">
          <i className="ti ti-arrow-left"></i>
        </button>
        <h1 style={{ fontSize: '28px', color: 'var(--deep-ocean)', margin: 0 }}>Trip Budget</h1>
        <div style={{ flex: 1 }}></div>
        <select 
          className="form-input-premium" 
          style={{ width: 'auto', padding: '8px 16px', height: 'auto', background: 'rgba(255,255,255,0.9)' }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="JPY">JPY (¥)</option>
        </select>
      </div>

      {/* Main Budget Card */}
      <div className="glass-card-premium" style={{ padding: '24px', marginBottom: '24px', borderTop: `4px solid ${health === 'Green' ? 'var(--sea-green)' : health === 'Yellow' ? '#EF9F27' : '#E24B4A'}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Total Spent</div>
            <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--deep-ocean)', letterSpacing: '-1px' }}>
              {formatCurrency(currentSpend)}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Remaining</div>
            <div style={{ fontSize: '20px', fontWeight: 600, color: health === 'Green' ? 'var(--sea-green)' : 'var(--text-main)' }}>
              {formatCurrency(totalBudget - currentSpend)}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ width: '100%', height: '12px', background: 'rgba(0,0,0,0.05)', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ 
            height: '100%', 
            width: animateCharts ? `${(currentSpend / totalBudget) * 100}%` : '0%', 
            background: health === 'Green' ? 'var(--sea-green)' : health === 'Yellow' ? '#EF9F27' : '#E24B4A',
            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
            borderRadius: '6px'
          }}></div>
        </div>

        {health === 'Yellow' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#856404', background: '#FFF3CD', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '13px', fontWeight: 600 }}>
            <i className="ti ti-alert-triangle"></i> Caution: You are nearing your budget limit.
          </div>
        )}
      </div>

      {/* Cost Breakdown */}
      <h2 style={{ fontSize: '20px', color: 'var(--deep-ocean)', marginBottom: '16px' }}>Cost Breakdown</h2>
      <div className="glass-card-premium" style={{ padding: '24px', marginBottom: '32px' }}>
        {breakdown.map((item, index) => (
          <div key={item.name} style={{ marginBottom: index === breakdown.length - 1 ? 0 : '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--deep-ocean)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: item.color }}></div>
                {item.name}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>{formatCurrency(item.amount)}</div>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ 
                height: '100%', 
                width: animateCharts ? `${item.percent}%` : '0%', 
                background: item.color,
                transition: `width 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
                borderRadius: '4px'
              }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Spending Timeline Chart */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '20px', color: 'var(--deep-ocean)' }}>Daily Spending</h2>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Avg: {formatCurrency(currentSpend / 4)}/day</div>
      </div>
      
      <div className="glass-card-premium" style={{ padding: '24px 24px 16px 24px', height: '220px', display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
        {days.map((d, index) => {
          const maxSpend = 500;
          const heightPercent = (d.spend / maxSpend) * 100;
          const barColor = d.status === 'Green' ? 'var(--sea-green)' : d.status === 'Yellow' ? '#EF9F27' : '#E24B4A';

          return (
            <div key={d.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              
              {/* Tooltip visualization */}
              <div style={{ fontSize: '11px', fontWeight: 600, color: barColor, opacity: animateCharts ? 1 : 0, transition: 'opacity 0.3s 1s' }}>
                {formatCurrency(d.spend)}
              </div>
              
              <div style={{ width: '100%', height: '120px', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <div style={{ 
                  width: '32px', 
                  background: `linear-gradient(to top, ${barColor}, rgba(255,255,255,0.2))`,
                  height: animateCharts ? `${heightPercent}%` : '0%',
                  transition: `height 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                  borderRadius: '6px',
                  boxShadow: `0 4px 10px ${barColor}40`
                }}></div>
              </div>
              
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>{d.day}</div>
            </div>
          );
        })}
      </div>
      
      {/* Smart Insight */}
      <div style={{ marginTop: '24px', display: 'flex', gap: '12px', background: 'rgba(0, 194, 255, 0.1)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--aqua)' }}>
        <i className="ti ti-bulb" style={{ color: 'var(--aqua)', fontSize: '24px' }}></i>
        <div>
          <div style={{ fontWeight: 600, color: 'var(--deep-ocean)', fontSize: '14px', marginBottom: '4px' }}>AI Savings Insight</div>
          <div style={{ fontSize: '13px', color: 'var(--text-main)' }}>Your hotel costs are 15% higher than average for Tokyo. Consider switching your Day 3 booking to save roughly {formatCurrency(85)}.</div>
        </div>
      </div>

    </div>
  );
}
