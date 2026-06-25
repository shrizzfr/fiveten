import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative"
      style={{
        background: '#D0DDEF',
        padding: '6rem 3rem',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#EEF2FA] relative overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(14,37,84,0.05)' }}>
        
        {/* Border Accent overlay */}
        <div className="absolute top-2 left-2 right-2 bottom-2 pointer-events-none z-30" style={{ border: '1px solid rgba(24,63,130,0.1)' }} />

        {/* ── INFO SIDE ── */}
        <div className="p-12 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[rgba(24,63,130,0.1)] relative z-20">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '36px',
              fontWeight: 900,
              color: '#0E2554',
              marginBottom: '2.5rem',
            }}
          >
            Find Us
          </h2>

          <div className="flex flex-col gap-8">
            <div>
              <h4 style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#183F82', marginBottom: '8px' }}>
                Location
              </h4>
              <p style={{ fontSize: '15px', color: '#2a3a5e', lineHeight: 1.6 }}>
                FIVE10 Cafe<br />
                Mandala Street, Thamel<br />
                Kathmandu 44600, Nepal
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#183F82', marginBottom: '8px' }}>
                Hours
              </h4>
              <p style={{ fontSize: '15px', color: '#2a3a5e', lineHeight: 1.6 }}>
                Mon - Sun: 6:00 AM – 8:00 PM<br />
                <span style={{ color: '#4C6444', fontSize: '13px', fontWeight: 600 }}>Open Daily</span>
              </p>
            </div>
            
            {/* Direct link to your Google Maps pin */}
            <a
              href="https://maps.app.goo.gl/SsBcq4C81yiBFXRJ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all duration-300 no-underline"
              style={{
                alignSelf: 'flex-start',
                background: 'transparent',
                border: '1.5px solid #183F82',
                color: '#183F82',
                padding: '10px 24px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#183F82'; e.currentTarget.style.color = '#EEF2FA'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#183F82'; }}
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* ── GRAPHIC/MAP SIDE ── */}
        <div className="relative bg-[#183F82] w-full min-h-[400px] flex items-center justify-center overflow-hidden group">
          
          {/* 
            Color-Tint Overlay: 
            This div uses blend modes to colorize the Google Map below it, 
            forcing it to adopt the brand's navy blue aesthetic.
          */}
          <div className="absolute inset-0 bg-[#0E2554] mix-blend-color pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[#183F82] opacity-40 mix-blend-multiply pointer-events-none z-10" />

          {/* Embedded Google Map - Updated query to pin FIVE10 specifically */}
          <iframe
            title="FIVE10 Cafe Location"
            src="https://maps.google.com/maps?q=FIVE10%20Cafe,%20Kathmandu&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ 
              border: 0, 
              filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Floating MCM Location Badge */}
          <div 
            className="absolute bottom-8 right-8 z-20 bg-[#EEF2FA] p-4 flex flex-col items-center shadow-2xl pointer-events-none" 
            style={{ border: '1px solid rgba(24,63,130,0.15)' }}
          >
            <svg width="24" height="32" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C8.954 0 0 8.954 0 20C0 35 20 52 20 52C20 52 40 35 40 20C40 8.954 31.046 0 20 0ZM20 28C15.582 28 12 24.418 12 20C12 15.582 15.582 12 20 12C24.418 12 28 15.582 28 20C28 24.418 24.418 28 20 28Z" fill="#183F82"/>
            </svg>
            <span style={{ marginTop: '10px', color: '#183F82', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 800 }}>
              Thamel
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}