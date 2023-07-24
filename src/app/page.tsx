'use client'
import React from "react";
import Home from "./Components/Home";
import InfiniteText from "./Components/InfiniteText";
import HomeBottom from "./Components/HomeBottom";
interface HomeProps { }

const HomeContainer: React.FC<HomeProps> = () => {
  return (
    <>
      <Home />
      <InfiniteText />
      <HomeBottom />
    </>
  );
};

export default HomeContainer;