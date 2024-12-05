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
    </div>
  );
}

export default App;
