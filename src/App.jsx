// src/App.jsx
import React from 'react';

// Make sure your folder structure exactly matches these paths:
import Navbar from './components/Navbar'; // Double-check if your file is Navbar.jsx or NavBar.jsx
import Hero from './sections/Hero';
import Menu from './sections/Menu'; 
import Events from './sections/Events'; // Changed from Event to Events
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
        <Events /> {/* Changed to match the import */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;