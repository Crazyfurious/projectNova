// VARIABLES ***************************************************************************************

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista__carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar__carrito');
const listaServicios = document.querySelector('#lista__servicios');
let articulosCarrito = [];

// EVENTOS *****************************************************************************************

activarListeners();

// Función para añadir servicios al hacer click en el botón correspondiente*************************
function activarListeners() {  
  // Agregar un servicio al hacer click en el botón
  listaServicios.addEventListener('click', agregarServicio);

  // Eliminar un servicio al hacer click en el botón
  carrito.addEventListener('click', cancelarServicio);

  // Carrito desde Local Storage
  document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse( localStorage.getItem('articulosCarrito') ) || [];
    carritoConvertir();
  })

  // Vaciar el carrito
  vaciarCarrito.addEventListener('click', () => { 
    articulosCarrito = [];
    eliminarServicios();  
  })
}

// FUNCIONES ***************************************************************************************

// Agrega al carrito el servicio seleccionado y evita el scroll*************************************
function agregarServicio(e) {
  e.preventDefault();
  if( e.target.classList.contains('agregar-carrito')) {
    let servicioElegido = e.target.parentElement.parentElement;
    datosServicios(servicioElegido);
  }  
}

// Elimina un servicio del carrito*****************************************************************
function cancelarServicio(e) {
  if( e.target.classList.contains('eliminar__elementos')) {
      const servicioId = e.target.getAttribute('data-id');
      // Eliminar servicios a través de su identificador
      articulosCarrito = articulosCarrito.filter( servicio => servicio.id !== servicioId );

      console.log(articulosCarrito);

      carritoConvertir();
  }
}

// Leer la información del servicio para mostrarlo en el carrito ***********************************
function datosServicios(servicio) {
  console.log(servicio);

  const infoServicio = {
    imagen: servicio.querySelector('img').src,
    nombre: servicio.querySelector('h4').textContent,
    precio: servicio.querySelector('.precio').textContent,
    id: servicio.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  }

  // Revisar si un elemento ya existe***************************************************************
  let servicioDuplicado = articulosCarrito.some ( servicio => servicio.id === infoServicio.id );
  if (servicioDuplicado) {
    //Actualizamos la cantidad
    let hayDuplicados = articulosCarrito.map( servicio => {
      if (servicio.id === infoServicio.id) {
        servicio.cantidad++;
        return servicio; // Devuelve el objeto actualizado
      } else {
        return servicio; // Devuelve los objetos que no están duplicados
      }
    });
    articulosCarrito = [...hayDuplicados];
  } else {
    // Añadir los elementos al carrito
    articulosCarrito = [...articulosCarrito, infoServicio];
  }

  console.log(articulosCarrito);

  carritoConvertir();
}

// Mostrar el carrito de compras en HTML ***********************************************************
function carritoConvertir () {

  // Eliminar el HTML
  eliminarServicios();

  // Generar el HTML con los datos del carrito
  articulosCarrito.forEach(servicio => {
      let { imagen, nombre, precio, cantidad, id } = servicio;
      let fila = document.createElement('tr');
      fila.innerHTML = `
      <td><img src="${imagen}" width="80px" /></td>
      <td>${nombre}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>      
      <td><a href="#"><img src="images/cancel.png" width="40px" class="eliminar__elementos" data-id="${id}" /></a></td>
      `;
      // Agregar los servicios a la tabla
      contenedorCarrito.appendChild(fila)
  });

  guardarStorage();

}

// Agregar el carrito al LocalStorage
function guardarStorage() {
  localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
}

// Eliminar los servicios **************************************************************************
function eliminarServicios() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}