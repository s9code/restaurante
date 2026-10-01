const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Facilita la depuración durante el desarrollo.
    mode: "development",
    // Punto de partida desde el que Webpack sigue las importaciones.
    entry: "./src/index.js",

    // Guarda el JavaScript compilado en dist/main.js; path debe ser una ruta absoluta.
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        },

    // Genera el HTML desde la plantilla e inserta la referencia al JavaScript compilado.
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    module: {
    rules: [
            {
                // Aplica esta regla a los archivos CSS importados por la aplicación.
                test: /\.css$/i,
                // Se aplican de derecha a izquierda: procesan el CSS y lo insertan en la página.
                use: ["style-loader", "css-loader"],
            },
            {
                // Genera un archivo de imagen y permite importar su URL.
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },

    

};

