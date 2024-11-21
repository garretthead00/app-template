import { getPokemon, getPokemonWithKey } from "./poke-api";

export const fetchPokemon = async (key) => {
  if (!key || key === "") return await getPokemon();
  
  const pokemonRes = await getPokemonWithKey(key);
  return [pokemonRes];
};
