// class Disfraz {
//   constructor(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     this.disponible = true;
//   }
//   vender(cantidad) {
//     this.stock -= cantidad;
//     if(this.stock < 1) {
//       this.disponible = false
//     }
//   }
// }

// let carrito = document.getElementById('carrito');
// let disfracesEnVenta = [];
// disfracesEnVenta.push(new Disfraz('Vampiro', 125, 5));
// disfracesEnVenta.push(new Disfraz('Jason', 500, 4));
// disfracesEnVenta.push(new Disfraz('Hombre lobo', 2900, 1));
// disfracesEnVenta.push(new Disfraz('Tronchatoro', 23000, 2));

// let disfracesEnCarrito = [];
// let disfracesEnCarritoLS = localStorage.getItem('carrito');

// if(disfracesEnCarritoLS) {
//   disfracesEnCarrito = JSON.parse(disfracesEnCarritoLS);

//   disfracesEnCarrito.forEach(disfraz => {
//     carrito.innerHTML += `<li>
//       ${disfraz.cantidad}x ${disfraz.nombre} 
//     </li>`
//   });
// }


// let disfrazSeleccionado = prompt('Ingrese el disfraz que quiera agregar al carrito.');

// let disfrazRequerido = disfracesEnVenta.find((disfraz) => disfrazSeleccionado === disfraz.nombre);

// if(disfrazRequerido) {
//   let cantidad = parseInt(prompt("Cuantos disfraces desea agregar al carrito."));
//   disfracesEnCarrito.push({nombre: disfrazSeleccionado, cantidad: cantidad});
//   localStorage.setItem('carrito', JSON.stringify(disfracesEnCarrito));

//    carrito.innerHTML += `<li>
//       ${cantidad}x ${disfrazSeleccionado} 
//     </li>`
// } else {
//   alert('Este disfraz no esta disponible.');
// }

let formulario = document.getElementById('inicioDeSesion');
let parrafoBienvenida = document.getElementById('bienvenida');

let usuarioLS = localStorage.getItem('usuario');

if(usuarioLS) {
  let usuario = JSON.parse(usuarioLS);
  parrafoBienvenida.innerText = `Hola ${usuario.nombre}`
  formulario.innerHTML = '';
} else {
  formulario.onsubmit = (e) => {
    e.preventDefault();

    let form = e.target;
    let usuario = form.children[0];
    let password = form.children[1];

    if (usuario !== '' && password !== '') {
      // Conectamos al servidor y el servidor nos manda de regreso cierta informacion
      let informacionUsuario = JSON.stringify({
          nombre: 'Martin',
          email: 'martin@email.com',
          telefono: '123456',
          contrasena: '123456',
          imagen: 'imagen'
        });
      let informacion = JSON.parse(informacionUsuario);
      localStorage.setItem('usuario', JSON.stringify({
        nombre: informacion.nombre,
        email: informacion.email,
        imagen: informacion.imagen,
        token: 'asdqsdaf'
      }))

    }
  }
}