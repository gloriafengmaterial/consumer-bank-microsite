import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [selectedComp, setSelectedComp] = useState('comp1');

  // Left module bars - first 3 dark blue, rest light blue
  const driverData = [
    { name: 'Conduct banking in a convenient way', value: 78, isDark: true },
    { name: 'AI Excitement vs Readiness Cap', value: 82, isDark: true },
    { name: 'Account management ease', value: 75, isDark: true },
    { name: 'Trust and security', value: 88, isDark: false },
    { name: 'Customer support quality', value: 71, isDark: false },
    { name: 'Mobile app experience', value: 79, isDark: false },
    { name: 'Fee transparency', value: 65, isDark: false },
    { name: 'Product innovation', value: 73, isDark: false },
  ];

  // Right module - 5 line series
  const trendData = [
    { year: '2021', stage1: 65, stage2: 72, stage3: 70, stage4: 62, stage5: 55 },
    { year: '2022', stage1: 70, stage2: 76, stage3: 73, stage4: 68, stage5: 60 },
    { year: '2023', stage1: 75, stage2: 82, stage3: 78, stage4: 74, stage5: 65 },
    { year: '2024', stage1: 80, stage2: 85, stage3: 81, stage4: 78, stage5: 70 },
    { year: '2025', stage1: 85, stage2: 88, stage3: 84, stage4: 82, stage5: 75 },
  ];

  // Bottom module - bars + table with logo columns and significance coloring
  const perceptionData = [
    { label: 'Conduct banking in a convenient way', barValue: 78, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100 },
    { label: 'AI Excitement vs Readiness Cap', barValue: 82, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100, sig2: 'green' },
    { label: 'AI Excitement vs Readiness Cap', barValue: 85, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100, sig3: 'red' },
    { label: 'AI Excitement vs Readiness Cap', barValue: 71, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100 },
    { label: 'AI Excitement vs Readiness Cap', barValue: 79, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100 },
    { label: 'AI Excitement vs Readiness Cap', barValue: 81, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100 },
    { label: 'AI Excitement vs Readiness Cap', barValue: 65, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100 },
    { label: 'AI Excitement vs Readiness Cap', barValue: 73, col1: 100, col2: 100, col3: 100, col4: 100, col5: 100, col6: 100, col7: 100, col8: 100 },
  ];

  const DataLabel = ({ value, significance }) => {
    const textColor = significance === 'green' ? '#10b981' : significance === 'red' ? '#ff4d56' : '#3f3f3f';
    const fontSize = significance ? 'bold' : 'normal';
    return <span style={{ color: textColor, fontWeight: fontSize, fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>{value}</span>;
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <style>{`
        @import url('https://rsms.me/inter/inter.css');
        html { font-family: 'Inter', sans-serif; }
        @supports (font-variation-settings: normal) {
          html { font-family: 'Inter var', sans-serif; }
        }
      `}</style>

      {/* Header - full width */}
      <div style={{ backgroundColor: '#002f6c', color: 'white', padding: '16px 24px', fontFamily: 'Inter, sans-serif' }}>
        <p style={{ margin: 0, fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>CLIENT INSIGHTS</p>
      </div>

      {/* Hero Section - edge to edge, no padding, touching header */}
      <div style={{ backgroundColor: '#c9e6f9', padding: '32px 120px', margin: 0, minHeight: '256px', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '600', margin: '0 0 12px 0', color: '#3f3f3f', fontFamily: 'Inter, sans-serif' }}>Consumer Bank Brand Health</h1>
        <p style={{ fontSize: '16px', margin: 0, color: '#3f3f3f', lineHeight: '1.5', maxWidth: '100%', fontFamily: 'Inter, sans-serif' }}>
          Customer satisfaction scores reached an all-time high of 82% in June, driven by improved product quality and faster support response times.
        </p>
      </div>

      <div style={{ 
            maxWidth: '1440px', 
            margin: '32px auto', 
            padding: '0 120px',
            width: '100%'
      }}>
        {/* Top Row: Left & Right Modules */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          
          {/* LEFT MODULE */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 10px 0', color: '#3f3f3f', fontFamily: 'Inter, sans-serif' }}>Consumer Bank Driver</h2>
              <p style={{ fontSize: '14px', margin: 0, color: '#8497b0', fontFamily: 'Inter, sans-serif' }}>Easy account management, comfort, and trust remain primary drivers of bank consideration</p>
            </div>

            <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '8px' }}>
              {driverData.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '12px', margin: '0 0 8px 0', color: '#3f3f3f', fontFamily: 'Inter, sans-serif' }}>{item.name}</p>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '8px', backgroundColor: '#f3f4f6', borderRadius: '50px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          height: '100%', 
                          width: `${item.value}%`, 
                          backgroundColor: item.isDark ? '#147bbf' : '#c9e6f9',
                          borderRadius: '50px'
                        }}
                      ></div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#3f3f3f', minWidth: '28px', textAlign: 'right', fontFamily: 'Inter, sans-serif' }}>{item.value}</span>
                  </div>
                </div>
              ))}
              <p style={{ fontSize: '12px', color: '#8497b0', margin: '16px 0 0 0', fontFamily: 'Inter, sans-serif' }}>Show additional drivers</p>
            </div>
          </div>

          {/* RIGHT MODULE */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', margin: 0, color: '#3f3f3f', fontFamily: 'Inter, sans-serif' }}>Brand Engagement</h2>
                <div style={{ backgroundColor: '#f3f4f6', padding: '4px 8px', borderRadius: '4px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#3f3f3f', letterSpacing: '2px', fontFamily: 'Inter, sans-serif' }}>TRENDED</span>
                </div>
              </div>
              <p style={{ fontSize: '14px', margin: 0, color: '#8497b0', fontFamily: 'Inter, sans-serif' }}>Easy account management, comfort, and trust remain primary drivers of bank consideration</p>
            </div>

            {/* Segmented Control */}
            <div style={{ display: 'flex', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '4px', marginBottom: '24px', gap: '4px' }}>
              {['Comp 1', 'Comp 2', 'Comp 3'].map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedComp(`comp${idx + 1}`)}
                  style={{
                    flex: 1,
                    padding: '4px 16px',
                    backgroundColor: idx === 0 ? 'white' : 'transparent',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    boxShadow: idx === 0 ? '0px 1px 3px rgba(0,0,0,0.1)' : 'none',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Legend with 5 items */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', fontSize: '10px' }}>
              {['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'].map((stage, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif' }}>
                  <div style={{ width: '10px', height: '10px', backgroundColor: ['#147bbf', '#1f77b4', '#2ca02c', '#7cb9d0', '#aec7e8'][idx], borderRadius: '2px' }}></div>
                  <span style={{ color: '#a3a3a3' }}>{stage}</span>
                </div>
              ))}
            </div>

            {/* Line Chart - fills height */}
            <ResponsiveContainer width="100%" height="100%" minHeight={280}>
              <LineChart data={trendData} margin={{ top: 5, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#a3a3a3" style={{ fontSize: '10px' }} />
                <YAxis stroke="#a3a3a3" style={{ fontSize: '10px' }} />
                <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '4px' }} />
                <Line type="monotone" dataKey="stage1" stroke="#147bbf" dot={{ fill: '#147bbf', r: 6 }} strokeWidth={2} />
                <Line type="monotone" dataKey="stage2" stroke="#1f77b4" dot={{ fill: '#1f77b4', r: 6 }} strokeWidth={2} />
                <Line type="monotone" dataKey="stage3" stroke="#2ca02c" dot={{ fill: '#2ca02c', r: 6 }} strokeWidth={2} />
                <Line type="monotone" dataKey="stage4" stroke="#7cb9d0" dot={{ fill: '#7cb9d0', r: 6 }} strokeWidth={2} />
                <Line type="monotone" dataKey="stage5" stroke="#aec7e8" dot={{ fill: '#aec7e8', r: 6 }} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BOTTOM MODULE */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', fontFamily: 'Inter, sans-serif' }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 10px 0', color: '#3f3f3f', fontFamily: 'Inter, sans-serif' }}>Brand Perceptions</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <p style={{ fontSize: '14px', margin: 0, color: '#8497b0', flex: 1, fontFamily: 'Inter, sans-serif' }}>Client continues to be perceptual leader among big banks</p>
                <div style={{ display: 'flex', gap: '16px', fontSize: '10px', justifyContent: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
                    <span style={{ color: '#a3a3a3' }}>Significance higher than Chase</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: '#ff4d56', borderRadius: '50%' }}></div>
                    <span style={{ color: '#a3a3a3' }}>Significance lower than Chase</span>
                  </div>
                </div>
              </div>
            </div>
            <select style={{ padding: '6px 12px', border: '1px solid #d1d5dc', borderRadius: '8px', fontSize: '12px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
              <option>California</option>
            </select>
          </div>

          {/* Left bars + Right data table */}
          <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
            {/* Left: bars column - ALL DARK BLUE with data labels aligned right - 30% width */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '0 0 30%', minWidth: '0' }}>
              {perceptionData.map((item, idx) => (
                <div key={idx}>
                  <p style={{ fontSize: '12px', margin: '0 0 8px 0', color: '#3f3f3f', fontFamily: 'Inter, sans-serif', wordBreak: 'break-word' }}>{item.label}</p>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '8px', backgroundColor: '#f3f4f6', borderRadius: '50px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          height: '100%', 
                          width: `${item.barValue}%`, 
                          backgroundColor: '#147bbf',
                          borderRadius: '50px'
                        }}
                      ></div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#3f3f3f', minWidth: '28px', textAlign: 'right', fontFamily: 'Inter, sans-serif', flexShrink: 0 }}>{item.barValue}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: data table with logo headers and significance coloring - 70% width */}
            <div style={{ display: 'flex', gap: '12px', flex: '1 1 70%', minWidth: '0' }}>
              {/* Headers - logo placeholders */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
                <div key={`header-${col}`} style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 1 auto', minWidth: '0' }}>
                  <div style={{ backgroundColor: '#f3f4f6', padding: '10px 8px', borderRadius: '4px', textAlign: 'center', fontSize: '12px', color: '#a3a3a3', fontFamily: 'Inter, sans-serif' }}>
                    logo
                  </div>
                  {/* Column data - rows aligned with bars */}
                  {perceptionData.map((row, rowIdx) => {
                    const value = row[`col${col}`];
                    let sig = null;
                    if (col === 2 && row.sig2) sig = row.sig2;
                    if (col === 3 && row.sig3) sig = row.sig3;
                    
                    return (
                      <div key={`${col}-${rowIdx}`} style={{ textAlign: 'center', fontSize: '12px' }}>
                        <DataLabel value={value} significance={sig} />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
