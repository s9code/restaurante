// Construye la carta y la añade al contenedor compartido de las pestañas.
export function menu() {

    const contenido = document.querySelector("#content");


    const carta = document.createElement("h1");

    carta.textContent = "Nuestra Carta";

    contenido.appendChild(carta);


    // Los datos de la carta se mantienen separados de la creación de elementos.
    const platos = [
        {
            nombre: "Edamame",
            descripcion: "Vainas de soja al vapor con sal marina.",
            precio : "4,50 €"
        },

        {
            nombre: "Gyozas de verduras",
            descripcion: "Empanadillas japonesas doradas a la plancha.",
            precio : "6,00 €"
        },

        {
            nombre: "Maki de salmón",
            descripcion: "Ocho piezas de arroz, alga nori y salmón fresco.",
            precio : "9,50 €"
        },

        {
            nombre: "Ramen de pollo",
            descripcion: "Sopa de fideos con pollo, huevo y verduras.",
            precio : "12,00 €"
        },

    ];
    
    // Cada vuelta crea una estructura nueva para un plato usando sus datos.
    platos.forEach((plato) => {

        const contenedor = document.createElement("div");

        const nombre = document.createElement("h2");

        const descrip = document.createElement("p");

        const precio = document.createElement("p");

        contenido.append(contenedor);
        contenedor.append(nombre, descrip, precio);
        
        nombre.textContent = plato.nombre;
        descrip.textContent = plato.descripcion;
        precio.textContent = plato.precio;

    });
}