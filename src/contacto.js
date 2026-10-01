export function contacto() {
    const titulo = document.createElement("h1");
    const direccion = document.createElement("p");
    const correo = document.createElement("a");
    const horario = document.createElement("p");

    const contenido = document.querySelector("#content");

    contenido.append(titulo, direccion, correo, horario);

    titulo.textContent = "Contacto";
    direccion.textContent = "Dirección: Calle del Cerezo, 12, Madrid";
    correo.textContent = "reservas@sakai.example";
    correo.href = "mailto:reservas@sakai.example";
    horario.textContent = "Martes a domingo, de 13:00 a 16:00 y de 20:00 a 23:00";

}