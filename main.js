// constructor
function Transaccion(nombre, valor) {
  this.nombre = nombre;
  this.valor = valor;
}
//array
let listaGastos = [];
//funcion  que hace todo el trabajo
function ingresarTransaccion() {
  let nombre = prompt("Ingresa el nombre del gasto");
  let valor = parseInt(prompt("Ingresa monto"));
  let Transaccion1 = new Transaccion(nombre, valor);
  //array
  listaGastos.push(Transaccion1);
  console.log(listaGastos);
  ingresarTransaccion();
}

ingresarTransaccion();
