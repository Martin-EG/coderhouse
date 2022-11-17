class Disfraz {
  constructor(id, nombre, precio, stock) {
    this.id = id;
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
let incremento = 5;

let disfracesEnVentaLS = localStorage.getItem('disfracezEnVenta');

if(disfracesEnVentaLS) {
  disfracesEnVenta = JSON.parse(disfracesEnVentaLS);
}

// disfracesEnVenta.push(new Disfraz(1, 'Vampiro', 125, 5));
// disfracesEnVenta.push(new Disfraz(2, 'Jason', 500, 4));
// disfracesEnVenta.push(new Disfraz(3, 'Hombre lobo', 2900, 1));
// disfracesEnVenta.push(new Disfraz(4, 'Tronchatoro', 23000, 2));

let parrafoError = document.getElementById('error');
let formulario = document.getElementById('formularioDisfraz');
let listaDisfraces = document.getElementById('disfracezDisponibles');

for ( let disfraz of disfracesEnVenta) {
  console.log(disfraz)
  let li = document.createElement('li');
  li.innerText = `Nombre: ${disfraz.nombre} - Precio: ${disfraz.precio} - Stock: ${disfraz.stock}`;
  listaDisfraces.appendChild(li);
};

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  let datos = e.target.children;

  if( datos[0].value !== '' && (datos[1].value !== '' && datos[1].value > 0) && (datos[2].value !== '' && datos[2].value > 0)) {
    let existeDisfraz = disfracesEnVenta.some((disfraz) => disfraz.nombre === datos[0].value);

    if(existeDisfraz) {
      parrafoError.innerText = 'Este disfraz ya existe, imposible agregarlo de nuevo.'
    } else {      
      disfracesEnVenta.push(new Disfraz(incremento,datos[0].value, datos[1].value, datos[2].value));
      incremento++;
  
      listaDisfraces.innerHTML += `<li>Nombre: ${datos[0].value} - Precio: ${datos[1].value} - Stock: ${datos[2].value}</li>`
      parrafoError.innerText = ''
      localStorage.setItem('disfracezEnVenta', JSON.stringify(disfracesEnVenta));
    }
  } else {
    parrafoError.innerText = 'Todos los campos son obligatorios';
  }
});
