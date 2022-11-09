// Cajero automatico

// Un usuario pueda ingresar y realizar distintas operaciones:
// 1. Consultar su saldo.
// 2. Puede retirar dinero.
// 3. Puede ingresar dinero.
// 4. Puede transferir dinero.
// 5. Salir

// Funciones
// Ciclos
// Condicionales 
// Switch

let dineroDelUsuario = 8000;
let opcionMenu = 0;

//Funciones del cajero
function consultarDinero() {
  alert(`Usuario, su saldo actual es $${dineroDelUsuario}`);
}

function validarSaldo(dineroARetirar) {
   if(dineroARetirar > dineroDelUsuario) {
    alert("No cuentas con el dinero suficiente.");
    return false;
  } else {
    dineroDelUsuario -= dineroARetirar;
    return true;
  }
}

const retirarDinero = function () {
  let dineroARetirar = parseInt(prompt("Cuanto dinero desea retirar? \nCuento con billetes de $500, $200, $100 y $50"));
  let resultado = validarSaldo(dineroARetirar);
  if(resultado) {
    alert(`El retiro se realizo con exito, su nuevo saldo es de ${dineroDelUsuario}`);
  }

}

const depositarDinero = () => {
  let dineroADepositar = parseInt(prompt("Cuanto dinero desea depositar?"));
  if(dineroADepositar > 0) {
    dineroDelUsuario += dineroADepositar;
    alert(`Su nuevo saldo es de ${dineroDelUsuario}`)
  } else {
    alert('El valor es incorrecto.')
  }
}

const transferirDinero = () => {
  let dineroATrasferir = parseInt(prompt("Cuanto dinero desea transferir?"));
  let resultado = validarSaldo(dineroATrasferir);
  if(resultado) {
    alert(`La transferencia se realizo con exito, su nuevo saldo es de ${dineroDelUsuario}`);
  }
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
      alert('Nos vemos.');
      break;
    default:
      alert('No existe la opcion ingresada, intente de nuevo.');
      break;
  }
}

do {
  opcionMenu = prompt("Ingresa la operaciona a realizar. \n1. Consultar saldo. \n2. Retirar dinero. \n3. Depositar dinero. \n4. Transferir dinero. \n5. Salir.")
  seleccionarOperacionDelMenu(opcionMenu);
} while( opcionMenu !== '5' );