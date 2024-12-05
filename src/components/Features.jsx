import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Package,
  History,
  Users,
  MapPin,
  FileText,
  MessageSquare,
  DollarSign,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title }) => {
  return (
    <ScrollReveal>
      <div className="bg-white rounded-lg bg-[url('')] p-2 shadow-[0_2px_8px_rgba(0,0,0,0.1)] relative mt-7 h-40 w-full flex flex-col items-center justify-center">
        <div className="bg-[#FF6B00] w-20 h-20 rounded-full flex items-center justify-center absolute -top-7 left-1/2 transform -translate-x-1/2">
          <Icon className="text-white" size={40} />
        </div>
        <h3 className="text-[#1B365D] text-center text-sm font-medium leading-tight md:mt-6 mt-12 px-2">
          {title}
        </h3>
      </div>
    </ScrollReveal>
  );
};

const features = [
  {
    icon: Package,
    title: "Controlar seu estoque de produtos.",
  },
  {
    icon: History,
    title: "Manter o histórico dos seus clientes.",
  },
  {
    icon: Users,
    title: "Acesso para gerentes e funcionários.",
  },
  {
    icon: MapPin,
    title: "Rastrear os serviços realizados e por quais funcionários.",
  },
  {
    icon: FileText,
    title: "Emissão de notas",
  },
  {
    icon: MessageSquare,
    title: "Automação de mensagens",
  },
  {
    icon: DollarSign,
    title:
      "Calcular comissões dos seus funcionários e despesas dos seus clientes.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-center mb-16">
            <span className="text-[#FF6B00] md:text-6xl text-3xl font-bold">
              Com a MTech Barber,
            </span>
            <br />
            <span className="text-[#1B365D] text-2xl md:text-4xl">
              você pode:
            </span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
