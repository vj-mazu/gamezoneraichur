import { motion } from 'framer-motion';
import { Check, Star, PartyPopper } from 'lucide-react';

const PACKAGES = [
  {
    title: "Basic Pass",
    price: "₹499",
    duration: "Per Hour",
    popular: false,
    icon: <Star className="w-6 h-6 text-orange-400" />,
    features: [
      "Access to Ball Pool",
      "Indoor Sliders",
      "Standard Arcade Games",
      "Safe Play Environment"
    ]
  },
  {
    title: "VIP Experience",
    price: "₹899",
    duration: "Per Hour",
    popular: true,
    icon: <Star className="w-6 h-6 text-purple-400 fill-current" />,
    features: [
      "Everything in Basic Pass",
      "VR Experience Access",
      "Premium Air Hockey",
      "Laser Tag Arena",
      "Priority Access"
    ]
  },
  {
    title: "Birthday Bash",
    price: "Custom",
    duration: "Group Rate",
    popular: false,
    icon: <PartyPopper className="w-6 h-6 text-pink-400" />,
    features: [
      "Exclusive Area Access",
      "Dedicated Host",
      "Food & Snacks Included",
      "Decorations & Cake Setup",
      "Unlimited Arcade Play"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#050505] py-24 sm:py-32 font-inter relative z-10 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-wide mb-4">
            Play <span className="text-orange-500">Packages</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Choose the perfect pass for an unforgettable day. From quick visits to full birthday celebrations, we have something for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative bg-white/5 rounded-3xl p-8 border ${
                pkg.popular ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-white/10'
              } backdrop-blur-md hover:bg-white/10 transition-colors group`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center">
                  {pkg.icon}
                </div>
                <h3 className="font-anton text-2xl uppercase tracking-wide">{pkg.title}</h3>
              </div>

              <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex items-end gap-2">
                  <span className="font-anton text-5xl text-white">{pkg.price}</span>
                  <span className="text-white/50 mb-2 font-medium">{pkg.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70 text-sm">
                    <Check className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
                pkg.popular 
                  ? 'bg-gradient-to-r from-purple-500 to-orange-500 text-white hover:opacity-90' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {pkg.price === 'Custom' ? 'Contact Us' : 'Book Now'}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
