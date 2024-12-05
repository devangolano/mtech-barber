import { Settings, CheckCircle, Lock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Funcional",
    description: "Execute as tarefas necessárias em poucos passos.",
    icon: Settings,
  },
  {
    title: "Prático",
    description:
      "Acesse as funcionalidades na palma da sua mão através do app.",
    icon: CheckCircle,
  },
  {
    title: "Seguro",
    description: "Suas informações e dados de clientes estão protegidos.",
    icon: Lock,
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-gray-100 py-10 md:py-24">
      <div className="container lg:flex md:items-center md:gap-36 w-full justify-around lg:max-w-7xl mx-auto ">
        <h2 className="text-5xl md:text-6xl px-5 lg:text-8xl font-bold mb-10 leading-tight">
          <span className="text-[#FF6B1B]">MTECH é</span>
          <br />
          <span className="text-[#FF6B1B]">funcional,</span>
          <br />
          <span className="text-[#B84B39]">prático e</span>
          <br />
          <span className="text-[#B84B39]">seguro.</span>
        </h2>
        <ScrollReveal>
          <div className="space-y-8 md:space-y-12 px-10 lg:space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative bg-white rounded-lg items-center flex shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl p-2 md:p-4 border-b-4 border-[#FF6B1B] overflow-visible"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Ícone circular */}
                <div className="absolute -left-8 md:-left-10 w-[100px] h-[100px] md:w-[118px] md:h-[118px] rounded-full bg-white shadow-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-[#FF6B1B]" />
                </div>

                {/* Conteúdo do Card */}
                <div className="pl-[65px] md:pl-20 md:w-[]">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#FF6B1B] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
