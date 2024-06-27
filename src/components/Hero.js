import React from "react";
import hero from "../images/hero.png";

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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Creating Productive Workforce
        </h1>
        <p className="text-xl md:text-2xl">
          Your trusted partner in manpower recruitment and foreign employment
        </p>

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
        <button className="mt-8 px-6 py-3 bg-white text-gray-800 text-lg font-semibold rounded-md hover:bg-gray-200 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
