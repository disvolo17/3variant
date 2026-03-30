import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { X, CheckCircle2, Droplet, Leaf, Shield, TrendingDown } from 'lucide-react';

export const ProblemSolutionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const traditionalMethods = [
    { icon: X, title: "Высокие затраты", desc: "Дорогостоящая обработка" },
    { icon: X, title: "Загрязнение", desc: "Выбросы в окружающую среду" },
    { icon: X, title: "Долгий процесс", desc: "Месяцы обработки" },
    { icon: X, title: "Опасность", desc: "Токсичные отходы" },
  ];

  const greenUnicornSolutions = [
    { icon: CheckCircle2, title: "Экономия", desc: "Снижение затрат на 60%" },
    { icon: Leaf, title: "Экологично", desc: "Нулевые выбросы" },
    { icon: TrendingDown, title: "Быстро", desc: "Обработка за недели" },
    { icon: Shield, title: "Безопасно", desc: "Чистый продукт" },
  ];

  return (
    <section id="solution" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ y: 0 }}
        animate={isInView ? { y: -50 } : {}}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgb(220, 38, 38) 2px, transparent 2px)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0'
        }}></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Paradigm Shift Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 bg-red-100 rounded-full"
            animate={isInView ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              Устаревшая парадигма
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Проблема и <span className="text-emerald-600">Решение</span>
          </h2>
        </motion.div>

        {/* Split Screen Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          {/* Traditional Methods (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-right mb-8">
              <h3 className="text-3xl font-bold text-red-600 mb-2">Традиционные методы</h3>
              <p className="text-gray-600">Устаревшие подходы</p>
            </div>

            {traditionalMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: -5 }}
                className="group bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-200 hover:border-red-400 transition-all"
              >
                <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-gray-600">{method.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Green Unicorn Solutions (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">Green Unicorn</h3>
              <p className="text-gray-600">Инновационные решения</p>
            </div>

            {greenUnicornSolutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{solution.title}</h4>
                    <p className="text-gray-600">{solution.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg">Параметр</th>
                    <th className="px-8 py-6 text-center text-lg">Традиционные</th>
                    <th className="px-8 py-6 text-center text-lg bg-emerald-600">Green Unicorn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { param: "Стоимость обработки", trad: "Высокая", gu: "Низкая" },
                    { param: "Время обработки", trad: "3-6 месяцев", gu: "2-4 недели" },
                    { param: "Экологичность", trad: "Загрязнение", gu: "Нулевые выбросы" },
                    { param: "Качество продукта", trad: "Токсичный", gu: "Безопасный" },
                  ].map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                      className="hover:bg-white/50 transition-colors"
                    >
                      <td className="px-8 py-6 font-semibold text-gray-900">{row.param}</td>
                      <td className="px-8 py-6 text-center text-red-600">{row.trad}</td>
                      <td className="px-8 py-6 text-center text-emerald-600 font-semibold">{row.gu}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};