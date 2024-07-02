import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import RecruitingCountries from "./components/RecruitingCountries";
import MessagesSlider from "./components/message";
import About from "./components/About"; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <RecruitingCountries />
            <MessagesSlider /> 
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;