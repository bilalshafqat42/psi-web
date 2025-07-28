import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import PropertySlider from "../components/PropertySlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchForm />
      <PropertySlider />
    </>
  );
};

export default Home;
