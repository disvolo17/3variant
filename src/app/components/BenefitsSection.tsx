import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Microscope, FlaskRound, Network, Sprout } from 'lucide-react';

export const BenefitsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Microscope,
      title: "Дезинфекция",
      description: "Полное уничтожение патогенов и бактерий",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      animation: {
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }
    },
    {
      icon: FlaskRound,
      title: "Детоксикация",
      description: "Связывание и нейтрализация тяжелых металлов",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      animation: {
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }
    },
    {
      icon: Network,
      title: "Структурирование",
      description: "Создание прочной сетчатой структуры",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      animation: {
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1]
      }
    },
    {
      icon: Sprout,
      title: "Почва",
      description: "Превращение в плодородную почву",
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      animation: {
        y: [0, -5, 0],
        scale: [1, 1.15, 1]
      }
    }
  ];

  return (
    <section id="benefits" ref={ref} className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            backgroundSize: '400% 400%'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ключевые <span className="text-emerald-600">Преимущества</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к обработке отходов с максимальной эффективностью
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-emerald-200">
                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <motion.div
                    className={`relative w-24 h-24 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-xl`}
                    whileHover={benefit.animation}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <benefit.icon className="w-12 h-12 text-white" strokeWidth={2} />
                    
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-30 blur-xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Animated Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${benefit.color.split(' ')[1]}, transparent)`,
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
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
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
            }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Комплексное решение в одном процессе
            </h3>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Наша технология объединяет все этапы обработки, обеспечивая максимальную эффективность и безопасность конечного продукта
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};