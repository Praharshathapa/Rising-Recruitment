import React from "react";
import hero from "../images/hero.png";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative text-center p-8 text-white h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-75"></div>

      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4">
          Creating Productive Workforce
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          className="text-xl md:text-2xl">
          Your trusted partner in manpower recruitment and foreign employment
        </motion.p>

        <div className="mt-6 p-4 bg-black bg-opacity-50 rounded-md flex justify-center items-center">
          <span className="flex-1 text-lg md:text-xl font-semibold">
            🌟 100+ Satisfied Clients
          </span>
          <span className="flex-1 text-lg md:text-xl font-semibold border-l border-gray-400 pl-4">
            🏆 Award-Winning Services
          </span>
          <span className="flex-1 text-lg md:text-xl font-semibold border-l border-gray-400 pl-4">
            🌍 Global Reach
          </span>
          <span className="flex-1 text-lg md:text-xl font-semibold border-l border-gray-400 pl-4">
            📈 10+ Years of Excellence
          </span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }} 
          transition={{ duration: 0.3 }} 
          className="mt-8 px-6 py-3 bg-white text-gray-800 text-lg font-semibold rounded-md hover:bg-gray-200 transition duration-300">
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;