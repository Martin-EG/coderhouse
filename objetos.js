// Crear un objeto telefono
// function Telefono(marca, color, sistemaOperativo, nombre) {
//   this.marca = marca,
//   this.color = color,
//   this.sistemaOperativo = sistemaOperativo,
//   this.nombre = nombre,
//   this.stock = 100
//   this.prender = function() { instrucciones() }
// };

// const telefono1 = new Telefono('Apple', 'Blanco', 'IOS', 'Iphone 14');
// const telefono2 = new Telefono('Xiaomi', 'Azul', 'Android', 'Xiaomi Redmi Note 9S');
// const telefono3 = new Telefono('Samsung', 'Rojo', 'Android', 'Note 9');

// console.log("Propiedades del telefono 1");
// for ( const propiedad in telefono1) {
//   console.log(`${propiedad}: ${telefono1[propiedad]}`);
// }


// telefono2.esUsado = true;
// console.log("Propiedades del telefono 2");
// for ( const propiedad in telefono2) {
//   console.log(`${propiedad}: ${telefono2[propiedad]}`);
// }

// const telefono4 = { ...telefono1, esUsado: true };
// console.log(telefono1)
// console.log(telefono4)
// telefono1.nombre = "Iphone 13";
// console.log(telefono1)
// console.log(telefono4)

// let marca = prompt("Ingresa la marca.");
// const telefono4 = new Telefono(marca, 'Blanco', 'IOS', 'Iphone 14');
// console.log(telefono4);

class Telefono {
  constructor(marca, color, sistemaOperativo, nombre, precio) {
    this.marca = marca,
    this.color = color,
    this.sistemaOperativo = sistemaOperativo,
    this.nombre = nombre,
    this.precio = precio,
    this.prendido = false
  }
  prender() {
    this.prendido = true;
    console.log("Prendiendo el telefono")
  }
  apagar() {
    this.prendido = false;
  }
  llamar(numeroTelefonico) {
    console.log(`Llamando a ${numeroTelefonico}`);
  }
  reproducirMusica(){
    console.log("Reproduciendo musica");
  }
  verEspecificaciones() {
    console.log(this.marca);
    console.log(this.sistemaOperativo);
  }
}

const telefono1 = new Telefono('Apple', 'Blanco', 'IOS', 'Iphone 14', 21000);
telefono1.prender();
telefono1.llamar(123456789);