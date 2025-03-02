import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import './styles/global.css';
import About from "./components/About";
import Poster from "./components/Poster";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Extrapipe from "./components/Extrapipe";


const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Products />
      <Extrapipe />
      <Poster />
      < WhyChooseUs />
      < Gallery />
      <Footer />
    </div>
  );
};

export default App;
