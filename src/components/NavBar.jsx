import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full font-sans">
      {/* Top announcement banner */}
      <div className="bg-[#183F82] text-[#EEF2FA] text-center py-1.5 text-[10px] font-semibold tracking-[0.22em] uppercase px-4">
        Fresh matcha bakes out of the oven — daily, every morning
      </div>

      {/* Main nav bar */}
      <div
        className="bg-[#0E2554] px-10 flex items-center justify-between relative"
        style={{ height: '64px' }}
      >
        {/* Subtle gold center line accent */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: '420px', height: '1px', background: 'rgba(123,163,224,0.12)' }}
        />

        {/* Logo */}
        <a href="#hero" className="relative z-10 flex items-baseline gap-0 no-underline">
          <span
            className="text-[#EEF2FA]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            FIVE
          </span>
          <span
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, color: '#7BA3E0' }}
          >
            10
          </span>
          <sup
            className="ml-1 text-[#EEF2FA]/50 uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '9px', letterSpacing: '0.15em', fontWeight: 500, verticalAlign: 'super' }}
          >
            Kathmandu
          </sup>
        </a>

        {/* Nav links with diamond dividers */}
        <div className="relative z-10 flex items-center gap-8">
          {['Menu', 'Our Vibe', 'Find Us'].map((label, i) => (
            <React.Fragment key={label}>
              {i > 0 && (
                <span
                  className="inline-block"
                  style={{ width: '4px', height: '4px', background: 'rgba(123,163,224,0.3)', transform: 'rotate(45deg)' }}
                  aria-hidden="true"
                />
              )}
              <a
                href={`#${label === 'Menu' ? 'menu' : label === 'Our Vibe' ? 'about' : 'contact'}`}
                className="text-[#EEF2FA]/60 hover:text-[#7BA3E0] transition-colors no-underline"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                {label}
              </a>
            </React.Fragment>
          ))}
        </div>

        {/* CTA button */}
        <button
          className="relative z-10 bg-transparent hover:bg-[#7BA3E0] transition-colors"
          style={{
            border: '1.5px solid #7BA3E0',
            color: '#7BA3E0',
            padding: '7px 20px',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#0E2554'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#7BA3E0'; }}
        >
          Order Online
        </button>
      </div>
    </nav>
  );
}