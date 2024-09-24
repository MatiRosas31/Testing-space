//Buscador de Libros
let tituloBuscado = testArea.value;


function buscarLibroPorTitulo(tituloBuscado) {
  let resultadoLibro = document.getElementById("resultado-libro");
  resultadoLibro.innerHTML = ''; // Limpiar contenido anterior
  for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].nombre.toLowerCase().includes(tituloBuscado.toLowerCase())) {
      resultadoLibro.innerHTML += "<h2>Información del Libro:</h2>";
      resultadoLibro.innerHTML += `<img src="${biblioteca[i].image}" alt="${biblioteca[i].nombre}">`; // Mostrar imagen del libro
      console.log("Aquí está la información del libro: " + tituloBuscado);
      for (let propiedad in biblioteca[i]) {
        if (propiedad !== "image") { // Evitar mostrar la propiedad de la imagen nuevamente
          resultadoLibro.innerHTML += `<p><strong>${propiedad}:</strong> ${biblioteca[i][propiedad]}</p>`;
          console.log(propiedad + ": " + biblioteca[i][propiedad]);
        }
      }
      return;
    }
  }
  resultadoLibro.innerHTML = "<p>No se ha encontrado el libro</p>";
  console.log("No se ha encontrado el libro");
}



testWrapper.addEventListener('input', function(event) {
  let tituloBuscado = event.target.value;
  buscarLibroPorTitulo(tituloBuscado);
}); 