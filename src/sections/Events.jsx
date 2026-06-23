import React from 'react';

const EVENTS_DATA = [
  {
    id: 1,
    title: 'Spring Uji Harvest',
    date: 'April 12, 2026',
    theme: 'light', // Cream background
    accent: '#4C6444', // Matcha Green
    story: "Celebrating the arrival of our first-flush ceremonial grade matcha directly from Kyoto. The afternoon was filled with traditional whisking demonstrations, sensory tastings, and a curated pairing of our seasonal matcha pastries. A true homage to the slow, deliberate art of tea.",
    photos: ['Main Harvest Pour', 'Whisking Detail', 'Pastry Spread']
  },
  {
    id: 2,
    title: 'Jazz & Pour-Overs',
    date: 'May 28, 2026',
    theme: 'dark', // Navy background
    accent: '#7BA3E0', // Soft Blue
    story: "When the sun dipped below the Kathmandu skyline, FIVE10 transformed. Local jazz musicians took over the corner booth while our baristas served up single-origin pour-overs and signature mocktails. A beautiful collision of rhythm, roasted beans, and community.",
    photos: ['Saxophone Silhouette', 'Barista Pouring', 'Crowd Laughing']
  },
  {
    id: 3,
    title: 'The Art of the Brew',
    date: 'June 15, 2026',
    theme: 'blue', // Light blue background
    accent: '#183F82', // Royal Blue
    story: "An intimate weekend workshop where 15 guests learned the science of extraction, milk steaming, and latte art from our head roaster. From pulling the perfect espresso shot to pouring symmetrical rosettas, it was a hands-on journey into the craft.",
    photos: ['Latte Art Close-up', 'Espresso Machine', 'Group Cheers']
  }
];

export default function Events() {
  return (
    <section
      id="events"
      className="w-full flex flex-col font-sans"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── HEADER ── */}
      <div className="py-20 text-center" style={{ background: '#EEF2FA', borderBottom: '1px solid rgba(24,63,130,0.1)' }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 4vw, 52px)',
            fontWeight: 900,
            color: '#0E2554',
            marginBottom: '1rem',
          }}
        >
          Gatherings & <em style={{ color: '#4C6444', fontStyle: 'italic' }}>Stories</em>
        </h2>
        <p style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#183F82', fontWeight: 600 }}>
          Moments captured at FIVE10
        </p>
      </div>

      {/* ── EVENT 1: The Asymmetric Magazine Spread (Light) ── */}
      <article className="relative overflow-hidden py-24 px-10 md:px-20" style={{ background: '#EEF2FA' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Main Photo with Offset Block */}
          <div className="lg:col-span-7 relative z-10">
            <div className="absolute top-[-20px] left-[-20px] w-full h-full pointer-events-none" style={{ border: `1px solid ${EVENTS_DATA[0].accent}`, opacity: 0.3 }} />
            <div className="relative w-full aspect-[4/3] bg-[#D0DDEF] flex items-center justify-center overflow-hidden z-10 shadow-lg">
              <span className="text-[11px] uppercase tracking-widest text-[#183F82] opacity-60">[ Photo: {EVENTS_DATA[0].photos[0]} ]</span>
            </div>
          </div>

          {/* Text & Mini Photos */}
          <div className="lg:col-span-5 flex flex-col justify-center relative z-20">
            <div className="inline-block mb-4 px-3 py-1 border" style={{ borderColor: EVENTS_DATA[0].accent, color: EVENTS_DATA[0].accent, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', alignSelf: 'flex-start' }}>
              {EVENTS_DATA[0].date}
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, color: '#0E2554', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              {EVENTS_DATA[0].title}
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#2a3a5e', marginBottom: '2.5rem' }}>
              {EVENTS_DATA[0].story}
            </p>
            
            {/* Overlapping Polaroid-style secondary photos */}
            <div className="flex gap-4 relative h-[160px]">
              <div className="absolute left-0 bottom-0 w-[140px] aspect-square bg-[#183F82] p-2 pb-6 shadow-md transform -rotate-3 z-10 flex items-center justify-center">
                <div className="w-full h-full bg-[#0E2554] flex items-center justify-center border border-[rgba(238,242,250,0.1)]">
                  <span className="text-[8px] text-center uppercase tracking-wider text-[#7BA3E0] px-2">[ {EVENTS_DATA[0].photos[1]} ]</span>
                </div>
              </div>
              <div className="absolute left-[110px] bottom-[20px] w-[140px] aspect-square bg-white p-2 pb-6 shadow-xl transform rotate-6 z-20 flex items-center justify-center">
                <div className="w-full h-full bg-[#EEF2FA] flex items-center justify-center border border-[rgba(24,63,130,0.1)]">
                  <span className="text-[8px] text-center uppercase tracking-wider text-[#4C6444] px-2">[ {EVENTS_DATA[0].photos[2]} ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── EVENT 2: The Dark Film Reel (Dark) ── */}
      <article className="relative overflow-hidden py-24 px-10 md:px-20" style={{ background: '#0E2554', color: '#EEF2FA' }}>
        {/* Background Graphic */}
        <div className="absolute right-[-100px] top-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ border: '1px dashed rgba(123,163,224,0.15)' }} />

        <div className="max-w-[1200px] mx-auto flex flex-col relative z-10">
          <div className="flex flex-col items-center text-center max-w-[600px] mx-auto mb-16">
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', color: EVENTS_DATA[1].accent, marginBottom: '1rem' }}>
              — {EVENTS_DATA[1].date} —
            </span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1 }}>
              {EVENTS_DATA[1].title}
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(238,242,250,0.7)' }}>
              {EVENTS_DATA[1].story}
            </p>
          </div>

          {/* Film Strip Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA[1].photos.map((photo, idx) => (
              <div key={idx} className="relative group">
                {/* Image Container */}
                <div className="w-full aspect-[3/4] bg-[#183F82] overflow-hidden flex items-center justify-center relative z-10 border border-[rgba(123,163,224,0.2)] transition-transform duration-500 hover:-translate-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#7BA3E0] opacity-50">[ Photo: {photo} ]</span>
                </div>
                {/* Decorative caption line */}
                <div className="flex items-center gap-2 mt-4">
                  <span style={{ width: '20px', height: '1px', background: EVENTS_DATA[1].accent }} />
                  <span style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(238,242,250,0.5)' }}>
                    Frame 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ── EVENT 3: The Geometric Archway (Blue) ── */}
      <article className="relative overflow-hidden py-24 px-10 md:px-20" style={{ background: '#D0DDEF' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Left */}
          <div className="order-2 lg:order-1 flex flex-col justify-center pr-0 lg:pr-10">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 900, color: '#0E2554', marginBottom: '1rem' }}>
              {EVENTS_DATA[2].title}
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <span style={{ width: '6px', height: '6px', background: '#183F82', borderRadius: '50%' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#183F82' }}>
                {EVENTS_DATA[2].date}
              </span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#2a3a5e', marginBottom: '2rem' }}>
              {EVENTS_DATA[2].story}
            </p>

            {/* Twin Secondary Photos */}
            <div className="flex gap-6 mt-4">
              <div className="w-1/2 aspect-square bg-[#EEF2FA] border border-[rgba(24,63,130,0.1)] flex items-center justify-center p-4 text-center">
                 <span className="text-[9px] uppercase tracking-widest text-[#183F82] opacity-60">[ {EVENTS_DATA[2].photos[1]} ]</span>
              </div>
              <div className="w-1/2 aspect-square bg-[#EEF2FA] border border-[rgba(24,63,130,0.1)] flex items-center justify-center p-4 text-center">
                 <span className="text-[9px] uppercase tracking-widest text-[#183F82] opacity-60">[ {EVENTS_DATA[2].photos[2]} ]</span>
              </div>
            </div>
          </div>

          {/* Arched Main Photo Right */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* The Arch Frame */}
            <div 
              className="relative z-10 w-full max-w-[420px] aspect-[1/1.4] bg-[#EEF2FA] overflow-hidden flex items-center justify-center shadow-xl"
              style={{ borderRadius: '210px 210px 0 0', border: '10px solid #EEF2FA' }}
            >
               <div className="w-full h-full bg-[#183F82] opacity-10 flex items-center justify-center">
                 <span className="text-[11px] uppercase tracking-widest text-[#0E2554] font-bold">[ Arch Photo: {EVENTS_DATA[2].photos[0]} ]</span>
               </div>
            </div>
            {/* Geometric Accent Circle */}
            <div className="absolute bottom-10 right-0 z-20 w-[100px] h-[100px] rounded-full bg-[#0E2554] flex items-center justify-center text-[#EEF2FA] text-[10px] font-bold tracking-widest uppercase text-center p-4 shadow-lg transform translate-x-4">
              Sold<br/>Out
            </div>
          </div>
          
        </div>
      </article>

    </section>
  );
}