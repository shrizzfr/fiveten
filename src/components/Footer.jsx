import React from 'react';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: '#0E2554',
        padding: '5rem 3rem 2rem 3rem',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Giant faded background text */}
      <div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-[1]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(100px, 18vw, 300px)',
          fontWeight: 900,
          color: 'rgba(123,163,224,0.03)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        FIVE10
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start border-b border-[rgba(123,163,224,0.15)] pb-12 mb-8">
        
        {/* Brand Col */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-baseline gap-0 mb-4">
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 900, color: '#EEF2FA', letterSpacing: '-0.02em' }}>
              FIVE
            </span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 900, color: '#7BA3E0' }}>
              10
            </span>
          </div>
          <p style={{ color: 'rgba(238,242,250,0.6)', fontSize: '13px', maxWidth: '240px', lineHeight: 1.6 }}>
            Premium Japanese matcha and specialty local coffee in Kathmandu.
          </p>
        </div>

        {/* Links Col */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h5 style={{ fontSize: '10px', fontWeight: 700, color: '#7BA3E0', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Social</h5>
            <a href="#" style={{ color: '#EEF2FA', fontSize: '13px', textDecoration: 'none', opacity: 0.8 }}>Instagram</a>
            <a href="#" style={{ color: '#EEF2FA', fontSize: '13px', textDecoration: 'none', opacity: 0.8 }}>Facebook</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 style={{ fontSize: '10px', fontWeight: 700, color: '#7BA3E0', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Explore</h5>
            <a href="#menu" style={{ color: '#EEF2FA', fontSize: '13px', textDecoration: 'none', opacity: 0.8 }}>Our Menu</a>
            <a href="#about" style={{ color: '#EEF2FA', fontSize: '13px', textDecoration: 'none', opacity: 0.8 }}>The Story</a>
            <a href="#contact" style={{ color: '#EEF2FA', fontSize: '13px', textDecoration: 'none', opacity: 0.8 }}>Visit Us</a>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-center text-[11px]" style={{ color: 'rgba(238,242,250,0.4)', letterSpacing: '0.05em' }}>
        <span>© {new Date().getFullYear()} FIVE10 Kathmandu. All rights reserved.</span>
        <span>Made with <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#7BA3E0' }}>Matcha</em></span>
      </div>
    </footer>
  );
}