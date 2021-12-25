
/******************************************************* Definimos las funciones *************************************************************************/

// Creo una funcion para convertir los textos a letra capital y el resto a minúsculas
function letraCapital(dato) {
  // Convertimos el dato a minúsculas
  dato = dato.toLowerCase();
  // Ahora cogemos la primera inicial y la convertimos en mayúculas
  // Con slice, cogemos el residuo restante (todo lo que esta en minúscula) y lo concatenamos
  dato = dato.charAt(0).toUpperCase() + dato.slice(1);
  return dato;
 } 

function masaCorporal (peso, altura) {
  imc = (altura/100) * (altura/100);
  imc = peso / imc;
  return imc;
}

 /******************************************************* Definimos las variables *************************************************************************/

// Definimos las variables para solicitar los datos
// Aprovecho y asigno la funcion de letra capital al nombre para que salga ya formateado

/* Creo que la funcion datosClientes() para llamarla desde un botón externo, dentro incluyo la creación
del objeto Clientes, con los datos necesarios.*/ 

function datosClientes() {

  function Clientes(nombre, edad, peso, altura) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
  }

  // Asigno las variables para obtener los valores almacenados en los input
  let nombreClientes = document.getElementById('nombre').value;
  let edadClientes = document.getElementById('edad').value;
  let pesoClientes = document.getElementById('peso').value;
  let alturaClientes = document.getElementById('altura').value;

  // Defino una variable global para que guarde los datos de los clientes insertados
  altaCliente = new Clientes(nombreClientes, edadClientes, pesoClientes, alturaClientes);
  console.log(altaCliente);

  masaCorporal(pesoClientes,alturaClientes);
  alert('Su índice de masa corporal es: ' + imc.toFixed(2));

  // Hago una llamada a la funcion externa creada para almacenar en un array los datos de los clientes
  insertarClientes();
};

// Creo el array con el listado de todos los clientes
let listadoClientes = [];

// Defino una función para almacenar dicho listado
function insertarClientes() {
  listadoClientes.push(altaCliente);
  console.log(listadoClientes);
  alert("Actualmente tenemos " + listadoClientes.length + " clientes registrados");
}

