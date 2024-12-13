import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Stats } from './components/sections/Stats';
import { Contact } from './components/sections/Contact';
import { CandidateCarousel } from './components/carousel/CandidateCarousel';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <CandidateCarousel />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;