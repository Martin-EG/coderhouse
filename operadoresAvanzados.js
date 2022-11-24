// let nombre = prompt("Ingrese su nombre.") || 'usuario';

// nombre !== '' && alert(`Bienvenido ${nombre}`);

// if (nombre !== '') {
//   alert(`Bienvenido ${nombre}`);
// }

// costoProducto = 100;

// costoConPromocion = costoProducto > 100 ? costoProducto*.80 : costoProducto*0.90;
// console.log(costoConPromocion);

// let respuestaAPI;

// setTimeout(() => {
//   respuestaAPI =
//   {
//     id: 1,
//     nombre: 'Margarita',
//     receta: '....',
//   };

// }, 3000);

// console.log(`Receta para hacer una ${respuestaAPI?.nombre || 'bebida'}`);

// let respuestaAPI = {
//     id: 1,
//     nombre: 'Margarita',
//     receta: '....',
//   };

// let { nombre } = respuestaAPI;

// console.log(nombre);
// nombre = 'Otra cosa';
// console.log(nombre, respuestaAPI)

// Pedirle al usuario dos numeros y que nos diga si queremos sumarlos o restarlos
// En caso de que el usuario no ingrese el primer numero vamos a tomar 5 como valor default
// Si el usuario no ingresa el segundo numero vamos a asignarle un 10 por default
// Si el usuario no manda una instruccion, enviar alert de error

// Operador logico AND, OR y Ternario

let numero1 = parseInt(prompt('Ingrese un numero')) || 5;
let numero2 = parseInt(prompt('Ingrese otro numero')) || 10;

let operacion = prompt(
  'Ingrese la operacion:\n1. Sumar. \n2.Restar. \n3.Multiplicar.'
);

operacion == '' && alert('Error: no ingresaste una operacion.');

console.log(
  operacion == 1
    ? numero1 + numero2
    : operacion == 2
    ? numero1 - numero2
    : numero1 * numero2
);
