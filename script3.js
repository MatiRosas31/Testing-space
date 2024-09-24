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
    "portadas/reworkdivinacomedia3.png"
);


const DonQuijote = new Libro(
    "Don Quijote",
    "Miguel de Cervantes",
    1605,
    "Novela",
    1560,
    "La novela narra las aventuras de Alonso Quijano, un viejo caballero que de tanto leer historias de caballería pierde la razón y decide convertirse en caballero andante para salir a resolver problemas e impartir justicia.",
    "portadas/reworkdonquijote3.png"
)

const ElLugar = new Libro(
    "El Lugar",
    "Mario Levrero",
    1982,
    "Novela",
    450,
    "Un hombre despierta en una habitación que no es la suya y cursa un calvario de intrascendencia, frialdad e incomunicación. No está en ningún lado o está en un mundo tan exageradamente contemporáneo que se desliza hacia el futuro, además de no registrar su existencia sino por medio del malentendido y la indiferencia",
    "portadas/reworkellugar1.png");

const Elviejo = new Libro ("El viejo y el mar","Ernest Hemingway",1952,"Novela",90,"El viejo y el mar es una novela corta de 1952 escrita por el autor estadounidense Ernest Hemingway. Escrita entre diciembre de 1950 y febrero de 1951, fue la última obra de ficción importante que Hemingway publicó durante su vida. Cuenta la historia de Santiago, un pescador anciano, y su larga lucha por pescar un marlín gigante.","portadas/reworkelviejo2.png");

let biblioteca = [LaDivinaComedia, DonQuijote, ElLugar,Elviejo];


const lugarlibros = document.querySelector("#lugarlibros");

const reorderalphabetically = () => {
    biblioteca.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });

    // Imprimir la biblioteca ordenada
    console.log(biblioteca);
    crearcajalibro();
};


const reorderfecha = () => {
    biblioteca.sort((a, b) => {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        return 0;
    });

    // Imprimir la biblioteca ordenada
    console.log(biblioteca);
    crearcajalibro();
};




function crearcajalibro() {
    //reorderalphabetically();
    lugarlibros.innerHTML = '';  // Clear previous content
    biblioteca.forEach(function (libro, index) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card text-center bg-dark pb-2';

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const bookTitle = document.createElement('h3');
        bookTitle.className = 'text-warning';
        bookTitle.textContent = libro.nombre;

        const bookAuthor = document.createElement('h6');
        bookAuthor.className = 'text-white-50';
        bookAuthor.textContent = libro.autor;

        const bookYear = document.createElement('h6');
        bookYear.className = 'text-secondary';
        bookYear.textContent = `(${libro.year})`;

        const bookTrama = document.createElement('p');
        bookTrama.className = 'text-light';
        bookTrama.textContent = libro.trama;

        const infoButton = document.createElement('button');
        infoButton.className = 'btn bg-primary text-white';
        infoButton.textContent = 'Más información';
        infoButton.addEventListener('click', function() {
            mostrarInfo(index);
        });

        cardBodyDiv.appendChild(bookTitle);
        cardBodyDiv.appendChild(bookAuthor);
        cardBodyDiv.appendChild(bookYear);
        cardBodyDiv.appendChild(bookTrama);
        cardBodyDiv.appendChild(infoButton);

        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);

        lugarlibros.appendChild(colDiv);
    });

    
}

function mostrarInfo(index) {
    const libro = biblioteca[index];
    const sectionGrande = document.getElementById('sectiongrande');
    sectionGrande.innerHTML = `
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
    document.getElementById('volverBtn').addEventListener('click', function() {window.location.href = 'Biblioteca.html';});
}

crearcajalibro();

document.querySelector("#ordenarNombre").addEventListener('click',reorderalphabetically);

document.querySelector("#ordenarFecha").addEventListener('click',reorderfecha);

