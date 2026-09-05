import { PokemonApp } from "./pokemon/pokemon-app";
import "./style.css";
import { UsersApp } from "./users/users-app";

document.querySelector("#app").innerHTML = `
<main>
<h1 id="app-litle">Hola Mundo</h1>
<h4 id="minombre">Andy Yamarte</h4>
<section class="information-card"></section>
</main>
`;

PokemonApp(document.querySelector(".information-card"));

UsersApp(Element);
