import { motion } from 'motion/react';
import { AlertTriangle, Droplets, TrendingUp } from 'lucide-react';

export const ProblemSection = () => {
  const stats = [
    { label: "Ежегодный объем сточных вод", value: "360 млрд м³", icon: Droplets },
    { label: "Не проходит очистку вовсе", value: "52%", icon: AlertTriangle },
    { label: "Накоплено ила в Лагунах", value: "108 млн м³", icon: TrendingUp },
  ];

  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#333333]">Outdated Wastewater Management</h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-lg font-light">
            Традиционные методы очистки не справляются с растущими объемами токсичных отходов, создавая угрозу экосистеме.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FF9800] transition-colors">
                <stat.icon className="w-8 h-8 text-[#FF9800] group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl font-bold text-[#2E7D32] mb-2">{stat.value}</div>
              <div className="text-[#666666] font-medium leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
