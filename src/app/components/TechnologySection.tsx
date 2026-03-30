import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Beaker, FlaskConical, TestTube, ArrowRight } from 'lucide-react';

export const TechnologySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const institutions = [
    { icon: Beaker, name: "Research Institute A" },
    { icon: FlaskConical, name: "Research Institute B" },
    { icon: TestTube, name: "Research Institute C" },
  ];

  const transformationSteps = [
    { title: "Опасные отходы", color: "from-red-500 to-red-600" },
    { title: "Химическая обработка", color: "from-yellow-500 to-amber-600" },
    { title: "Полезный продукт", color: "from-emerald-500 to-emerald-600" }
  ];

  return (
    <section id="technology" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16, 185, 129) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl mb-6 text-gray-900 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Мы создали технологию, которая{' '}
            <span className="text-emerald-600">превращает опасные отходы</span>{' '}
            в полезный продукт
          </motion.h2>
        </motion.div>

        {/* Institution Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {institutions.map((inst, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <motion.div
                  className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <inst.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">{inst.name}</h3>
                <p className="text-gray-600 mt-2">Сертифицированная технология</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transformation Process */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative bg-gradient-to-br from-gray-50 to-emerald-50 p-12 rounded-3xl overflow-hidden"
          >
            {/* Animated Background Waves */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgb(16, 185, 129) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgb(5, 150, 105) 0%, transparent 50%)',
                backgroundSize: '400% 400%'
              }}
            />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              {transformationSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-8 flex-1">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + i * 0.3 }}
                  >
                    <motion.div
                      className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        boxShadow: [
                          '0 10px 40px rgba(0,0,0,0.1)',
                          '0 20px 60px rgba(16,185,129,0.3)',
                          '0 10px 40px rgba(0,0,0,0.1)',
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5
                        }
                      }}
                    >
                      <span className="text-white font-bold text-center px-4">{i + 1}</span>
                    </motion.div>
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
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

                  {i < transformationSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.3 }}
                      className="hidden md:block"
                    >
                      <ArrowRight className="w-12 h-12 text-emerald-600" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {transformationSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                  className="text-center"
                >
                  <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};