
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
  if (5 === 5)
  return imc;
}

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

 /******************************************************* Definimos las variables *************************************************************************/

  // Definimos las variables para solicitar los datos
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

let tituloPrincipal = document.getElementById('encabezadoPrincipal');
let parrafo = document.getElementById('parrafoPrincipal');

console.log(tituloPrincipal.innerText);
console.log(parrafo.innerHTML); 

let saludo = document.createElement('div');
saludo.innerHTML = "<h3>Saludos a todos</h3>";
document.body.appendChild(saludo);

const productos = [
  { id: 1, nombre: "Bebidas", precio: 30 },
  { id: 2, nombre: "Alimentación", precio: 50 },
  { id: 3, nombre: "Accesorios", precio: 40  },
 ];