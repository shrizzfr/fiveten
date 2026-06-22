// src/App.jsx
import React from 'react';
// Comment these out for now if you haven't fully built them yet
import Navbar from './components/NavBar';
import Hero from './sections/Hero';
import Menu from './sections/Menu'; 
import About from './sections/About'; 
import Contact from './sections/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream min-h-screen text-coffee font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;