import React, { useState } from "react";
import { Menu, X, MessageCircle, Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <img src="/logo2.png" alt="Logo MTech" className="h-12" />
          <div className="flex items-center space-x-16">
            <div className="hidden lg:flex space-x-10">
              <a
                href="#home"
                className="text-gray-800  hover:text-[#FF6B00] transition-colors"
              >
                Principal
              </a>
              <a
                href="#sobre"
                className="text-gray-800  hover:text-[#FF6B00] transition-colors"
              >
                Sobre
              </a>
              <a
                href="#blog"
                className="text-gray-800  hover:text-[#FF6B00] transition-colors"
              >
                Blog
              </a>
              <a
                href="#contato"
                className="text-gray-800  hover:text-[#FF6B00] transition-colors"
              >
                Contato
              </a>
              <a
                href="#contato"
                className="text-gray-800  hover:text-[#FF6B00] transition-colors"
              >
                Acesse nosso sistema
              </a>
            </div>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex h-screen text-center flex-col space-y-6">
              <a href="#home" className="text-gray-800 hover:text-[#FF6B00]">
                Principal
              </a>
              <a href="#sobre" className="text-gray-800 hover:text-[#FF6B00]">
                Sobre
              </a>
              <a href="#blog" className="text-gray-800 hover:text-[#FF6B00]">
                Blog
              </a>
              <a href="#contato" className="text-gray-800 hover:text-[#FF6B00]">
                Contato
              </a>
              <a
                href="#sistema"
                className="bg-[#FF6B00] text-white px-6 py-2 rounded-full text-center"
              >
                Acesse nosso sistema
              </a>
              <div className="flex items-center justify-center space-x-4">
                {/* Ícone WhatsApp */}
                <span className="text-green-500 hover:text-green-600 transition">
                  <MessageCircle size={30} />
                </span>
                {/* Ícone Instagram */}
                <span className="text-pink-500 hover:text-pink-600 transition">
                  <Instagram size={30} />
                </span>
                {/* Ícone Facebook */}
                <span className="text-blue-500 hover:text-blue-600 transition">
                  <Facebook size={30} />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
