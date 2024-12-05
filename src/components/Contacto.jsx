import React from "react";
import ScrollReveal from "./ScrollReveal";

const ContatoEquipe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between border-b-8 border-[#FF6B00] pt-12 bg-white relative">
      {/* Texto de chamada */}
      <div className="md:w-1/2 px-6 md:px-12">
        <ScrollReveal>
          <h1 className="md:text-7xl text-3xl font-mono text-gray-900 leading-tight">
            Entre em contato com <br />
            <span className="text-[#FF6B00] font-bold">
              nossa Equipe Comercial
            </span>
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Estamos prontos para esclarecer todas as suas dúvidas e ajudar você
            a alcançar seus objetivos. Aproveite também para conhecer nossos
            planos e promoções exclusivas.
          </p>
          <button className="my-6 px-6 py-3 text-center bg-[#FF6B00] text-white font-semibold rounded-full hover:bg-orange-600">
            <a
              href="https://wa.link/tlex19"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale conosco agora
            </a>
          </button>
        </ScrollReveal>
      </div>

      {/* Imagem do telefone */}
      <div className="relative md:mt-0 md:w-1/2 flex justify-center">
        {/* Imagem na parte superior direita do telefone (fundo) */}
        <img
          src="https://igic.com.br/wp-content/uploads/2023/11/belza-entre-em-contato-imagem-02.png"
          alt="Imagem no topo do telefone"
          className="absolute top-0 right-0 md:top-44 md:right-20 w-32 md:w-48 h-auto z-0"
        />

        {/* Imagem na parte inferior esquerda do telefone (fundo) */}
        <img
          src="https://igic.com.br/wp-content/uploads/2023/11/belza-entre-em-contato-imagem-03.png"
          alt="Imagem na base do telefone"
          className="absolute hidden md:block top-7 left-24 w-48 h-auto z-0"
        />

        {/* Imagem principal do telefone */}
        <div className="relative z-10">
          <img
            src="telefone.png"
            alt="Telefone com WhatsApp aberto"
            className="w-72 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContatoEquipe;
