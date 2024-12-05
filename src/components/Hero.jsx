import React from "react";
import { motion } from "framer-motion";
import { Calendar, BarChart2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-28 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Conteúdo */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texto principal com animação */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Automatize
              <span className="block text-[#FF6B00]">a arte da barbearia</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Uma solução completa para gestão financeira e agendamento,
              permitindo que você se concentre em atender seus clientes,
              enquanto a MTECH impulsiona seu negócio.
            </p>
            <a
              href="http://mtechbarber.com/"
              target="_blank"
              rel="noopener nor"
              className="bg-[#FF6B00] text-white px-8 py-3 rounded-full text-center hover:bg-[#FF8533] transition-colors"
            >
              Plano ideial para o seu negócio
            </a>
          </motion.div>

          {/* Homem com ícones flutuantes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex md:block justify-center items-center"
          >
            <img
              src="./barber-capa-imagem-01.png" // Substitua pelo caminho correto da imagem
              alt="Homem usando celular"
              className="rounded-lg w-72  md:w-96 object-cover align-text-bottom"
            />

            {/* Ícone 1 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-72 md:top-60 left-0 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg"
            >
              <Calendar className="text-[#FF6B00] " size={24} />
              <span className="text-gray-700 text-sm font-medium">
                Consulte sua agenda
              </span>
            </motion.div>

            {/* Ícone 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute md:bottom-10 right-5 md:right-28 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg"
            >
              <BarChart2 className="text-[#FF6B00]" size={20} />
              <span className="text-gray-700 text-sm font-medium">
                Faturamento mensal
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
