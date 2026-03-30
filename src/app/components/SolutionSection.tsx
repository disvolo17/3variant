import { motion } from 'motion/react';
import { ShieldCheck, Zap, Layers, Leaf } from 'lucide-react';

export const SolutionSection = () => {
  const steps = [
    {
      title: "Дезинфекция",
      desc: "Полное уничтожение патогенов и болезнетворных бактерий за счет термо-химической обработки.",
      icon: ShieldCheck,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Детоксикация",
      desc: "Нейтрализация и связывание тяжелых металлов, делая их безопасными для окружающей среды.",
      icon: Zap,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Структурирование",
      desc: "Изменение физико-химических свойств ила для создания идеальной основы под почву.",
      icon: Layers,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Результат",
      desc: "На выходе — высококачественная плодородная почва, готовая к использованию в сельском хозяйстве.",
      icon: Leaf,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-white" id="tech">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#2E7D32]">Our Revolutionary Technology</h2>
            <p className="text-[#666666] text-lg mb-8 leading-relaxed">
              Мы превращаем экологическую проблему в ценный ресурс. Наша технология позволяет за 1 месяц развернуть производство био-почвы из сточных вод, соответствующее всем стандартам безопасности.
            </p>
            <div className="p-6 bg-[#F5F5F5] rounded-3xl border-l-4 border-[#FF9800]">
              <p className="italic text-[#333333] font-medium">
                "Мы не просто утилизируем отходы — мы возвращаем жизнь земле."
              </p>
            </div>
          </motion.div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#333333]">{step.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
