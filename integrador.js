//1) Creamos un array de objetos para almacenar informacion de 10 libros
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
};

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
    disponible: false
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
    titulo: " Las Olas ",
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
};

let usuario2={
    id:6662,
    nombre: "Analia Perez",
    email: "AnaP@gmail.com",
    librosPrestados: [1234, 7777]
};

let usuario3={
    id:1515,
    nombre: "Pedro Juarez",
    email: "pedroJuarezG@gmail.com",
    librosPrestados: [2222, 8585]
};

let usuario4={
    id:9494,
    nombre: "Belen Torres",
    email: "belTorres@gmail.com",
    librosPrestados: [4545]
};

let usuario5={
    id:6363,
    nombre: "Tamara Frank",
    email: "tamiFrank@gmail.com",
    librosPrestados: [2233,2525]
};

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];

//2) a.Implementamos una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

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

//b.Creamos una función buscarLibro(libros, busqueda) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.

function buscarLibro(libros, busqueda) { 
    for (let i = 0; i < libros.length; i++) { 
        if (libros[i].titulo.toLowerCase() === busqueda.toLowerCase()){ 
            return i;
        }
    }return -1;
}

//c. La siguiente es una función ordenarLibros(libros) que ordena los libros por título 
// utilizando el algoritmo de ordenamiento burbuja y luego muestra los libros ordenados en la consola.

function ordenarLibros(libros){
    //orden Bubble sort
    for (let i=0; i< libros.length; i++){
        for (let j=0; j< libros.length-1; j++){
            if (libros[j].titulo.toLowerCase() > libros[j+1].titulo.toLowerCase()){
                let temp = libros[j];
                libros[j]=libros[j+1];
                libros[j+1]=temp;
            }
        }
    }
}

//d. Desarrollamos una función borrarLibro(id) que alimina el libro que se le pase por parámetro.

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

//3) Gestión de Usuarios
//a.Implementamos una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

function registrarUsuario(nombre, email){
    let usu = {
        id : 0,
        nombre,
        email,
        librosPrestados: []
    }
    usuarios.push(usu);
}

//b. Implementamos una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

let mostrarTodosLosUsuarios= usuarios => console.log(usuarios);

//c. Creamos la función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email) { 
    return usuarios.find(usuario => usuario.email === email);
}

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

//4) Sistema de Préstamos
//a. Desarrollar una función prestarLibro(idLibro, idUsuario)
//que marca un libro como no disponible y lo agrega al arreglo de libros prestados del usuario.

function prestarLibro(idLibro, idUsuario) { 
    let libroEncontrado = false; 
    let usuarioEncontrado = false; 
    let libroIndex; 
    let usuarioIndex; 
    for (let i = 0; i < libros.length; i++) { 
        if (libros[i].id == idLibro && libros[i].disponible) { 
            libroEncontrado = true; 
            libroIndex = i; 
            break; 
        } 
    } 
    
    if (libroEncontrado) { 
        for (let j = 0; j < usuarios.length; j++) { 
            if (usuarios[j].id == idUsuario) { 
                usuarioEncontrado = true; 
                usuarioIndex = j; 
                break; 
            } 
        } 
    } 
    
    if (libroEncontrado && usuarioEncontrado) { 
        libros[libroIndex].disponible = false; 
        usuarios[usuarioIndex].librosPrestados.push(idLibro); 
        console.log("Libro prestado exitosamente.");
    } else { 
        console.log("No se pudo prestar el libro."); 
    } 
} 

//b.Implementamos una función devolverLibro(idLibro, idUsuario) 
//que marca un libro como disponible y lo elimina del arreglo de libros prestados del usuario.

function devolverLibro(idLibro, idUsuario) { 
    let libroEncontrado = false; 
    let usuarioEncontrado = false; 
    let libroIndex; 
    let usuarioIndex; 
    for (let i = 0; i < libros.length; i++) { 
        if (libros[i].id == idLibro && !libros[i].disponible) { 
            libroEncontrado = true; 
            libroIndex = i; 
            break; 
        } 
    } 
    
    if (libroEncontrado) { 
        for (let j = 0; j < usuarios.length; j++) { 
            if (usuarios[j].id == idUsuario) { 
                usuarioEncontrado = true; 
                usuarioIndex = j; 
                break; 
            } 
        } 
    } 
    
    if (libroEncontrado && usuarioEncontrado) { 
        libros[libroIndex].disponible = true; 
        let libroPrestadoIndex = usuarios[usuarioIndex].librosPrestados.indexOf(idLibro); 
        if (libroPrestadoIndex !== -1) { 
            usuarios[usuarioIndex].librosPrestados.splice(libroPrestadoIndex, 1); 
            console.log("Libro devuelto exitosamente."); 
        } else { 
            console.log("El usuario no tiene este libro prestado."); 
        } 
    } else { 
        console.log("No se pudo reingresar el libro.");
    } 
}


//5) creamos una función generarReporteLibros()

function generarReporteLibros(libros){
    //Cantidad total de libros.
    let totalLibros = libros.length;
    console.log("Cantidad total de libros " +totalLibros);

    //Cantidad de libros prestados.
    let cantLibrosPrestados = libros.filter(libros => libros.disponible).length;
    console.log("Cantidad de libros prestados " +cantLibrosPrestados);

    //Cantidad de libros por género.
    const librosPorGenero = libros.reduce((generos, libro) => {
        generos[libro.genero] = (generos[libro.genero] || 0) + 1;
        return generos;
    }, {});
    console.log("Cantidad de libros por género: ")
    console.log(librosPorGenero);

    //Libro más nuevo
    let masNuevo = libros.reduce((nuevo, libro) => {
        return (libro.anio > nuevo.anio) ? libro : nuevo;
    }, libros[0]);
    console.log("libro mas nuevo: ")
    console.log(masNuevo);

    //Libro más antiguo
    let masAntiguo = libros.reduce((viejo, libro) => {
        return (libro.anio < viejo.anio) ? libro : viejo;
    }, libros[0]);
    console.log("libro mas antiguo: ")
    console.log(masAntiguo);
    
    
}

//6. Identificación Avanzada de libros
//a.Implementamos una función librosConPalabrasEnTitulo() 
// que identifica y muestra todos los libros cuyo título contiene más de una palabra 
// (no títulos que contengan números ni otros caracteres).
//b.La función devuelve un array con los títulos de esos libros y lo muestra en la consola.

function librosConPalabrasEnTitulo() { 
    let librosFiltrados = libros.filter(libro => { 
        let regex = /^[a-zA-Z\s]+$/; 
        return regex.test(libro.titulo) && libro.titulo.trim().split(/\s+/).length > 1; 
    }); 
    let titulos = librosFiltrados.map(libro => libro.titulo); 
    return titulos; 
} 

//7) Cálculos Estadísticos
//a.Desarrollamos una función calcularEstadisticas()
function calcularEstadisticas() { 
    //Promedio de años de publicación de los libros.
    let totalAnios = libros.reduce((sum, libro) => sum + libro.anio, 0);
    let promedioAnios = totalAnios / libros.length;

    //Año de publicación más frecuente.
    let frecuencias = {};
    libros.forEach(libro => {
    if (frecuencias[libro.anio]) {
        frecuencias[libro.anio]++;
    } else {
        frecuencias[libro.anio] = 1;
    }
});
    //Object.keys devuelve un arreglo con los nombres de las propiedades de un objeto
    let anioFrecuente = Object.keys(frecuencias).reduce((a, b) => frecuencias[a] > frecuencias[b] ? a : b);

    //Diferencia en años entre el libro más antiguo y el más nuevo.
    let anioMasAntiguo = Math.min(...libros.map(libro => libro.anio));
    let anioMasNuevo = Math.max(...libros.map(libro => libro.anio));
    let diferenciaAnios = anioMasNuevo - anioMasAntiguo;

    console.log(`Promedio de años de publicación: ${promedioAnios.toFixed(2)}`); 
    console.log(`Año de publicación más frecuente: ${anioFrecuente}`); 
    console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios}`)
}


//8. Manejo de Cadenas
//a. Creamos una función normalizarDatos() que utiliza métodos de strings para:
function normalizarDatos(){
    //Convertir todos los títulos a mayúsculas.
    let todoAMayusculas = libros.forEach(libro => { libro.titulo = libro.titulo.toUpperCase()
    });    
    console.log(todoAMayusculas);
    
    //Eliminar espacios en blanco al inicio y final de los nombres de autores.
    let eliminarEspacios = libros.forEach(libro => { libro.autor = libro.autor.trim();         
    });
    console.log(eliminarEspacios);
    console.log(libros);

    //Formatear los emails de los usuarios a minúsculas.
    function todoAMinusculas(usuarios) { 
        usuarios.forEach(usuarios => { 
            usuarios.email = usuarios.email.toLowerCase(); 
        });
    }
    console.log(todoAMinusculas(usuarios));
    console.log(usuarios);

}

//9) Interfaz de Usuario por Consola
//a. Implementamos una función menuPrincipal() que muestra un menú de opciones al usuario y 
//permite interactuar con el sistema.
//b.El menú incluye opciones para todas las funcionalidades anteriores.

function menuPrincipal(){
    let idLibro;
    let idUsuario;
    console.log("TAREAS DISPONIBLES");
    console.log("1.Agregar un libro");
    console.log("2.Buscar un libro (por su titulo)");
    console.log("3.Ordenar libros");
    console.log("4.Borrar un libro (necesita id del libro)");
    console.log("5.Registrar usuario");
    console.log("6.Ver todos los usuarios");
    console.log("7.Buscar usuario (por su email)");
    console.log("8.Borrar usuario");
    console.log("9.Prestar libro");
    console.log("10.Devolver libro");
    console.log("11.Ver reporte de libros");
    console.log("12.Mostrar todos los libros cuyo título contiene más de una palabra (no contienen números ni otros caracteres).");
    console.log("13.Ver estadisticas de libros");
    console.log("14.Normalizar los datos alfanumericos");
    let opcion = prompt("Que tarea desea realizar? ");  

    switch (opcion){
        case "1":
            let idaAgregar = prompt("ingrese el id del libro que desea agregar: ");
            let libroaAgregar = prompt("ingrese el titulo del libro que desea agregar: ");
            let autoraAgregar = prompt("ingrese el nombre de autor del libro que desea agregar: ");
            let anioaAgregar = prompt("ingrese el año del libro que desea agregar: ");
            let generoaAgregar = prompt("ingrese el genero del libro que desea agregar: ");
            console.log(agregarLibro(idaAgregar,libroaAgregar, autoraAgregar, anioaAgregar, generoaAgregar));
            console.log(libros);
            break;
        case "2":
            let busqueda = prompt("ingrese el titulo a buscar: ");
            let resultado = buscarLibro(libros,busqueda);

            if (resultado !== -1) { 
                console.log(`Libro encontrado en el índice: ${resultado}`); 
                console.log(`Título: ${libros[resultado].titulo}, Autor: ${libros[resultado].autor}`); 
            } else { 
                console.log('Libro no encontrado'); 
            }
            break;
        case "3":
            ordenarLibros(libros);
            console.log(libros)
            break;
        case "4":
            let idABorrar = parseInt(prompt("Ingrese el ID del libro a borrar: "));
            borrarLibro(idABorrar);
            console.log(libros);
            break;
        case"5":
            let nombre = prompt("Ingrese su nombre ");
            let email = prompt("ingrese su email: ");
            registrarUsuario(nombre, email);
            console.log(usuarios);
            break;
        case "6":
            mostrarTodosLosUsuarios(usuarios);
            break;
        case "7":
            let emailUsuario = prompt("Ingrese su email: "); 
            let usuarioEncontrado = buscarUsuario(emailUsuario); 
            if (usuarioEncontrado) { 
                console.log("Usuario encontrado:", usuarioEncontrado); 
            }else{ 
                console.log("Usuario no encontrado.");
            }
            break;
        case "8":
            let nombreABorrar = prompt("Ingrese el nombre del usuario a borrar: ");
            let emailABorrar = prompt("Ingrese el email del usuario a borrar: ");

            if (borrarUsuario(nombreABorrar, emailABorrar)) {
                console.log("Usuario borrado exitosamente.");
            } else {
                console.log("Usuario no encontrado.");
            }
            console.log("Lista de usuarios actualizada:");
            console.log(usuarios);
            break;
        case "9":
            idLibro = prompt("Ingrese el id del libro que desea: ");
            idUsuario = prompt ("Ingrese su id de usuario: ");
            prestarLibro(idLibro, idUsuario); 
            console.log("Lista de libros actualizada:");
            console.log(libros);
            console.log("Lista de usuarios actualizada:");
            console.log(usuarios);            
            break;
        case "10":
            idLibro = parseInt(prompt("Ingrese el id del libro que desea devolver: "));
            idUsuario = parseInt(prompt ("Ingrese su id de usuario: "));
            devolverLibro(idLibro,idUsuario);
            console.log("Lista de libros actualizada:");
            console.log(libros);
            console.log("Lista de usuarios actualizada:");
            console.log(usuarios);
            break;
        case "11":
            console.log(generarReporteLibros(libros));
            break;
        case "12":
            console.log(librosConPalabrasEnTitulo());
            break;
        case "13":
            calcularEstadisticas();
            break;
        case "14":
            console.log(normalizarDatos());
        default:
            console.log("Por favor ingrese una opcion valida");
    }
}

//Empleamos un ciclo while para que el usuario realize las acciones que crea necesarias, 
//es decir, para que la funcion menuPrincipal() pueda ejecutarse mas de una vez antes de acabar el programa (si se cree necesario).
console.log("BIENVENIDO");
let continuar = prompt("¿Desea realizar una acción? (si/no): ") === "si";

while (continuar) {
    menuPrincipal();
    continuar = prompt("¿Desea realizar otra acción? (si/no): ") === "si";
}