import React from 'react';

const MENU_DATA = [
  {
    category: 'Signature Matcha',
    items: [
      { name: 'Ceremonial Pure', price: 'Rs. 650', desc: 'Uji matcha, 80°C water, traditional whisk.' },
      { name: 'FIVE10 Latte', price: 'Rs. 750', desc: 'Oat milk, vanilla bean, matcha layer.' },
      { name: 'Yuzu Matcha Tonic', price: 'Rs. 680', desc: 'Sparkling tonic, yuzu citrus, matcha.' },
    ]
  },
  {
    category: 'Espresso & Roasts',
    items: [
      { name: 'KTM Pour Over', price: 'Rs. 550', desc: 'Single origin Nuwakot, light roast.' },
      { name: 'Spanish Latte', price: 'Rs. 600', desc: 'Condensed milk, double ristretto.' },
      { name: 'Cold Brew', price: 'Rs. 450', desc: 'Steeped 18 hours, served over craft ice.' },
    ]
  }
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-24 px-8 flex flex-col items-center"
      style={{ background: '#0E2554', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Decorative Top Line */}
      <div style={{ width: '1px', height: '60px', background: 'rgba(123,163,224,0.3)', marginBottom: '2rem' }} />

      <h2
        className="text-center"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 4vw, 48px)',
          fontWeight: 900,
          color: '#EEF2FA',
          marginBottom: '4rem',
        }}
      >
        The <em style={{ color: '#7BA3E0', fontStyle: 'italic' }}>Offerings</em>
      </h2>

      <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {MENU_DATA.map((section, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 border-b border-[rgba(123,163,224,0.15)] pb-4">
              <span style={{ width: '8px', height: '8px', background: '#7BA3E0', borderRadius: '50%' }} />
              <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7BA3E0' }}>
                {section.category}
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              {section.items.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between items-baseline">
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#EEF2FA' }}>
                      {item.name}
                    </span>
                    {/* Dotted leader */}
                    <div className="flex-1 mx-4" style={{ borderBottom: '1px dotted rgba(238,242,250,0.2)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#7BA3E0' }}>
                      {item.price}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(238,242,250,0.6)', marginTop: '2px' }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}