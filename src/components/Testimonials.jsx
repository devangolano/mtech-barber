import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  return (
    <section className="py-12  bg-gray-50" id="testimonials">
      <ScrollReveal>
        <div className="text-start lg:hidden px-6 mb-10">
          <h2 className="text-4xl text-blue-950">Nossos Clientes</h2>
          <span className="text-4xl flex flex-col font-bold text-[#FF6B00]">
            Recomendam
          </span>
          <p className="text-gray-600 mt-4">
            Milhares de agendamentos já foram <br /> realizados através da
            MTECH.
            <br />A próxima história de sucesso pode ser a sua.
          </p>
        </div>
      </ScrollReveal>
      <div className="container md:grid md:grid-cols-2 gap-12 mx-auto px-4">
        <div className="flex items-center mb-16 justify-center space-x-8">
          <button className="rounded-full border border-gray-300">
            <ChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 max-w-4xl">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-lg p-6 shadow-xl">
                <div className="mb-4">
                  <h3 className="text-[#FF6B00] font-semibold text-lg">
                    Sérgio
                  </h3>
                  <p className="text-sm text-gray-600">BARBEARIA COSTA</p>
                </div>
                <p className="text-gray-700">
                  "Antes de eu ter a MTECH Barber na minha barbearia, eu vivia
                  um pouco sobrecarregado aqui no local, trabalhava sempre sob
                  pressão através dos clientes que sentavam e ficavam me
                  olhando..."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white hidden md:block rounded-lg p-6 shadow-xl">
                <div className="mb-4">
                  <h3 className="text-[#FF6B00] font-semibold text-lg">Yago</h3>
                  <p className="text-sm text-gray-600">2.9 BARBEARIA</p>
                </div>
                <p className="text-gray-700">
                  "Nossos primeiros 3 meses de vida, trabalhando muito com os
                  clientes internos e colaboradores para que eles conseguissem
                  captar a nossa missão como empresa..."
                </p>
              </div>
            </ScrollReveal>
          </div>

          <button className=" rounded-full border border-gray-300">
            <ChevronRight size={24} />
          </button>
        </div>
        <ScrollReveal className="">
          <div className="text-start hidden lg:block ">
            <h2 className="text-6xl text-blue-950">Nossos Clientes</h2>
            <span className="text-6xl flex flex-col font-bold text-[#FF6B00]">
              Recomendam
            </span>
            <p className="text-gray-600 mt-4">
              Milhares de agendamentos já foram <br /> realizados através da
              MTECH.
              <br />A próxima história de sucesso pode ser a sua.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
