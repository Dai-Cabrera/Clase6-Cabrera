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

  
 let lista = document.createElement("p")
 lista.innerHTML = nombre

 let precios = document.createElement("p")
 precios.innerHTML = valor

 document.getElementById("lista").appendChild(lista)
 document.getElementById("precios").appendChild(precios)

 total = total + valor;
  console.log(total);
}

ingresarTransaccion();
ingresarTransaccion();
ingresarTransaccion();
ingresarTransaccion();

const gastos = document.getElementById("gastos")
gastos.innerHTML= "Total gastado = $" + total;

