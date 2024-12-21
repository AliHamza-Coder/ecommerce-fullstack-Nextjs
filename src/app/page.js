import React from "react";
import Hero from "./Components/Hero";
import MainFurnitureSec from "./Components/MainSection2";
import "./globals.css";
import OurProdSection from "./Components/OurProdSection";

const Home = () => {
  return (
    <>
      <Hero />
      <main class="container">
        <OurProdSection/>
        <MainFurnitureSec />
      </main>
    </>
  );
};

export default Home;
