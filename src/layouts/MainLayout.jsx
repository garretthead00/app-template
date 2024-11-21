import React from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "../features/nav-bar";

import { PokeProvider } from "../context/PokeContext";

const MainLayout = () => {
  return (
    <div className="flex justify-center m-0 h-svh min-w-1/2 w-svw bg-red-400">
      <div className="fixed bottom-2">
        <NavBar />
      </div>
     
      <div className="main-container m-4 p-4 border rounded-lg w-full bg-stone-100">
        <PokeProvider>
          <Outlet />
        </PokeProvider>
      </div>
    </div>
  );
};

export default MainLayout;
