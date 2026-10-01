import { inicio } from "./inicio.js";
import { menu } from "./menu.js";
import { contacto } from "./contacto.js";

const btnInicio = document.querySelector("#btnInicio");
const btnMenu = document.querySelector("#btnMenu");
const btnContacto = document.querySelector("#btnContacto");
const contenido = document.querySelector("#content");

btnInicio.addEventListener("click", () => {
    contenido.textContent = "";
    // Muestra la página Incio al pulsar btnInicio
    inicio();
    
});

btnMenu.addEventListener("click", () => {
    contenido.textContent = "";
    // Muestra la página Menu al pulsar btnMenu
    menu();
    
});

btnContacto.addEventListener("click", () => {
    contenido.textContent = "";
    contacto();
});

// vista inicial al cargar la página
inicio();
