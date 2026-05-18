import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Camera as Instagram, Phone, ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';

const PrivacyPolicyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-[#111] border border-white/10 p-6 sm:p-10 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto font-inter text-white/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-anton text-3xl sm:text-4xl uppercase text-white tracking-wide">Privacy & Rules</h2>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
              <section>
                <h3 className="text-white font-semibold text-lg mb-2">1. Play Area Safety Guidelines</h3>
                <p>We prioritize the safety of all our guests. Children must be supervised by a parent or guardian at all times. Specific attractions, like the spiral slider, may have height and age restrictions. Please adhere to staff instructions and warning signs regarding equipment usage.</p>
              </section>

              <section>
                <h3 className="text-white font-semibold text-lg mb-2">2. Data Collection</h3>
                <p>We may collect basic contact information (name, phone number) for booking purposes and to inform you of special events. Your data is kept strictly confidential and is never sold to third parties.</p>
              </section>

              <section>
                <h3 className="text-white font-semibold text-lg mb-2">3. Photography Policy</h3>
                <p>While personal photography is encouraged to capture your fun moments, we request guests to respect the privacy of others. Commercial photography or recording of specific maintenance areas without management consent is prohibited.</p>
              </section>

              <section>
                <h3 className="text-white font-semibold text-lg mb-2">4. Disclaimer</h3>
                <p>Game Zone Raichur is not liable for any lost or stolen items within the premises. Participation in physical activities carries inherent risks, and guests enter the play area at their own risk.</p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // User Placeholders
  const WHATSAPP_NUMBER = "#"; // Replace with actual number
  const INSTAGRAM_LINK = "#"; // Replace with actual link
  const MAP_LINK = "https://maps.app.goo.gl/TrCwHkzLhhBuYXmy9";

  return (
    <>
      <footer className="bg-[#020202] text-white py-16 px-4 sm:px-12 font-inter border-t border-white/10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-wide mb-6">GAME ZONE</h2>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              The premium indoor kid's play area and gaming hub located in the heart of Raichur. Experience joy, safety, and endless fun.
            </p>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-6 text-sm">Visit Us</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-orange-400" />
                <span>SPV Central Market, Ashok Depo Circle, Thimmapurpet, Raichur, Karnataka 584101</span>
              </li>
              <li className="pt-2">
                <a 
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors uppercase tracking-wider text-xs font-bold"
                >
                  Get Directions <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-6 text-sm">Support</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors text-left">
                  Privacy Policy & Rules
                </button>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Bookings via WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Game Zone Raichur. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with a premium digital experience.
          </p>
        </div>
      </footer>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}
