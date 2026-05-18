import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const GAME_NAMES = [
  "Neon Shooters",
  "Air Hockey Pro",
  "VR Experience",
  "Ball Pit Adventure",
  "Arcade Racer",
  "Classic Pinball",
  "Duo Basketball",
  "Action Arena",
  "Retro Combat",
  "Mini Bowling",
  "Dance Floor",
  "Climbing Wall",
  "Virtual Tennis",
  "Laser Tag",
  "Bumper Cars",
  "Space Invaders",
  "Kids Playground",
  "Super Slides"
];

const RAW_IMAGES = [
  "WhatsApp Image 2026-05-17 at 09.41.26 (1).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.26.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.27 (1).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.27.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.28.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.29.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.30.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.31.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.32 (1).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.32 (2).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.32.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.33 (1).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.33 (2).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.33.jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.34 (1).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.34 (2).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.34 (3).jpeg",
  "WhatsApp Image 2026-05-17 at 09.41.34.jpeg"
];

const GALLERY_ITEMS = RAW_IMAGES.map((img, index) => ({
  id: index,
  src: img,
  title: GAME_NAMES[index] || `Game ${index + 1}`
}));

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!selectedImage) {
        navigate('next');
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, isAnimating, selectedImage]);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setActiveIndex((prev) => {
      const len = GALLERY_ITEMS.length;
      if (direction === 'next') return (prev + 1) % len;
      return (prev + len - 1) % len;
    });

    setTimeout(() => setIsAnimating(false), 700);
  };

  const getRole = (index: number) => {
    const len = GALLERY_ITEMS.length;
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + len - 1) % len) return 'left';
    if (index === (activeIndex + 1) % len) return 'right';
    return 'back';
  };

  const getStylesForRole = (role: string) => {
    const baseTransition = 'transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1), filter 700ms ease, opacity 700ms ease, left 700ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    const styles: React.CSSProperties = {
      position: 'absolute',
      width: isMobile ? '65%' : '380px',
      aspectRatio: '4 / 3',
      transition: baseTransition,
      willChange: 'transform, filter, opacity, left, top',
      transformOrigin: 'center center',
      top: '50%'
    };

    switch (role) {
      case 'center':
        styles.transform = `translate(-50%, -50%) scale(${isMobile ? 1.05 : 1.2}) rotate(0deg)`;
        styles.filter = 'blur(0px)';
        styles.opacity = 1;
        styles.zIndex = 30;
        styles.left = '50%';
        break;
      case 'left':
        styles.transform = `translate(-50%, -50%) scale(${isMobile ? 0.85 : 0.95}) rotate(-12deg)`;
        styles.filter = 'blur(2px)';
        styles.opacity = 0.8;
        styles.zIndex = 20;
        styles.left = isMobile ? '15%' : '30%';
        break;
      case 'right':
        styles.transform = `translate(-50%, -50%) scale(${isMobile ? 0.85 : 0.95}) rotate(12deg)`;
        styles.filter = 'blur(2px)';
        styles.opacity = 0.8;
        styles.zIndex = 20;
        styles.left = isMobile ? '85%' : '70%';
        break;
      case 'back':
        styles.transform = `translate(-50%, -50%) scale(0.6) rotate(0deg)`;
        styles.filter = 'blur(10px)';
        styles.opacity = 0;
        styles.zIndex = 10;
        styles.left = '50%';
        break;
    }
    return styles;
  };

  return (
    <section className="bg-[#020202] py-16 sm:py-32 font-inter relative z-10 overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="px-4 sm:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6"
          >
            <div>
              <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-wide mb-4">
                Our <span className="text-orange-500">Games</span>
              </h2>
              <p className="text-white/60 max-w-2xl text-sm sm:text-base">
                Explore the energy, excitement, and vibrant atmosphere at Game Zone Raichur.
              </p>
            </div>
            
            {/* Desktop Navigation Arrows */}
            <div className="flex items-center gap-4 self-end md:self-auto">
              <button 
                onClick={() => navigate('prev')}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-[40]"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={() => navigate('next')}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-[40]"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Gallery Carousel Area */}
        <div className="relative w-full h-[45vh] md:h-[500px]">
          <div className="absolute inset-0">
            {GALLERY_ITEMS.map((item, index) => {
              const role = getRole(index);
              const style = getStylesForRole(role);
              
              return (
                <div 
                  key={item.id} 
                  style={style}
                  className="rounded-2xl overflow-hidden bg-white/5 cursor-pointer shadow-2xl"
                  onClick={() => {
                    if (role === 'center') {
                      setSelectedImage(item.src);
                    } else if (role === 'left') {
                      navigate('prev');
                    } else if (role === 'right') {
                      navigate('next');
                    }
                  }}
                >
                  <img 
                    src={`/images/gallery/${item.src}`} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                  
                  {/* Gradient Overlay for Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                  
                  {/* Hover Zoom Icon (Only on center) */}
                  {role === 'center' && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 p-3 rounded-full backdrop-blur-md transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Game Title & Desc */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-anton text-xl md:text-3xl uppercase tracking-wide text-white drop-shadow-md leading-none mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-medium drop-shadow-md line-clamp-2">
                      Experience the thrill of {item.title.toLowerCase()} in our dedicated arena. Perfect for all ages!
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 z-[210]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={`/images/gallery/${selectedImage}`}
              alt="Expanded view"
              className="max-w-[95vw] max-h-[95vh] rounded-2xl shadow-2xl object-contain pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Find the selected title */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/10 text-center max-w-sm"
            >
              <h3 className="font-anton text-2xl uppercase tracking-widest text-white/90 mb-1">
                {GALLERY_ITEMS.find(item => item.src === selectedImage)?.title}
              </h3>
              <p className="text-white/70 text-sm">
                Get ready for high-energy gameplay and non-stop entertainment.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
