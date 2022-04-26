// constructor
function Transaccion(nombre, valor) {
  this.nombre = nombre;
  this.valor = valor;
}
//array
let listaGastos = [];
let total = 0;
//funcion  que hace todo el trabajo
function ingresarTransaccion() {
  let nombre = prompt("Ingresa el nombre del gasto");
  let valor = parseInt(prompt("Ingresa monto"));
  let Transaccion1 = new Transaccion(nombre, valor);
  //array
  listaGastos.push(Transaccion1);
  console.log(listaGastos);

  total = total + valor;
  console.log(total);
}

ingresarTransaccion();
ingresarTransaccion();
ingresarTransaccion();

document.write("Total gastado = $" + total);
