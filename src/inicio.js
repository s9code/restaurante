// Construye el contenido de la pestaña Inicio y lo añade al contenedor compartido.
export function inicio() {
    const contenido = document.querySelector("#content");

    const cabecera = document.createElement("h1");
    const descripRestaurante = document.createElement("p");

    contenido.appendChild(cabecera);
    contenido.appendChild(descripRestaurante);

    cabecera.textContent = "Restaurante Sakai";

    descripRestaurante.textContent = "Sakai es un restaurante japonés acogedor que ofrece sushi fresco y platos tradicionales en el centro de la ciudad.";
}