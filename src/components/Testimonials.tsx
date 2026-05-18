import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';

const REVIEWS = [
  {
    name: "Local Guide",
    date: "A month ago",
    text: "Clean and excellent weekend spot for young families and children to spend energy. The ball pool and arcade games are a hit!",
    rating: 4
  },
  {
    name: "Family Visitor",
    date: "2 months ago",
    text: "Pricing structures are affordable relative to local expectations. Great place to keep kids entertained for hours.",
    rating: 5
  },
  {
    name: "Weekend Traveler",
    date: "Recently",
    text: "Features an array of active setups including indoor sliders and air hockey. We had a fun time, though it gets busy!",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#050505] py-24 px-4 sm:px-12 font-inter border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-wide mb-4">
              Visitor <span className="text-purple-500">Stories</span>
            </h2>
            <p className="text-white/60 max-w-md">
              See what families are saying about their experience at Game Zone Raichur.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
          >
            <div>
              <div className="text-3xl font-anton text-white">3.5<span className="text-lg text-white/50">/5</span></div>
              <div className="text-xs text-white/50 font-medium uppercase tracking-wider">Overall Rating</div>
            </div>
            <div className="w-px h-10 bg-white/10 mx-2" />
            <div className="flex text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <StarHalf className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 text-white/20" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`w-4 h-4 ${idx < review.rating ? 'fill-current' : 'text-white/10 fill-white/10'}`} 
                  />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center text-white font-bold uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{review.name}</div>
                  <div className="text-xs text-white/40">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
