import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Cards />
      </div>
    </>
  );
}
