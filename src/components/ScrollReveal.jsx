import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollReveal = ({ children, width = "100%", direction = "left" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: 0.1,
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
