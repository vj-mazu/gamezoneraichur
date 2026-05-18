import { motion } from 'framer-motion';
import { Gamepad2, MapPin, Clock } from 'lucide-react';

const FEATURES = [
  {
    title: 'Ball Pool',
    desc: 'Dive into endless fun in our massive, safe ball pit.',
    icon: <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white/20" />
  },
  {
    title: 'Classic Arcade',
    desc: 'Retro and modern video games for all ages.',
    icon: <Gamepad2 className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Air Hockey',
    desc: 'Fast-paced competitive action tables.',
    icon: <div className="w-6 h-6 border-2 border-cyan-400 rounded-sm rotate-45" />
  },
  {
    title: 'Indoor Sliders',
    desc: 'Exciting spiral slides to keep the energy high.',
    icon: <div className="w-6 h-6 rounded-[8px_0_8px_0] bg-green-400" />
  }
];

export default function About() {
  return (
    <section id="discover" className="relative w-full bg-[#050505] text-white py-24 sm:py-32 overflow-hidden px-4 sm:px-12 font-inter">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Text & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <h2 className="font-anton text-5xl sm:text-7xl uppercase mb-6 leading-[0.9] tracking-tight">
              Level Up Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Weekend.</span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Welcome to Raichur's ultimate indoor kid's play area and gaming hub. Located right inside SPV Central Market, we bring the best in entertainment, ensuring an unforgettable time for young families and children to spend their energy.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Daily Timings</h3>
                  <p className="text-white/60 text-sm mt-1">Opens at 11:00 AM every day</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-white/60 text-sm mt-1">SPV Central Market, Ashok Depo Circle, Raichur</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-anton uppercase tracking-wide mb-3">{feat.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
