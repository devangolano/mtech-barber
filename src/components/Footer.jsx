import React from "react";
import { Mail, Linkedin, Instagram, Youtube, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../public/logo2.png";

const AnimatedFooter = () => {
  const iconAnimation = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <footer className="bg-[#1B3159] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo
          <div>
            <img
              src={logo}
              alt="Logo MTECH"
              width={120}
              height={50}
              className="brightness-0 invert"
            />
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Entre em contato:</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://wa.link/tlex19"
                variants={iconAnimation}
                target="_blank" // Abre em uma nova aba
                rel="noopener noreferrer" // Segurança ao abrir links externos
                initial="initial"
                whileHover="hover"
                className="hover:text-green-400"
              >
                <PhoneIcon size={24} />
              </motion.a>
              <motion.a
                target="_blank" // Abre em uma nova aba
                rel="noopener noreferrer" // Segurança ao abrir links externos
                href="mailto:marcaoc82@gmail.com" // Corrigido para o esquema de e-mail
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="hover:text-blue-400"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-2">Siga nossas redes:</h3>
            <div className="flex gap-4">
              <motion.a
                href="#"
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="hover:text-pink-400"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="hover:text-blue-400"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                variants={iconAnimation}
                initial="initial"
                whileHover="hover"
                className="hover:text-red-400"
              >
                <Youtube size={24} />
              </motion.a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold mb-2">Horário de atendimento:</h3>
            <p className="text-sm">
              Segunda à Sexta das
              <br />
              8h às 17h30
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs mt-6 text-gray-300">
          <p>
            © {new Date().getFullYear()} - All Rights Reserved. MTECh. Sistemas
            Libelius -
            <a href="#" className="hover:text-white">
              {" "}
              Política de Privacidade
            </a>{" "}
            -
            <a href="#" className="hover:text-white">
              {" "}
              Termos de uso
            </a>{" "}
            -
            <a href="#" className="hover:text-white">
              {" "}
              Contrato
            </a>{" "}
            -
            <a href="#" className="hover:text-white">
              {" "}
              Regulamentos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
