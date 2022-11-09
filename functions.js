// // Funciones
// // Calculadora

// let opcionMenu = 0;
// let resultado = 0;

// function sumar(numero1, numero2) {
//   return numero1 + numero2;
// }

// function restar(numero1, numero2) {
//   return numero1 - numero2;
// }

// function multiplicar(numero1, numero2) {
//   return numero1 * numero2;
// }

// function dividir(numero1, numero2) {
//   return numero1/numero2;
// }

// function mensajeDespedida() {
//   alert("Adios!");
// }

// function mostrarResultado(resultado) {
//   alert(`Tu resultado es: ${resultado}`)
// }

// while(opcionMenu != 5) {
//   let numero1 = parseFloat(prompt("Ingrese un numero."));
//   let numero2 = parseFloat(prompt("Ingrese otro numero."));
//   opcionMenu = prompt("Elija la operacion deseada. (1. Sumar, 2. Restar, 3. Multiplicar, 4.Dividir, 5. Salir)");
//   switch(opcionMenu) {
//     case '1':
//       resultado = sumar(numero1, numero2);
//       mostrarResultado(resultado);
//       break;
//     case '2':
//       resultado = restar(numero1, numero2);
//       mostrarResultado(resultado)
//       break;
//     case '3':
//       resultado = multiplicar(numero1, numero2);
//       mostrarResultado(resultado)
//       break;
//     case '4':
//       resultado = dividir(numero1, numero2);
//       mostrarResultado(resultado)
//       break;
//     default:
//       mensajeDespedida();
//       break;
//   }
// }

// // Convertidor de temperatura

// let opcionMenu = 0

// function convertirCentigradosAFarenheit(grados) {
//   let resultado = grados*1.8 + 32;
//   llamarResultado(resultado);
// }

// function convertirFarenheitACentigrados(grados) {
//   let resultado = (grados - 32)/1.8;
//   llamarResultado(resultado);
// }

// function llamarResultado(resultado) {
//   alert(`Su resultado es ${resultado}`);
// }

// do {
//   let grados = parseFloat(prompt("Ingrese temperatura."));
//   opcionMenu = prompt("Que desea realizar? (1. convertir C a F. 2. Convertir F a C. 3. Salir)");
//   switch(opcionMenu) {
//     case '1':
//       convertirCentigradosAFarenheit(grados);
//       break;
//     case "2":
//       convertirFarenheitACentigrados(grados);
//       break;
//     case '3':
//       alert("Adios");
//       break;
//     default:
//       alert("No se encuentra la opcion deseada.");
//       break;
//   }
// } while(opcionMenu != 3);



// // Calculadora con funciones anonimas.
// let opcionMenu = 0;
// let resultado = 0;

// const sumar = (numero1, numero2) => numero1 + numero2;

// const restar = function (numero1, numero2) {
//   return numero1 - numero2;
// }

// const multiplicar = function (numero1, numero2) {
//   return numero1 * numero2;
// }

// const dividir =function (numero1, numero2) {
//   return numero1/numero2;
// }

// const mensajeDespedida = function () {
//   alert("Adios!");
// }

// const mostrarResultado = function (resultado) {
//   alert(`Tu resultado es: ${resultado}`)
// }

// while(opcionMenu != 5) {
//   let numero1 = parseFloat(prompt("Ingrese un numero."));
//   let numero2 = parseFloat(prompt("Ingrese otro numero."));
//   opcionMenu = prompt("Elija la operacion deseada. (1. Sumar, 2. Restar, 3. Multiplicar, 4.Dividir, 5. Salir)");
//   switch(opcionMenu) {
//     case '1':
//       resultado = sumar(numero1, numero2);
//       mostrarResultado(resultado);
//       break;
//     case '2':
//       resultado = restar(numero1, numero2);
//       mostrarResultado(resultado)
//       break;
//     case '3':
//       resultado = multiplicar(numero1, numero2);
//       mostrarResultado(resultado)
//       break;
//     case '4':
//       resultado = dividir(numero1, numero2);
//       mostrarResultado(resultado)
//       break;
//     default:
//       mensajeDespedida();
//       break;
//   }
// }

// // Convertidor de temperatura con funciones de flecha

// let opcionMenu = 0

// const convertirCentigradosAFarenheit = (grados) => {
//   let resultado = grados*1.8 + 32;
//   llamarResultado(resultado);
// }

// const convertirFarenheitACentigrados = (grados) => {
//   let resultado = (grados - 32)/1.8;
//   llamarResultado(resultado);
// }

// const llamarResultado = (resultado) => {
//   alert(`Su resultado es ${resultado}`);
// }

// do {
//   let grados = parseFloat(prompt("Ingrese temperatura."));
//   opcionMenu = prompt("Que desea realizar? (1. convertir C a F. 2. Convertir F a C. 3. Salir)");
//   switch(opcionMenu) {
//     case '1':
//       convertirCentigradosAFarenheit(grados);
//       break;
//     case "2":
//       convertirFarenheitACentigrados(grados);
//       break;
//     case '3':
//       alert("Adios");
//       break;
//     default:
//       alert("No se encuentra la opcion deseada.");
//       break;
//   }
// } while(opcionMenu != 3);


// Diferentes maneras de declarar una funcion
// function sumar (numero1, numero2) {
//   return numero1 + numero2;
// }

// const sumar = function (numero1, numero2) {
//   return numero1 + numero2;
// }

// const sumar = (numero1, numero2) => {
//   let resultado = numero1 + numero2
//   console.log(resultado)
// };

// const sumar = (numero1, numero2) => numero1 + numero2;