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
      </div>
    </section>
  );
};

export default Hero;
