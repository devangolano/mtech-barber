import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FeatureSection from "./components/Feature2";
import Contacto from "./components/Contacto";
import AnimatedFooter from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <FeatureSection />
      <Testimonials />
      <Pricing />
      <Contacto />
      <AnimatedFooter />

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.link/tlex19" // Substitua pelo número do WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-14 right-4 w-16 h-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <img
          src="https://logopng.com.br/logos/whatsapp-33.png"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </a>
    </div>
  );
}

export default App;
