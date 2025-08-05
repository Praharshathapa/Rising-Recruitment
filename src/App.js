import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import RecruitingCountries from "./components/RecruitingCountries";
import MessagesSlider from "./components/message";
import About from "./components/About"; 
import Contact from "./components/contact"; 

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;