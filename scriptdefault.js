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
)

const ElLugar = new Libro(
    "El Lugar",
    "Mario Levrero",
    1982,
    "Novela",
    450,
    "Un hombre despierta en una habitación que no es la suya y cursa un calvario de intrascendencia, frialdad e incomunicación. No está en ningún lado o está en un mundo tan exageradamente contemporáneo que se desliza hacia el futuro, además de no registrar su existencia sino por medio del malentendido y la indiferencia",
    "portadas/el_lugar.JPG");

const Elviejo = new Libro ("El viejo y el mar","Ernest Hemingway",1952,"Novela",90,"El viejo y el mar es una novela corta de 1952 escrita por el autor estadounidense Ernest Hemingway. Escrita entre diciembre de 1950 y febrero de 1951, fue la última obra de ficción importante que Hemingway publicó durante su vida. Cuenta la historia de Santiago, un pescador anciano, y su larga lucha por pescar un marlín gigante.");

let biblioteca = [LaDivinaComedia, DonQuijote, ElLugar,Elviejo];

const lugarlibros = document.querySelector(".py-5");
console.log(lugarlibros);

function templatelibrohtml (){
    biblioteca.forEach(function (libro){ 
        const libroHTML = `
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                        <div class="col-md-6">
                            <div class="small mb-1">SKU: BST-498</div>
                            <h1 class="display-5 fw-bolder">${libro.nombre}</h1>
                            <div class="fs-5 mb-5">
                                <span class="text-decoration-line-through">$45.00</span>
                                <span>$40.00</span>
                            </div>
                            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div class="d-flex">
                                <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                                <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i class="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
        lugarlibros.innerHTML += libroHTML;
    })
    
};

    templatelibrohtml();
