import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Vibe', href: '#about' },
    { label: 'Find Us', href: '#contact' },
  ];

  return (
    // Added relative and z-50 so the dropdown stays above all other content
    <nav className="w-full font-sans relative z-[100]">
      {/* Top announcement banner */}
      <div className="bg-[#183F82] text-[#EEF2FA] text-center py-2 px-4 text-[9px] md:text-[10px] font-semibold tracking-[0.22em] uppercase leading-relaxed">
        Fresh matcha bakes out of the oven — daily, every morning
      </div>

      {/* Main nav bar */}
      <div
        className="bg-[#0E2554] px-5 md:px-10 flex items-center justify-between relative"
        style={{ height: '64px' }}
      >
        {/* Subtle gold center line accent (Hidden on mobile to avoid clutter) */}
        <div
          className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 'clamp(200px, 30vw, 420px)', height: '1px', background: 'rgba(123,163,224,0.12)' }}
        />

        {/* Logo */}
        <a href="#hero" className="relative z-10 flex items-baseline gap-0 no-underline">
          <span
            className="text-[#EEF2FA]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', md: '26px', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            FIVE
          </span>
          <span
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', md: '26px', fontWeight: 900, color: '#7BA3E0' }}
          >
            10
          </span>
          <sup
            className="ml-1 text-[#EEF2FA]/50 uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '8px', letterSpacing: '0.15em', fontWeight: 500, verticalAlign: 'super' }}
          >
            Kathmandu
          </sup>
        </a>

        {/* DESKTOP: Nav links with diamond dividers */}
        <div className="hidden md:flex relative z-10 items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && (
                <span
                  className="inline-block"
                  style={{ width: '4px', height: '4px', background: 'rgba(123,163,224,0.3)', transform: 'rotate(45deg)' }}
                  aria-hidden="true"
                />
              )}
              <a
                href={link.href}
                className="text-[#EEF2FA]/60 hover:text-[#7BA3E0] transition-colors no-underline"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </div>

        {/* DESKTOP: CTA button */}
        <button
          className="hidden md:block relative z-10 bg-transparent hover:bg-[#7BA3E0] transition-colors"
          style={{
            border: '1.5px solid #7BA3E0',
            color: '#7BA3E0',
            padding: '7px 20px',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#0E2554'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#7BA3E0'; }}
        >
          Order Online
        </button>

        {/* MOBILE: Hamburger Button */}
        <button
          className="md:hidden relative z-10 p-2 text-[#7BA3E0] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            {isMobileMenuOpen ? (
              // X Icon
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              // Menu Icon
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE: Dropdown Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full bg-[#0E2554] flex flex-col border-t border-[rgba(123,163,224,0.15)] shadow-2xl"
          style={{ padding: '2rem' }}
        >
          <div className="flex flex-col gap-6 items-center text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="text-[#EEF2FA] opacity-80 hover:opacity-100 transition-opacity no-underline w-full py-2"
                style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                {link.label}
              </a>
            ))}
            
            <div style={{ width: '40px', height: '1px', background: 'rgba(123,163,224,0.2)', margin: '1rem 0' }} />

            <button
              className="w-full bg-[#7BA3E0] text-[#0E2554]"
              style={{
                border: '1.5px solid #7BA3E0',
                padding: '12px 20px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}