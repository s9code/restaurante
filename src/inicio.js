import logoSakai from "./img/sakai-logo.png";

// Construye el contenido de la pestaña Inicio y lo añade al contenedor compartido.
export function inicio() {
    const contenido = document.querySelector("#content");

    const cabecera = document.createElement("h1");
    const descripRestaurante = document.createElement("p");
    const imagen = document.createElement("img");

    contenido.append(imagen, cabecera, descripRestaurante);

    imagen.src = logoSakai;
    imagen.alt = "Logotipo del Restaurante Sakai";

    cabecera.textContent = "Restaurante Sakai";

    descripRestaurante.textContent = "Sakai es un restaurante japonés acogedor que ofrece sushi fresco y platos tradicionales en el centro de la ciudad.";
}