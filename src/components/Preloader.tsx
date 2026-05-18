import { motion } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="overflow-hidden mb-6"
        >
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: isLoading ? "0%" : "-100%" }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="font-anton text-5xl md:text-7xl uppercase tracking-wider"
          >
            GAME ZONE
          </motion.h1>
        </motion.div>
        
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: isLoading ? "100%" : "200%" }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut", 
              repeat: isLoading ? Infinity : 0,
            }}
            className="w-full h-full bg-white rounded-full"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0.6 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-xs tracking-[0.2em] uppercase font-inter"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
}
