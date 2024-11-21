
import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

import HomeController from "../features/home/HomeController";

export const HomePage = () => {
  const { queryValue } = useContext(PokeContext);

  return (
    <div className="home-container">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <HomeController />
    </div>
  );
};
