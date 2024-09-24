/* Tareas:
1) Otro HTML para agregar libros HECHO
2) Buscador de libros (on top) HECHO
3)HTML que muestre los libros de la biblioteca y sus portadas y propiedades)
4) Hacer un ordenador/filter de libros
*/

//crear un creador de "libros"
class Libro {
    constructor(
        nombre,
        autor,
        year,
        genero,
        extension,
        trama,
        imagen
    ) {
        this.nombre = nombre;
        this.autor = autor;
        this.year = year;
        this.genero = genero;
        this.extension = extension;
        this.trama = trama;
        this.imagen = imagen;
    }
}

const LaDivinaComedia = new Libro(
    "La Divina Comedia",
    "Dante Alighieri",
    1314,
    "Poesia",
    548,
    "La Divina Comedia relata el viaje de Dante por el Infierno, el Purgatorio y el Paraíso, guiado por el poeta romano Virgilio. El poema comienza con el encuentro de Virgilio con Dante, que se ha perdido en una selva y tropieza con bestias salvajes",
    "portadas/reworkdivinacomedia1.png"
);


const DonQuijote = new Libro(
    "Don Quijote",
    "Miguel de Cervantes",
    1605,
    "Novela",
    1560,
    "La novela narra las aventuras de Alonso Quijano, un viejo caballero que de tanto leer historias de caballería pierde la razón y decide convertirse en caballero andante para salir a resolver problemas e impartir justicia.",
    "portadas/reworkdonquijote1.png"
)

const ElLugar = new Libro(
    "El Lugar",
    "Mario Levrero",
    1982,
    "Novela",
    450,
    "Un hombre despierta en una habitación que no es la suya y cursa un calvario de intrascendencia, frialdad e incomunicación. No está en ningún lado o está en un mundo tan exageradamente contemporáneo que se desliza hacia el futuro, además de no registrar su existencia sino por medio del malentendido y la indiferencia",
    "portadas/reworkellugar1.png");

const Elviejo = new Libro ("El viejo y el mar","Ernest Hemingway",1952,"Novela",90,"El viejo y el mar es una novela corta de 1952 escrita por el autor estadounidense Ernest Hemingway. Escrita entre diciembre de 1950 y febrero de 1951, fue la última obra de ficción importante que Hemingway publicó durante su vida. Cuenta la historia de Santiago, un pescador anciano, y su larga lucha por pescar un marlín gigante.");

let biblioteca = [LaDivinaComedia, DonQuijote, ElLugar,Elviejo];

const boton1carousel = document.getElementById("btn_carousel1");
const boton2carousel = document.getElementById("btn_carousel2");
const boton3carousel = document.getElementById("btn_carousel3");

function mostrarInfo(libro) {
    document.getElementById('sectiongrande').innerHTML = `
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${libro.imagen}" alt="..." /></div>
            <div class="col-md-6">
              <div class="text-secondary">${libro.genero}</div>
              <h1 class="text-warning">${libro.nombre}</h1>
              <div class="text-white-50">
                <span>${libro.autor}</span>
                <span>(${libro.year})</span>
              </div>
              <p class="text-light">${libro.trama}</p>
              <button id="volverBtn" class="btn bg-primary text-white">Volver</button>
            </div>
          </div>
        </div>
      </section>`;
    document.getElementById('volverBtn').addEventListener('click', function () { window.location.href = 'index.html'; });
  }

boton1carousel.addEventListener('click',function(){
    mostrarInfo(LaDivinaComedia);
});
boton2carousel.addEventListener('click',function(){
    mostrarInfo(DonQuijote);
});
boton3carousel.addEventListener('click',function(){
    mostrarInfo(ElLugar);
});

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
      resultadoLibro.innerHTML += "<h2>Información del Libro:</h2>";      for (let propiedad in biblioteca[i]) {
        resultadoLibro.innerHTML += `<p><strong>${propiedad}:</strong> ${biblioteca[i][propiedad]}</p>`;
        resultContainer.style.display = 'block';
      }
      return;
    }
  }
  resultadoLibro.innerHTML = "<p>No se ha encontrado el libro</p>";
}

searchInput.addEventListener('input', function(event) {
  let tituloBuscado = event.target.value;
  buscarLibroPorTitulo(tituloBuscado);
});