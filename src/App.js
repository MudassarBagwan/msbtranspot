import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Services from "./components/Services";
import Trucks from "./components/Trucks";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Trucks/>
      <Aboutus/>
      <Footer/>
    </>
  );
}

export default App;
