import { motion } from 'framer-motion';
import { Play, Camera as Instagram } from 'lucide-react';

const REELS = [
  {
    id: 1,
    link: "https://www.instagram.com/reel/DUIUtXdjeSS/?igsh=MXNtcWw5YjI4ZWxoNQ==",
    cover: "/images/gallery/WhatsApp Image 2026-05-17 at 09.41.32 (2).jpeg",
    views: "12.4K",
    likes: "1.2K"
  },
  {
    id: 2,
    link: "https://www.instagram.com/reel/DUIUtXdjeSS/?igsh=MXNtcWw5YjI4ZWxoNQ==",
    cover: "/images/gallery/WhatsApp Image 2026-05-17 at 09.41.34 (1).jpeg",
    views: "8.9K",
    likes: "856"
  },
  {
    id: 3,
    link: "https://www.instagram.com/reel/DUIUtXdjeSS/?igsh=MXNtcWw5YjI4ZWxoNQ==",
    cover: "/images/gallery/WhatsApp Image 2026-05-17 at 09.41.27.jpeg",
    views: "15.2K",
    likes: "2.1K"
  },
  {
    id: 4,
    link: "https://www.instagram.com/reel/DUIUtXdjeSS/?igsh=MXNtcWw5YjI4ZWxoNQ==",
    cover: "/images/gallery/WhatsApp Image 2026-05-17 at 09.41.34.jpeg",
    views: "5.4K",
    likes: "432"
  }
];

export default function Reels() {
  return (
    <section id="social" className="bg-[#050505] py-24 sm:py-32 font-inter relative z-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-orange-500" />
              <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-wide">
                Trending <span className="text-white">Reels</span>
              </h2>
            </div>
            <p className="text-white/60 max-w-xl text-sm sm:text-base">
              Catch all the live action, fun moments, and high-energy gameplay straight from our Instagram. Follow us for daily updates!
            </p>
          </div>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors shrink-0"
          >
            Follow @GameZoneRaichur
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {REELS.map((reel, i) => (
            <motion.a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer block border border-white/10"
            >
              {/* Cover Image */}
              <img 
                src={reel.cover} 
                alt={`Instagram Reel ${reel.id}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              
              {/* Instagram Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Play Button Icon (Center) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-1 fill-current" />
                </div>
              </div>

              {/* Stats (Bottom) */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-semibold text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  {reel.views}
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {reel.likes}
                </div>
              </div>
              
              {/* Instagram Icon (Top Right) */}
              <div className="absolute top-4 right-4">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
