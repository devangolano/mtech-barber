import React from "react";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PricingCard = ({ title, price, features }) => {
  return (
    <ScrollReveal direction="up">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold text-[#FF6B00]">R$ {price}</span>
          <span className="text-gray-600">/mês</span>
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-[#FF6B00] mt-1 mr-2" size={16} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-[#FF6B00] text-white rounded-full py-3 mt-8 hover:bg-[#FF8533] transition-colors">
          Assine já!
        </button>
      </div>
    </ScrollReveal>
  );
};

const Pricing = () => {
  const plan = {
    title: "One",
    price: "249,90",
    features: [
      "Software com TODAS as funcionalidades + App",
      "Link de Agendamento",
      "Agendamento Ilimitado",
      "Profissionais Ilimitados",
      "100 SMS*",
    ],
  };

  return (
    <section className="py-12 bg-gray-900" id="pricing">
      <ScrollReveal>
        <h2 className="md:text-4xl text-xl py-3 mx-6 md:bg-gray-900 bg-orange-500 rounded-full font-bold text-white md:mb-16 mb-10 text-center">
          Conheça Nosso Plano
        </h2>
      </ScrollReveal>
      <div className="container mx-auto px-4">
        <PricingCard {...plan} />
        <ScrollReveal>
          <div className="text-center mt-12 text-gray-400 text-sm">
            <p className="text-md">
              *O número de imagens em cada plano não é acumulativo. Pacotes
              adicionais de NF, WhatsApp e SMS estão disponíveis.
            </p>
            <p className="font-bold text-lg md:text-2xl text-white mt-4">
              Ganhe até 30% de desconto fechando nossos planos semestrais ou
              anuais!
              <br />7 DIAS DE GARANTIA ASSEGURADOS.
            </p>
            <p className="text-gray-400 text-md">
              Se não estiver satisfeito com o IGIC Barber, basta solicitar o
              estorno.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
