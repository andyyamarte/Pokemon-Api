const pokemonCache = new Map();

/**
 * Fetch Pokemon information from PokeAPI
 * @param {number} id
 * @return { Promise<object> } Pokemon information
 */
export const getPokemonById = async (id) => {
  if (pokemonCache.has(id)) {
    console.log("Servicio de cache");
    return pokemonCache.get(id);
  }
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  //   console.log({ data });

  const pokemonData = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
  };
  pokemonCache.set(id, pokemonData);

  return pokemonData;

  //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     .then((response) => {
  //       //   console.log({ response });
  //       //   throw new Error("Pokemon no existe");
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log({ data });
  //     })
  //     .catch((error) => {
  //       //   console.error(error);
  //     });

  //   return {};
};
