import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const IMAGES = [
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png', bg: '#F4845F', panel: '#F79B7F' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png', bg: '#6BBF7A', panel: '#85CC92' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png', bg: '#E882B4', panel: '#ED9DC4' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png', bg: '#6EB5FF', panel: '#8DC4FF' },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    IMAGES.forEach((img) => {
      const i = new Image();
      i.src = img.src;
    });
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      navigate('next');
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, isAnimating]);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setActiveIndex((prev) => {
      if (direction === 'next') return (prev + 1) % 4;
      return (prev + 3) % 4;
    });

    setTimeout(() => setIsAnimating(false), 700);
  };

  const getRole = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 3) % 4) return 'left';
    if (index === (activeIndex + 1) % 4) return 'right';
    return 'back';
  };

  const getStylesForRole = (role: string) => {
    // Ultra-smooth spring-like bezier transition
    const baseTransition = 'transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1), filter 700ms ease, opacity 700ms ease, left 700ms cubic-bezier(0.34, 1.56, 0.64, 1), bottom 700ms cubic-bezier(0.34, 1.56, 0.64, 1), height 700ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    const styles: React.CSSProperties = {
      position: 'absolute',
      aspectRatio: '0.6 / 1',
      transition: baseTransition,
      willChange: 'transform, filter, opacity, left',
      transformOrigin: 'bottom center'
    };

    switch (role) {
      case 'center':
        styles.transform = `translateX(-50%) scale(${isMobile ? 1.25 : 1.15}) rotate(0deg)`;
        styles.filter = 'blur(0px)';
        styles.opacity = 1;
        styles.zIndex = 30;
        styles.left = '50%';
        styles.height = isMobile ? '60%' : '85%';
        styles.bottom = isMobile ? '22%' : '0%';
        break;
      case 'left':
        // Fanning out to the left
        styles.transform = `translateX(-50%) scale(${isMobile ? 0.9 : 1.1}) rotate(-12deg)`;
        styles.filter = 'blur(2px)';
        styles.opacity = 0.9;
        styles.zIndex = 20;
        styles.left = isMobile ? '15%' : '28%';
        styles.height = isMobile ? '50%' : '75%';
        styles.bottom = isMobile ? '25%' : '5%';
        break;
      case 'right':
        // Fanning out to the right
        styles.transform = `translateX(-50%) scale(${isMobile ? 0.9 : 1.1}) rotate(12deg)`;
        styles.filter = 'blur(2px)';
        styles.opacity = 0.9;
        styles.zIndex = 20;
        styles.left = isMobile ? '85%' : '72%';
        styles.height = isMobile ? '50%' : '75%';
        styles.bottom = isMobile ? '25%' : '5%';
        break;
      case 'back':
        // Hidden behind the center card, slightly tilted
        styles.transform = `translateX(-50%) scale(${isMobile ? 0.7 : 0.8}) rotate(0deg)`;
        styles.filter = 'blur(8px)';
        styles.opacity = 0;
        styles.zIndex = 10;
        styles.left = '50%';
        styles.height = isMobile ? '40%' : '60%';
        styles.bottom = isMobile ? '30%' : '10%';
        break;
    }
    return styles;
  };

  const grainSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E`;

  return (
    <div
      className="relative w-full overflow-hidden font-sans"
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        transition: 'background-color 700ms ease',
      }}
    >
      <div className="relative w-full h-[100svh] overflow-hidden">
        
        {/* 1. Grain overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-50 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url("${grainSvg}")`, backgroundSize: '200px 200px', backgroundRepeat: 'repeat' }}
        />

        {/* 2. Giant ghost text */}
        <div 
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2]"
          style={{ top: '15%' }}
        >
          <h1 
            className="font-anton font-black text-white/90 uppercase whitespace-nowrap m-0 tracking-tighter"
            style={{ 
              fontSize: 'clamp(90px, 20vw, 300px)', 
              lineHeight: 1, 
              opacity: 1
            }}
          >
            GAME ZONE
          </h1>
        </div>

        {/* 4. Unique Card Fan Carousel */}
        <div className="absolute inset-0 z-[10]">
          {IMAGES.map((img, index) => {
            const role = getRole(index);
            const style = getStylesForRole(role);
            
            return (
              <div key={index} style={style}>
                <img 
                  src={img.src} 
                  alt="Game Character" 
                  className="w-full h-full object-contain object-bottom pointer-events-none drop-shadow-2xl"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* 5. Bottom-left text + nav buttons */}
        <div className="absolute bottom-6 left-4 sm:bottom-12 sm:left-12 z-[60] max-w-[320px]">
          <p className="font-bold uppercase tracking-widest mb-2 sm:mb-3 text-base sm:text-[22px] text-white/95 drop-shadow-md">
            GAME ZONE ATTRACTIONS
          </p>
          <p className="hidden sm:block text-xs sm:text-sm text-white/90 leading-[1.6] mb-4 sm:mb-5 drop-shadow-md">
            Step into a world of vibrant arcade action and high-energy excitement. Our dedicated gaming arenas are perfect for all ages. Book your playtime today!
          </p>
          
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('prev')}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/60 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
              aria-label="Previous image"
            >
              <ArrowLeft size={24} strokeWidth={2.25} />
            </button>
            <button 
              onClick={() => navigate('next')}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/60 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
              aria-label="Next image"
            >
              <ArrowRight size={24} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link */}
        <div className="absolute bottom-6 right-4 sm:bottom-12 sm:right-12 z-[60]">
          <a 
            href="#discover"
            className="flex items-center gap-2 font-anton text-white/90 hover:text-white uppercase no-underline transition-colors duration-200 drop-shadow-lg"
            style={{ 
              fontSize: 'clamp(20px, 4vw, 56px)',
              lineHeight: 1
            }}
          >
            DISCOVER IT
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={3} />
          </a>
        </div>

      </div>
    </div>
  );
}
