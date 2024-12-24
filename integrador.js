//1) Creamos un array de objetos para almacenar informacion de 10 libros y otro para almacenar informacion de usuarios.

const prompt=require("prompt-sync")();

let libro1 = {
    id: 7585,
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    anio: 2008,
    genero: "Ficcion",
    disponible: true
};

let libro2 = {
    id: 2233,
    titulo: "Los juegos del hambre en llamas",
    autor: "Suzanne Collins",
    anio: 2009,
    genero: "Ficcion",
    disponible: false
};

let libro3 = {
    id: 3333,
    titulo: "Cumbres Borrascosas",
    autor: "Emily Bronte",
    anio: 1992,
    genero: "Novela",
    disponible: false
};

let libro4 = {
    id: 1234,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    anio: 1976,
    genero: "Ciencia Ficcion",
    disponible: true
};

let libro5 ={
    id: 7777,
    titulo: "Mas alla del invierno",
    autor: "Isabel Allende",
    anio: 2007,
    genero: "Novela",
    disponible: true
}

let libro6={
    id: 2222,
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J. K. Rowling",
    anio: 1997,
    genero: "Ficcion",
    disponible: false
}

let libro7 = {
    id: 5234,
    titulo: "Los juegos del hambre Sinsajo",
    autor: "Suzanne Collins",
    anio: 2010,
    genero: "Ficcion",
    disponible: false
};

let libro8 = {
    id: 4545,
    titulo: "Las venas abiertas de America latina",
    autor: "Eduardo Galeano",
    anio: 2010,
    genero: "Reportaje",
    disponible: true
};

let libro9 = {
    id: 2525,
    titulo: "El asesinato de Roger Ackroyd",
    autor: "Agatha Christie",
    anio: 1926,
    genero: "Ficcion",
    disponible: false
};

let libro10 = {
    id: 8585,
    titulo: "Las Olas",
    autor: "Virginia Woolf",
    anio: 2013,
    genero: "Novela",
    disponible: false
};



let libros = [libro1, libro2, libro3,libro4, libro5, libro6,libro7, libro8, libro9, libro10];

//1)b. Creamos un array de objetos para almacenar informacion de 5 usuarios.

let usuario1 ={
    id: 5656,
    nombre: "Pablo Gimenez",
    email: "pabloG@gmail.com",
    librosPrestados: [5234, 8585]
}

let usuario2={
    id:6662,
    nombre: "Analia Perez",
    email: "AnaP@gmail.com",
    librosPrestados: [1234, 7777]
}

let usuario3={
    id:1515,
    nombre: "Pedro Juarez",
    email: "pedroJuarezG@gmail.com",
    librosPrestados: [2222, 8585]
}

let usuario4={
    id:9494,
    nombre: "Belen Torres",
    email: "belTorres@gmail.com",
    librosPrestados: [4545]
}

let usuario5={
    id:6363,
    nombre: "Tamara Frank",
    email: "tamiFrank@gmail.com",
    librosPrestados: [2233,2525]
}

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];

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

//3) Gestión de Usuarios
//a.Implementamos una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

let nombre = prompt("Ingrese su nombre ");
let email = prompt("ingrese su email: ")
function registrarUsuario(nombre, email){
    let usu = {
        id : 0,
        nombre,
        email,
        librosPrestados: []
    }
    usuarios.push(usu);
}

registrarUsuario(nombre, email);

//b. Implementamos una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

let mostrarTodosLosUsuarios= usuarios => console.log(usuarios);

//mostrarTodosLosUsuarios(usuarios);

//c. Creamos la función buscarUsuario(email) que devuelva la información de un usuario dado su email.
let existeUsuario = prompt ("Ingrese el email del usuaria a buscar: ");
function buscarUsuario(email){   
    for (let i = 0; i < usuarios.length; i++) { 
        if (usuarios[i].email.toLowerCase() === email.toLowerCase()){ 
            console.log("el usuaria se ha encontrado: id: "+ usuarios[i].id+"- nombre: "+usuarios[i].nombre+"- email: "+usuarios[i].email+"- libros prestados: "+usuarios[i].librosPrestados);
        }
    }console.log("El usuario no se ha encontrado");
}

buscarUsuario(existeUsuario)

//d. Implementamos la función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email) {
    let indice = -1;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre && usuarios[i].email === email) {
            indice = i;
            break;
        }
    }
    if (indice !== -1) {
        usuarios.splice(indice, 1);  // Elimina el usuario en el índice encontrado
        return true;
    } else {
        return false;
    }
}

let nombreABorrar = prompt("Ingrese el nombre del usuario a borrar: ");
let emailABorrar = prompt("Ingrese el email del usuario a borrar: ");

// if (borrarUsuario(nombreABorrar, emailABorrar)) {
//     console.log("Usuario borrado exitosamente.");
// } else {
//     console.log("Usuario no encontrado.");
// }

//console.log("Lista de usuarios actualizada:");
//console.log(usuarios);