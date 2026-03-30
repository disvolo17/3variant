import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (end - startValue) * easeOutQuart;
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {Math.floor(count)}{suffix}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1714261429187-3977743028f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwZWFydGh8ZW58MXx8fHwxNzc0ODc5Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Green sustainable earth"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/70 to-emerald-950/90"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Everything is <span className="text-emerald-400">Reborn</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Green Unicorn - международная компания, разработчик и интегратор решений в области химической инженерии
          </motion.p>

          {/* Animated Counters */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative p-8">
                <AnimatedCounter end={15} suffix="+" />
                <p className="text-emerald-200 mt-3 text-lg">лет технологий</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative p-8">
                <AnimatedCounter end={100} suffix="+" />
                <p className="text-emerald-200 mt-3 text-lg">публикаций</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative p-8">
                <AnimatedCounter end={1} suffix="+ млн" />
                <p className="text-emerald-200 mt-3 text-lg">м³ переработанного ила</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="group relative px-12 py-5 bg-emerald-500 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Learn More</span>
            <motion.div
              className="absolute inset-0 bg-emerald-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-emerald-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};