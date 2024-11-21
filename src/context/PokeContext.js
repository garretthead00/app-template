import React, { createContext, useEffect, useState } from "react";

export const PokeContext = createContext({});

export const PokeProvider = ({ children }) => {
  const [queryValue, setQueryValue] = useState("");
  const [pokemonResults, setPokemonResults] = useState(null);
  const [savedPokemon, setSavedPokemon] = useState(null)
  const [starterPokemon, setStarterPokemon] = useState(null)

  useEffect(() => {
    console.log('Updated queryValue in PokeProvider!!!', queryValue)
  }, [queryValue])

  return (
    <PokeContext.Provider
      value={{
        queryValue,
        setQueryValue,
        pokemonResults,
        setPokemonResults,
        savedPokemon,
        setSavedPokemon,
        starterPokemon,
        setStarterPokemon
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
