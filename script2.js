// Definición de la clase Libro
class Libro {
    constructor(nombre, autor, year, genero, extension, trama, imagen) {
        this.nombre = nombre;
        this.autor = autor;
        this.year = year;
        this.genero = genero;
        this.extension = extension;
        this.trama = trama;
        this.imagen = imagen;
    }
}

// Libros preexistentes en la biblioteca
const LaDivinaComedia = new Libro(
    "La Divina Comedia",
    "Dante Alighieri",
    1314,
    "Poesia",
    548,
    "La Divina Comedia relata el viaje de Dante por el Infierno, el Purgatorio y el Paraíso, guiado por el poeta romano Virgilio. El poema comienza con el encuentro de Virgilio con Dante, que se ha perdido en una selva y tropieza con bestias salvajes",
    "portadas/divinacomedia.JPG"
);

const DonQuijote = new Libro(
    "Don Quijote",
    "Miguel de Cervantes",
    1605,
    "Novela",
    1560,
    "La novela narra las aventuras de Alonso Quijano, un viejo caballero que de tanto leer historias de caballería pierde la razón y decide convertirse en caballero andante para salir a resolver problemas e impartir justicia.",
    "portadas/donquijote.JPG"
);

const ElLugar = new Libro(
    "El Lugar",
    "Mario Levrero",
    1982,
    "Novela",
    450,
    "Un hombre despierta en una habitación que no es la suya y cursa un calvario de intrascendencia, frialdad e incomunicación. No está en ningún lado o está en un mundo tan exageradamente contemporáneo que se desliza hacia el futuro, además de no registrar su existencia sino por medio del malentendido y la indiferencia",
    "portadas/el_lugar.JPG"
);

// Biblioteca inicial
let biblioteca = [LaDivinaComedia, DonQuijote, ElLugar];
const titulofield = document.getElementById("titulo");
const autorfield = document.getElementById("autor");
const anoPublicacionfield = document.getElementById("anoPublicacion");
const generofield = document.getElementById("genero");
const tramafield = document.getElementById("trama");
const botonenviar = document.getElementById("enviar");

// Función para agregar un libro a la biblioteca
function agregarlibro(e) {
    e.preventDefault();
    let titulonuevo = titulofield.value;
    let autornuevo = autorfield.value;
    let anopublicacionnuevo = anoPublicacionfield.value;
    let generonuevo = generofield.value;
    let tramanuevo = tramafield.value;

    let nuevoLibro = new Libro(titulonuevo, autornuevo, anopublicacionnuevo, generonuevo, tramanuevo);

    // Agrega el nuevo libro a la biblioteca
    biblioteca.push(nuevoLibro);

    // Limpiar los campos del formulario
    titulofield.value = '';
    autorfield.value = '';
    anoPublicacionfield.value = '';
    generofield.value = '';
    tramafield.value = '';

    console.log("Nuevo libro agregado:", nuevoLibro);
    console.log("Biblioteca actualizada:", biblioteca);
}

// Agrega el event listener al botón "Enviar"
botonenviar.addEventListener("click", agregarlibro, false);

/* HACIENDO FUNCIONAR LA SEARCHBAR */

//Hacer const para el lugar de la searchbar
const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("resultContainer");
const resultContent = document.getElementById("resultContent");


let tituloBuscado = searchInput.value;

function buscarLibroPorTitulo(tituloBuscado) {
  let resultadoLibro = document.getElementById("resultContent");
  resultadoLibro.innerHTML = ''; // Limpiar contenido anterior
    if (!tituloBuscado) {
        resultContainer.style.display = 'none';
        return;
    }
  for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].nombre.toLowerCase().includes(tituloBuscado.toLowerCase())) {
      resultadoLibro.innerHTML += "<h2 class='text-warning'>Información del Libro:</h2>";      for (let propiedad in biblioteca[i]) {
        resultadoLibro.innerHTML += `<p class='text-white'><strong>${propiedad}:</strong> ${biblioteca[i][propiedad]}</p>`;
        resultContainer.style.display = 'block';
      }
      return;
    }
  }
  resultadoLibro.innerHTML = "<p class='text-danger'>No se ha encontrado el libro</p>";
}

searchInput.addEventListener('input', function(event) {
  let tituloBuscado = event.target.value;
  buscarLibroPorTitulo(tituloBuscado);
});