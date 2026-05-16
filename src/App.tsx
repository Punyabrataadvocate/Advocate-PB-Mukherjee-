/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import PracticeAreas from '@/src/components/PracticeAreas';
import FAQ from '@/src/components/FAQ';
import Location from '@/src/components/Location';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import DisclaimerGate from '@/src/components/DisclaimerGate';

export default function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('disclaimerAccepted');
    if (accepted === 'true') {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsAccepted(true);
  };

  return (
    <main className="min-h-screen relative">
      {!isAccepted && <DisclaimerGate onAccept={handleAccept} />}

      <div className={isAccepted ? "opacity-100" : "opacity-0 pointer-events-none"}>
        <Navbar />
        <Hero />
        
        <div className="relative z-10 transition-all duration-700">
          <About />
          <PracticeAreas />
          <FAQ />
          <Location />
          <Contact />
          <Footer />
        </div>
      </div>

      {/* Structured noise/texture overlay for premium feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-50">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </main>
  );
}

