import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Calendar, Zap, CheckCircle2, MapPin } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 2000, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(end * easeOut);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <div ref={ref} className="inline-block">
      {Math.floor(count)}{suffix}
    </div>
  );
};

export const ImplementationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    { 
      icon: Calendar, 
      title: "Консультация", 
      duration: "1 неделя",
      description: "Анализ требований и условий",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Zap, 
      title: "Проектирование", 
      duration: "2 недели",
      description: "Разработка технического решения",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: CheckCircle2, 
      title: "Установка", 
      duration: "1 месяц",
      description: "Монтаж и настройка оборудования",
      color: "from-emerald-500 to-emerald-600"
    },
  ];

  const gccCountries = [
    { name: "Bahrain", flag: "🇧🇭" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "Oman", flag: "🇴🇲" },
  ];

  return (
    <section id="implementation" ref={ref} className="relative py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #10b981 12%, transparent 12.5%, transparent 87%, #10b981 87.5%, #10b981),
                           linear-gradient(150deg, #10b981 12%, transparent 12.5%, transparent 87%, #10b981 87.5%, #10b981),
                           linear-gradient(30deg, #10b981 12%, transparent 12.5%, transparent 87%, #10b981 87.5%, #10b981),
                           linear-gradient(150deg, #10b981 12%, transparent 12.5%, transparent 87%, #10b981 87.5%, #10b981)`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Быстрое <span className="text-emerald-600">Внедрение</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От первой консультации до полноценной работы системы
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {timeline.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <motion.div
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className={`relative w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <step.icon className="w-12 h-12 text-white" strokeWidth={2} />
                        
                        {/* Pulse Effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full opacity-30`}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                        />
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <div className="text-emerald-600 font-semibold text-lg mb-3">
                        {step.duration}
                      </div>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Capacity and Region */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Capacity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 2px, transparent 2px)',
                  backgroundSize: '50px 50px'
                }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="inline-block p-4 bg-white/20 rounded-2xl mb-6"
                >
                  <Zap className="w-12 h-12" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-4">Производительность</h3>
                <div className="text-6xl font-bold mb-4">
                  <AnimatedCounter end={6} suffix=" млн" />
                </div>
                <p className="text-2xl text-emerald-100">
                  м³ обработанного ила ежегодно
                </p>
              </div>
            </div>
          </motion.div>

          {/* GCC Region */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-emerald-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Регион GCC</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {gccCountries.map((country, i) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all cursor-pointer"
                  >
                    <div className="text-4xl mb-2">{country.flag}</div>
                    <div className="text-gray-900 font-semibold">{country.name}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="mt-8 p-4 bg-emerald-50 rounded-xl text-center"
              >
                <p className="text-emerald-700 font-semibold">
                  Доступно во всех странах GCC
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};