import React from 'react';
import { heroMatcha } from '../assets/images';

/* ─── MCM Sunburst SVG ─── */
function Sunburst() {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      // Centered the sunburst so it scales nicely on both mobile and desktop
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[520px] aspect-square z-0 pointer-events-none"
    >
      <circle cx="260" cy="260" r="240" stroke="#183F82" strokeWidth="1" strokeOpacity="0.18" />
      <circle cx="260" cy="260" r="190" stroke="#183F82" strokeWidth="0.5" strokeOpacity="0.12" />
      <g stroke="#183F82" strokeWidth="0.75" strokeOpacity="0.15">
        {[
          [260,20,260,500], [20,260,500,260],
          [76,76,444,444], [444,76,76,444],
          [44,168,476,352], [44,352,476,168],
          [168,44,352,476], [352,44,168,476],
          [108,108,412,412], [412,108,108,412],
          [55,210,465,310], [55,310,465,210],
          [210,55,310,465], [310,55,210,465],
        ].map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <circle cx="260" cy="260" r="40" stroke="#7BA3E0" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="260" cy="260" r="6" fill="#7BA3E0" fillOpacity="0.5" />
      {[[115,115],[405,115],[115,405],[405,405]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#183F82" fillOpacity="0.35" />
      ))}
    </svg>
  );
}

/* ─── Stats bar ─── */
const STATS = [
  { num: '12+',    label: 'Matcha Varieties' },
  { num: '6am',    label: 'Opens Daily' },
  { num: '100%',   label: 'Ceremonial Grade' },
  { num: 'Thamel', label: 'Heart of KTM' },
];

export default function Hero() {
  return (
    <section
      className="relative flex flex-col font-sans overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 88px)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── TOP HALF: Split Content ── */}
      <div className="flex-grow flex flex-col lg:grid lg:grid-cols-2">
        
        {/* ── LEFT PANEL ── */}
        <div
          className="relative z-[2] flex flex-col justify-center p-8 py-16 lg:pl-14 lg:pr-24 lg:py-20"
          style={{ background: '#EEF2FA' }}
        >
          {/* Angled divider edge - Hidden on mobile, shown on desktop */}
          <div
            className="hidden lg:block absolute right-0 top-0 bottom-0 z-[3] pointer-events-none"
            style={{
              width: '96px',
              background: '#EEF2FA',
              clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
              right: '-48px',
            }}
          />

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <div style={{ width: '32px', height: '1.5px', background: '#183F82' }} />
            <span
              style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#183F82' }}
            >
              Thamel's Oasis · Est. 2024
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(42px, 6vw, 64px)', // Made slightly more dramatic
              fontWeight: 900,
              lineHeight: 1.06,
              color: '#0E2554',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Where<br />
            <em style={{ color: '#183F82', fontStyle: 'italic' }}>Matcha</em><br />
            Meets Perfect<br />
            Brews.
          </h1>

          {/* Body */}
          <p className="text-[14.5px] lg:text-[15.5px] leading-relaxed text-[#2a3a5e] max-w-[380px] mb-8">
            Premium Japanese matcha, specialty local coffee, and freshly baked artisanal treats — right in the heart of Kathmandu.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-6">
            <button
              className="px-7 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-colors duration-300"
              style={{
                background: '#183F82',
                color: '#EEF2FA',
                border: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#122f62'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#183F82'; }}
            >
              Explore Menu
            </button>
            <button
              className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-transparent border-none p-0"
              style={{ color: '#4C6444' }}
            >
              Our Story <span className="text-[14px]">→</span>
            </button>
          </div>

          {/* Open now badge */}
          <div
            className="inline-flex items-center gap-2.5 mt-12 self-start"
            style={{ padding: '8px 14px', border: '1px solid rgba(24,63,130,0.3)', background: 'rgba(24,63,130,0.07)' }}
          >
            <div
              style={{ width: '8px', height: '8px', background: '#4C6444', borderRadius: '50%', animation: 'mcm-pulse 2s ease-in-out infinite' }}
            />
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4C6444' }}>
              Open now · Thamel, Kathmandu
            </span>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div
          className="relative flex items-center justify-center overflow-hidden py-24 lg:py-0"
          style={{ background: '#D0DDEF' }}
        >
          <Sunburst />

          {/* Abstract background floating accents */}
          <div className="absolute w-full max-w-[400px] aspect-square flex items-center justify-center z-[1] pointer-events-none">
            {/* Atomic orbit ring */}
            <div
              className="absolute bottom-[-20px] left-[-10px] lg:bottom-[40px] lg:left-[0px]"
              style={{
                width: '90px', height: '90px', borderRadius: '50%',
                border: '1.5px solid rgba(24,63,130,0.25)',
              }}
            />
            {/* Bowtie accent */}
            <svg
              className="absolute top-[-30px] right-[20px] lg:top-[20px] lg:left-[20px]"
              width="40" height="14" viewBox="0 0 40 14" aria-hidden="true"
            >
              <polygon points="0,0 16,7 0,14" fill="#183F82" opacity="0.4" />
              <polygon points="40,0 24,7 40,14" fill="#183F82" opacity="0.4" />
              <line x1="16" y1="7" x2="24" y2="7" stroke="#183F82" strokeWidth="1.5" strokeOpacity="0.4" />
            </svg>
          </div>

          {/* Image frame - Uses relative widths now */}
          <div className="relative z-[2] w-[75vw] max-w-[300px] aspect-[3/4.2]">
            {/* Offset drop shadow block */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '14px', left: '14px', right: '-14px', bottom: '-14px',
                background: '#183F82', opacity: 0.2, zIndex: 0,
              }}
            />
            <img
              src={heroMatcha}
              alt="FIVE10 Signature Matcha Latte"
              className="relative z-[1] w-full h-full object-cover block"
            />
            {/* Floating label tag */}
            <div
              className="absolute z-[3]"
              style={{ bottom: '-20px', right: '-20px', background: '#0E2554', padding: '12px 16px' }}
            >
              <span
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 900, color: '#7BA3E0', display: 'block', lineHeight: 1 }}
              >
                五
              </span>
              <span
                style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', color: 'rgba(123,163,224,0.65)', marginTop: '3px' }}
              >
                Signature<br />Matcha
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── 
          Instead of absolute positioning, it is now part of the flex column layout
          Grid converts to 2x2 on mobile, and 4x1 side-by-side on desktop */}
      <div
        className="w-full z-[5] grid grid-cols-2 lg:flex lg:flex-row"
        style={{ background: '#0E2554' }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 flex-1 py-5 px-6"
            style={{
              // Handles grid borders for both mobile and desktop cleanly
              borderRight: (i % 2 === 0 || window.innerWidth >= 1024) && i !== STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              borderBottom: i < 2 && window.innerWidth < 1024 ? '1px solid rgba(255,255,255,0.1)' : 'none'
            }}
          >
            <span
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 900, color: '#7BA3E0', lineHeight: 1 }}
            >
              {s.num}
            </span>
            <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Pulse animation keyframe */}
      <style>{`
        @keyframes mcm-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        /* A little extra media query to ensure CSS border fallbacks if inline logic is delayed by React hydration */
        @media (min-width: 1024px) {
          .lg\\:border-b-0 { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}