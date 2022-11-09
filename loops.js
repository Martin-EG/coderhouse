// Sacar el promedio de las calificaciones de 5 alumnos.

let acumuladorDeCalificaciones = 0;

for(let contador = 0; contador < 5; contador++) {
  let calificacion = parseFloat(prompt("Ingrese su calificacion."));

  acumuladorDeCalificaciones += calificacion;
}

let promedioCalificaciones = acumuladorDeCalificaciones / 5;
alert(`El promedio de calificaciones es: ${promedioCalificaciones}`);

// Preguntar a 10 usuarios que tipo de boleto de avion quieren: Primera clase o 
// boleto standard y al final mostrar cuantos quisieron primera clase y boleto standard.

let boletosPrimeraClase = 0;
let boletosStandard = 0;

for(let i = 1; i <= 10; i++) {
  let boletoElegido = prompt("Elige tu boleto: 1) Primera clase. 2) Boleto Standard");

  if(boletoElegido == 1) {
    boletosPrimeraClase++;
  } else if(boletoElegido == 2) {
    boletosStandard += 1;
  }
}

alert(`${boletosPrimeraClase} eligieron primera clase y ${boletosStandard} eligieron standard`);


// Pedir al usuario un numero para mostrar los exponenciales utilizando un bucle.
let contador = 1;
let limite = parseInt(prompt("Ingrese hasta que numero quiere calcular."));

while(contador <= limite) {
  if(contador == 3) {
    console.log("nos salimos");
    break;
  }
  let resultado = contador*contador;
  console.log(resultado);

  contador++;
}

// Incrementar una variable con numero que el usuario
//ingrese hasta que la variable llegue a 10.

let acumulador = 0;
do {
  let numero = parseInt(prompt("Ingrese un numero."));
  acumulador += numero;
  console.log(acumulador)
}while(acumulador <= 10)

// Calculadora
let operacion;
do {

  let numero1 = parseFloat(prompt("Ingrese un numero."));
  console.log(numero1);
  let numero2 = parseFloat(prompt("Ingrese otro numero."));
  operacion = prompt("Ingrese operacion a realizar (+, -, /, *), para salir ingrese .");
  
  switch (operacion) {
    case '+':
      console.log(numero1+numero2);
      break;
    case '-':
      console.log(numero1-numero2);
      break;
    case '/':
      console.log(numero1/numero2);
      break;
    case '*':
      console.log(numero1*numero2);
      break;
    case '.':
      console.log("Adios");
      break;
    default:
      console.log('Operacion invalida.');
      break;
  }
}
while(operacion !== '.');

