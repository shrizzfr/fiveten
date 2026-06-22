import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh',
        fontFamily: "'DM Sans', sans-serif",
        background: '#EEF2FA',
      }}
    >
      {/* ── LEFT PANEL: IMAGE ── */}
      <div className="relative flex items-center justify-center py-20 px-10">
        {/* Background accent arch */}
        <div
          className="absolute z-[1]"
          style={{
            width: '320px',
            height: '480px',
            border: '2px solid rgba(24,63,130,0.1)',
            borderRadius: '160px 160px 0 0',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Image Frame */}
        <div className="relative z-[2]" style={{ width: '340px', height: '420px' }}>
          {/* Green Offset Shadow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-14px', left: '-14px', right: '14px', bottom: '14px',
              background: '#4C6444', opacity: 0.15, zIndex: 0,
            }}
          />
          {/* Placeholder for About Image - Replace src */}
          <div className="relative z-[1] w-full h-full bg-[#D0DDEF] flex items-center justify-center overflow-hidden">
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#183F82', textTransform: 'uppercase' }}>
              [ Interior Image ]
            </span>
          </div>
          
          {/* Little overlapping diamond */}
          <div
            className="absolute z-[3]"
            style={{
              width: '20px', height: '20px', background: '#7BA3E0',
              bottom: '40px', right: '-10px', transform: 'rotate(45deg)'
            }}
          />
        </div>
      </div>

      {/* ── RIGHT PANEL: TEXT ── */}
      <div className="relative z-[2] flex flex-col justify-center px-16 py-20">
        <div className="flex items-center gap-2.5 mb-6">
          <span style={{ width: '6px', height: '6px', background: '#4C6444', transform: 'rotate(45deg)' }} />
          <span
            style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#4C6444' }}
          >
            Our Vibe
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 3vw, 44px)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#0E2554',
            marginBottom: '1.5rem',
          }}
        >
          Crafted slowly in <br />
          <em style={{ color: '#4C6444', fontStyle: 'italic' }}>a fast world.</em>
        </h2>

        <p style={{ fontSize: '14.5px', lineHeight: 1.8, color: '#2a3a5e', maxWidth: '380px', marginBottom: '1.5rem' }}>
          Born from a love of precision and calm, FIVE10 was created to be a sanctuary amidst the beautiful chaos of Thamel. We import our ceremonial matcha directly from Uji, Japan, and roast our coffee beans in small batches.
        </p>
        <p style={{ fontSize: '14.5px', lineHeight: 1.8, color: '#2a3a5e', maxWidth: '380px' }}>
          Every pour, whisk, and bake is measured. No rushing. Just perfect, intentional brews designed to anchor your morning.
        </p>
      </div>
    </section>
  );
}