import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import RecruitingCountries from "./components/RecruitingCountries";
import MessagesSlider from "./components/message";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <RecruitingCountries />
      <MessagesSlider />
      <Footer />
    </div>
  );
}

export default App;
