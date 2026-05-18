import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-[#020202] py-24 sm:py-32 font-inter relative z-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-white/10 rounded-[2.5rem] p-8 sm:p-16 text-center backdrop-blur-xl relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/30 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-wide mb-6">
              Ready for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Non-Stop Fun?</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book your slot today or plan the ultimate birthday party. Get in touch with us instantly on WhatsApp to reserve your play time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Plan a Visit <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
