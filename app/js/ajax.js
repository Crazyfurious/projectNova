
// RECIBIR INFORMACIÓN
const direccion = 'https://jsonplaceholder.typicode.com/todos/1'

$(`.ajax`).after('<button id="btnJson" class="mx-3">Obtener Datos</button>');

$("#btnJson").on("click", async () => {
  
  try {
    let respuestaInicial = await axios.get(direccion)
    let respuestaFinal = respuestaInicial.data
    console.log(respuestaFinal);
    console.log("Aquí");
  }catch(err) {
    console.log(err)
  }
  
  // fetch(direccion)
  //   .then( response => response.json())
  //   .then ( data => console.log(data))
  //   .catch( err => console.log(err))
  
})

// ENVIAR DATOS
// La url para hacer el GET
const enviar = 'https://jsonplaceholder.typicode.com/posts'

// Declaramos la info para enviar
const infoPost = { nombre: "Ana", profesion: "Programadora" }

// Botón con jquery
$(".ajax").after('<button id="btnPost" class="mx-3">Enviar Datos</button>');

$("#btnPost").on("click", () => {
  $.post(enviar, infoPost, (respuesta, estado) => {
    if(estado === "success") {
      $(".ajax").after(`<div>Guardado:${respuesta.nombre}</div>`);
    }
  });    
});

// JSON LOCAL
const datosLocal = "app/json/datos.json"

// Agregamos un botón con jquery
$(".ajax").after('<button id="btnLocal" class="mx-3">Datos Locales</button>');

// Evento del click
$("#btnLocal").on("click", () => {
  $.getJSON(datosLocal, (respuesta, estado) => {
    if(estado === "success") {
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $(".ajax").after(`<div>
                                <h3>${dato.id}</h3>
                                <p>${dato.nombre}</p>
                            </div>`)
      }
    }
  });    
});