//1) Creamos un array de objetos para almacenar informacion de libros y otro para almacenar informacion de usuarios.

const prompt=require("prompt-sync")();

let libro1 = {
    id: 4444,
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

let libro3 = {
    id: 3333,
    titulo: "Mas alla del invierno",
    autor: "fulana",
    anio: 2000,
    genero: "ficcion",
    disponible: true
};

let libro4 = {
    id: 1234,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    anio: 2000,
    genero: "ficcion",
    disponible: true
};

let libros = [libro1, libro2, libro3,libro4];

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

//let busqueda = prompt("ingrese el titulo a buscar: ");
function buscarLibro(libros, busqueda) { 
    for (let i = 0; i < libros.length; i++) { 
        if (libros[i].titulo.toLowerCase() === busqueda.toLowerCase()){ 
            return i;
        }
    }return -1;
}

//let resultado = buscarLibro(libros,busqueda);

// if (resultado !== -1) { 
//     console.log(`Libro encontrado en el índice: ${resultado}`); 
//     console.log(`Título: ${libros[resultado].titulo}, Autor: ${libros[resultado].autor}`); 
// } else { 
//     console.log('Libro no encontrado'); 
// }

//c. Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año 
// utilizando el algoritmo de ordenamiento burbuja y luego muestre los libros ordenados en la consola.

function ordenarLibros(libros){
    //orden Bubble sort
    for (let i=0; i< libros.length; i++){
        for (let j=0; j< libros.length-1; j++){
            if (libros[j].titulo.toLowerCase() > libros[j+1].titulo.toLowerCase()){
                let temp = libros[j];
                libros[j]=libros[j+1];
                libros[j+1]=temp
            }
        }
    }
}

//let librosOrdenados = ordenarLibros(libros);
//console.log(libros)

//d. Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

let idABorrar = parseInt(prompt("Ingrese el ID del libro a borrar: "));

function borrarLibro(id) {
    let indice = -1;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            indice = i;
            break;
        }
    }
    if (indice !== -1) {
        libros.splice(indice, 1);  // Elimina el libro en el índice encontrado
        return true;
    } else {
        return false;
    }
}


//borrarLibro(idABorrar);
//console.log(libros);

