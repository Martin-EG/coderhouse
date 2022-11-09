const disfraces = [
  {nombre: 'Caperucita', precio: 5000, stock: 5},
  {nombre: 'Vampiro', precio: 8000, stock: 1},
  {nombre: 'Jason', precio: 4000, stock: 0},
  {nombre: 'Tronchatoro', precio: 15000, stock: 15}
];

disfraces.forEach((disfraz) => {
  alert(`Nombre: ${disfraz.nombre}.\nPrecio: $${disfraz.precio}.\nStock: ${disfraz.stock}.`);
});

let disfracesDisponibles = disfraces.filter((disfraz) => disfraz.stock >= 1); // 0 != -1 ?
console.log(disfracesDisponibles);

const disfrazPrecioAceptable = disfracesDisponibles.find((disfraz) => disfraz.precio <= 3000);
console.log(disfrazPrecioAceptable);

disfracesDisponibles = disfraces.map((disfraz) => { return {...disfraz, stock: disfraz.stock + 3}})
console.log(disfracesDisponibles)

const disfracesOrdenados = disfraces.sort((a, b) => b.precio - a.precio)
console.log(disfracesOrdenados)