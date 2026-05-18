import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Reels from './components/Reels';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for the preloader to show the brand
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-orange-500/30 font-inter">
      <Preloader isLoading={isLoading} />
      
      {!isLoading && <Navbar />}

      <main className={isLoading ? 'h-screen overflow-hidden' : ''}>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="games">
          <Gallery />
        </div>
        <div id="reels">
          <Reels />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="cta">
          <CallToAction />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
