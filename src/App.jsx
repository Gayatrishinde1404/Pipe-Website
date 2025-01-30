import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import './styles/global.css';
import About from "./components/About";
import Poster from "./components/Poster";


const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Products />
      <Poster />
      <Footer />
    </div>
  );
};

export default App;
