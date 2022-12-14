// Cajero automatico

// Un usuario pueda ingresar y realizar distintas operaciones:

// 1. Iniciar sesion
// 2. Registrarse


// 1. Consultar su saldo.
// 2. Puede retirar dinero.
// 3. Puede ingresar dinero.
// 4. Puede transferir dinero.
// 5. Consultar historial de movimientos.
// 5. Salir

// Funciones ->
// Ciclos ->
// Condicionales -> 
// Switch -> 

//Arrays
//Objetos
//Funciones de orden superior

// Usuario
// tarjeta
// Nombre
// dineroEnElBanco

class Usuario {
  constructor(nombre, tarjeta, dineroEnElBanco) {
    this.nombre = nombre;
    this.tarjeta = tarjeta;
    this.dineroEnElBanco = parseInt(dineroEnElBanco);
    this.movimientos = []
  }
  agregarMovimiento(movimiento) {
    this.movimientos.push(movimiento);
  }
  restarDinero(dinero) {
    this.dineroEnElBanco -= dinero;
  }
}

class Movimientos {
  constructor(dinero, tipoDeMovimiento, fechaDeMovimiento) {
    this.dinero = parseFloat(dinero);
    this.tipoDeMovimiento = tipoDeMovimiento;
    this.fechaDeMovimiento = fechaDeMovimiento;
  }
}

function iniciarSesion(){
  const nombre = prompt('Cual es su nombre?');
  const tarjeta = prompt('Cual es su tarjeta?');

  usuarioLogIn = usuarios.find((usuario) => usuario.nombre === nombre && usuario.tarjeta === tarjeta );

  if(usuarioLogIn) {
    menuDeOperaciones();
  } else {
    alert('No se encuentra este usuario.');
  }
}

function registrarse() {
  const nombre = prompt('Cual es su nombre?');
  const tarjeta = prompt('Cual es su tarjeta?');
  const dinero = parseFloat(prompt('Cuanto dinero tiene?'));

  usuarios.push(new Usuario(nombre, tarjeta, dinero));
}

//Funciones del cajero
function consultarDinero() {
  alert(`Usuario, su saldo actual es $${usuarioLogIn.dineroEnElBanco}`);
}

function validarSaldo(dineroARetirar) {
   if(dineroARetirar > usuarioLogIn.dinero) {
    alert("No cuentas con el dinero suficiente.");
    return false;
  } else {
    usuarioLogIn.restarDinero(dineroARetirar);
    return true;
  }
}

const retirarDinero = function () {
  let dineroARetirar = parseInt(prompt("Cuanto dinero desea retirar? \nCuento con billetes de $500, $200, $100 y $50"));
  let resultado = validarSaldo(dineroARetirar);
  if(resultado) {
    const fecha = new Date();
    usuarioLogIn.agregarMovimiento(new Movimientos(dineroARetirar, 'Retiro', fecha));
    alert(`El retiro se realizo con exito, su nuevo saldo es de ${usuarioLogIn.dineroEnElBanco}`);
  }

}

const depositarDinero = () => {
  let dineroADepositar = parseInt(prompt("Cuanto dinero desea depositar?"));
  if(dineroADepositar > 0) {
    usuarioLogIn.dineroEnElBanco += dineroADepositar;
    const fecha = new Date();
    usuarioLogIn.agregarMovimiento(new Movimientos(dineroADepositar, 'Deposito', fecha));
    alert(`Su nuevo saldo es de ${usuarioLogIn.dineroEnElBanco}`)
  } else {
    alert('El valor es incorrecto.')
  }
}

const transferirDinero = () => {
  let dineroATrasferir = parseInt(prompt("Cuanto dinero desea transferir?"));
  let resultado = validarSaldo(dineroATrasferir);
  if(resultado) {
    const fecha = new Date();
    usuarioLogIn.agregarMovimiento(new Movimientos(dineroATrasferir, 'Transferencia', fecha));
    alert(`La transferencia se realizo con exito, su nuevo saldo es de ${diusuarioLogIn.dineroneroDelUsuario}`);
  }
}

const consultarMovimientos = () => {
  usuarioLogIn.movimientos.forEach((movimiento) => {
    alert(`Fecha: ${movimiento.fechaDeMovimiento}.\nOperacion: ${movimiento.tipoDeMovimiento}.\nDinero: $${movimiento.dinero}.`);
  })
}

function seleccionarOperacionDelMenu(operacion) {
switch (operacion) {
    case '1':
      consultarDinero();
      break;
    case '2':
      retirarDinero();
      break;
    case '3':
      depositarDinero();
      break;
    case '4':
      transferirDinero();
      break;
    case '5':
      consultarMovimientos();
      break;
    case '6':
      alert('Nos vemos.');
      break;
    default:
      alert('No existe la opcion ingresada, intente de nuevo.');
      break;
  }
}

function menuDeOperaciones() {
do {
  opcionMenu = prompt("Ingresa la operaciona a realizar. \n1. Consultar saldo. \n2. Retirar dinero. \n3. Depositar dinero. \n4. Transferir dinero. \n5. Ver movimientos. \n5. Salir.")
  seleccionarOperacionDelMenu(opcionMenu);
} while( opcionMenu !== '6' );
}

let opcionInicio = 0;
let usuarios = [];
let usuarioLogIn;
let opcionMenu = 0;

do {
  opcionInicio = prompt("Bienvenido que desea hacer?\n1.Iniciar sesion.\n2.Registrarse.\n3.Salir");
  switch(opcionInicio) {
    case '1':
      iniciarSesion();
      break;
    case '2':
      registrarse();
      break;
    case '3':
      alert('Nos vemos.');
      break;
    default:
      alert('Opcion incorrecta.');
      break;
  }
} while(opcionInicio != 3);