import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const AnimatedScale = ({ value, max, label }: { value: number; max: number; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 2000, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCurrent(value * easeOut);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);

  const percentage = (current / max) * 100;

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-gray-900">{label}</span>
        <span className="text-3xl font-bold text-emerald-600">{current.toFixed(1)}</span>
      </div>
      <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const MapMarker = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="w-4 h-4 bg-emerald-500 rounded-full"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(16, 185, 129, 0.7)',
            '0 0 0 20px rgba(16, 185, 129, 0)',
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay
        }}
      />
    </motion.div>
  );
};

export const BahrainSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gccCountries = [
    { name: "Bahrain", x: "50%", y: "45%" },
    { name: "Saudi Arabia", x: "40%", y: "50%" },
    { name: "UAE", x: "60%", y: "55%" },
    { name: "Qatar", x: "48%", y: "40%" },
    { name: "Kuwait", x: "45%", y: "35%" },
    { name: "Oman", x: "65%", y: "60%" },
  ];

  return (
    <section id="bahrain" ref={ref} className="relative py-32 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1674003487359-c9e8532b79e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwZGVzZXJ0JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NDgyMjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Middle East"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Результаты в <span className="text-emerald-400">Bahrain</span>
          </h2>
          <p className="text-xl text-emerald-100">Подтвержденные показатели качества</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
              <AnimatedScale value={7.1} max={14} label="pH уровень" />
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">E.coli</span>
                  <motion.span 
                    className="text-3xl font-bold text-emerald-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {"<0.2"}
                  </motion.span>
                </div>
                <div className="relative h-32">
                  <svg className="w-full h-full" viewBox="0 0 200 100">
                    <motion.path
                      d="M 0 80 Q 50 20, 100 40 T 200 10"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, delay: 0.6 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <motion.div 
              className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Паразиты</h3>
                  <p className="text-emerald-200 text-lg">Полностью отсутствуют</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* GCC Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Регион GCC</h3>
              
              {/* Simplified Map */}
              <div className="relative aspect-square bg-emerald-950/50 rounded-2xl overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {gccCountries.map((country, i) => (
                      <div
                        key={country.name}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: country.x, top: country.y }}
                      >
                        <MapMarker delay={0.5 + i * 0.1} />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                          className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                        >
                          <span className="text-xs text-white font-semibold bg-emerald-600 px-2 py-1 rounded">
                            {country.name}
                          </span>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-6 text-center"
              >
                <p className="text-emerald-100 text-lg">
                  Проверенная технология в 6 странах региона
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};