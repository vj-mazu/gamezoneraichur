import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Games', href: '#games' },
    { name: 'Contact & Policy', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 font-inter ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-baseline gap-1.5 md:gap-2 group">
          <span className="font-anton text-2xl md:text-3xl text-white tracking-widest uppercase">GAME ZONE</span>
          <span className="text-[10px] md:text-xs font-inter font-bold tracking-[0.25em] text-white/60 uppercase group-hover:text-white transition-colors">RAICHUR</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            Visit Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[200] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-anton text-2xl text-white tracking-widest uppercase">GAME ZONE</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white text-2xl font-anton uppercase tracking-wide border-b border-white/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
