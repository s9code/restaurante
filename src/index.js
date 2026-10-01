import { inicio } from "./inicio.js";
import { menu } from "./menu.js";

const btnInicio = document.querySelector("#btnInicio");
const btnMenu = document.querySelector("#btnMenu");
const contenido = document.querySelector("#content");

btnInicio.addEventListener("click", () => {
    contenido.textContent = "";
    // Muestra Inicio al cargar la aplicación.
    inicio();
    
});

btnMenu.addEventListener("click", () => {
    contenido.textContent = "";
    // Muestra Menu al cargar la aplicación.
    menu();
    
});

// vista inicial al cargar la página
inicio();
