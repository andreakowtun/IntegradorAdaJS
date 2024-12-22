//1) Creamos un array de objetos para almacenar informacion de libros y otro para almacenar informacion de usuarios.

const prompt=require("prompt-sync")();

let libro1 = {
    id: 1234,
    titulo: "Los juegos del hambre",
    autor: "fulana",
    anio: 2000,
    genero: "ficcion",
    disponible: true
};

let libro2 = {
    id: 5234,
    titulo: "Los juegos del hambre en llamas",
    autor: "fulana",
    anio: 2005,
    genero: "ficcion",
    disponible: false
};

let libros = [libro1, libro2];

//2) a.Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

function agregarLibro(id, titulo, autor, anio, genero){
    let libro = {
        id,
        titulo,
        autor,
        anio,
        genero
    };
    libros.push(libro);
}

//console.log(agregarLibro(5555,"el raton perz","fulano",1900,"ficcion"));
//console.log(libros);

//b.Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, 
// autor o género utilizando el algoritmo de búsqueda lineal.

let busqueda = prompt("ingrese el titulo a buscar ");
function busquedaLineal(libros, busqueda) { 
    for (let i = 0; i < libros.length; i++) { 
        if (libros[i] === busqueda) { 
            return i; 
        } 
    } return -1;
}

console.log(busquedaLineal(libros,busqueda));