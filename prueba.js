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
    autor: " Virginia Woolf ",
    anio: 2013,
    genero: "Novela",
    disponible: true
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

function normalizarDatos(){
    //Convertir todos los títulos a mayúsculas.
    let todoAMayusculas = libros.forEach(libro => { libro.titulo = libro.titulo.toUpperCase()
    });    
    //console.log(todoAMayusculas);
    //console.log(libros)

    //Eliminar espacios en blanco al inicio y final de los nombres de autores.
    let eliminarEspacios = libros.forEach(libro => { libro.autor = libro.autor.trim();         
    }); return libros;
    //console.log(eliminarEspacios); 

    //Formatear los emails de los usuarios a minúsculas.
    function todoAMinusculas(usuarios) { 
        usuarios.forEach(usuarios => { 
            usuarios.email = usuarios.email.toLowerCase(); 
        }); return usuarios; 
    }

    console.log(todoAMinusculas(usuarios))

}

console.log(normalizarDatos());