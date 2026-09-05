import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 *  Esta funcion crea la aplicacíon en el  div enviado
 * @param {HTMLDivElement} element
 */

export const PokemonApp = async (element) => {
  let pokemonId = 1;

  document.title = "Pokemon App";
  document.title = "Andy Yamarte";

  const titleElement = document.querySelector("#app-litle");
  const title2Element = document.querySelector("#minombre");

  titleElement && (titleElement.innerHTML = "Pokemon App");
  titleElement.innerHTML = "Pokemon App";
  title2Element && (title2Element.innerHTML = "Andy Yamarte");
  title2Element.innerHTML = "Andy Yamarte";

  console.log("Hola Mundo");
  console.log(element);
  //! Crear los elementos html
  const loadingParagraph = document.createElement("p");
  const pokemonImage = document.createElement("img");
  const nextBtn = document.createElement("button");
  const prevBtn = document.createElement("button");

  //! Configurtaciones del elemento html
  loadingParagraph.textContent = "Cargando...";
  nextBtn.textContent = "Siguiente";
  prevBtn.textContent = "Anterior";
  element.appendChild(loadingParagraph);
  element.appendChild(pokemonImage);
  element.appendChild(nextBtn);
  element.appendChild(prevBtn);

  //! Listeners de los botones
  nextBtn.addEventListener("click", async () => {
    loadingParagraph.textContent = "Cargando siguiente pokemon...";
    pokemonId++;
    renderPokemon(await getPokemonById(pokemonId));
  });
  prevBtn.addEventListener("click", async () => {
    if (pokemonId === 1) return;
    loadingParagraph.textContent = "Cargando siguiente pokemon...";
    pokemonId--;
    renderPokemon(await getPokemonById(pokemonId));
  });
  //!Renderizar el pokemon
  const renderPokemon = (pokemon) => {
    pokemonImage.src = pokemon.image;
    loadingParagraph.textContent = `Pokemon #${pokemon.id} ${pokemon.name}`;
  };

  //! Hacer la peticion inicial

  renderPokemon(await getPokemonById(pokemonId));
};
