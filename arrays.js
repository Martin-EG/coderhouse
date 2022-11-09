// // Lista de mandado
// const listaDeMandadoPadre = ['Huevos', 'Pan', 'Pollo', 'Carne', 'Mantequilla'];
// const listaDeMandadoMadre = ['Leche', 'Cereal', 'Cafe'];

// const listaDeMandado = listaDeMandadoPadre.concat(listaDeMandadoMadre);
// // console.log(listaDeMandadoMadre);
// // console.log(listaDeMandadoPadre);
// // console.log(listaDeMandado);

// const indiceCarne = listaDeMandado.indexOf('Carne');
// // console.log(listaDeMandado);
// listaDeMandado.splice(indiceCarne, 1);
// // console.log(listaDeMandado);

// // for(let i = 0; i < listaDeMandado.length; i++){
// //   console.log(listaDeMandado[i])
// // }
// listaDeMandado.forEach((producto) => {
//   console.log(producto)
// });

// listaDeMandado.push('Cepillos de dientes');
// console.log(listaDeMandado)

// Lista de nombres

let continuar;
let nombres = [];

do {
  nombre = prompt('Ingrese un nombre.');
  nombres.push(nombre);

  continuar = prompt('Desea continuar? 1. Si. 2. No');
} while(continuar === '1');

alert(`A continuacion enlistaremos los ${nombres.length} nombres que el usuario ingreso.`);
nombres.forEach((nombre, indice) => {
  alert(nombre);
  if(nombre === 'Martin') {
    alert(`Martin se encuentra en la posicion ${indice}`)
  }
});

// let numeros = [1, 2, 3, 4, 5];
// let cuadrados = numeros.map((numero) =>  numero*numero);
// console.log(numeros, cuadrados)

// let numero = 5
// let resultado = 1;
// for ( let i = numero; numero >= 1; numero-- ) {
//   resultado *= i // resultado = resultado * i
// }

// Tienda de disfraces
class Disfraz {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponible = true;
  }
  vender(cantidad) {
    this.stock -= cantidad;
    if(this.stock < 1) {
      this.disponible = false
    }
  }
}

let disfracesEnVenta = [];
disfracesEnVenta.push(new Disfraz('Vampiro', 125, 5));
disfracesEnVenta.push(new Disfraz('Jason', 500, 4));
disfracesEnVenta.push(new Disfraz('Hombre lobo', 2900, 1));
disfracesEnVenta.push(new Disfraz('Tronchatoro', 23000, 2));

let disfrazDeseado = prompt('Bienvenido! que disfraz desea comprar.');
let existe = false;
let posicion = -1;
disfracesEnVenta.forEach((item, indice) => {
  if(disfrazDeseado === item.nombre) {
    existe = true;
    posicion = indice;
  }
});
// const disfrazDeseadoFiltro = disfracesEnVenta.filter((item) => item.nombre === disfrazDeseado );
// console.log(disfrazDeseadoFiltro);

if(existe) {
  let cantidad = parseInt(prompt('Cuantos disfraces desea comprar?'));
  if(disfracesEnVenta[posicion].stock < cantidad) {
    alert(`Disculpa, no tengo tantos disfraces, solo tengo ${disfracesEnVenta[posicion].stock} en stock`);
  } else {
    disfracesEnVenta[posicion].vender(cantidad);
  
    if(!disfracesEnVenta[posicion].disponible) {
      disfracesEnVenta.splice(posicion, 1);
    }
  }
} else {
  alert('Lo lamento. este disfraz no lo tengo')
}

console.log(disfracesEnVenta);

// Ejercicio: pedir al usuario que ingrese las calificaciones de X alumnos (el usuario va decidir cuando salir)
// Vamos a sacar el promedio de todas las calificaciones del usuario.