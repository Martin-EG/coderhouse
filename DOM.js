// let titulo = document.getElementsByTagName("h2")[0];
// let temaDeLaClase = document.getElementById("temaDeLaClase");

// titulo.innerText += ' Clase de Javascript';
// titulo.className = 'colorRojo';
// temaDeLaClase.innerHTML = 'DOM <strong>(Modelo objeto)</strong>';
// console.log(titulo.textContent);
// console.log(titulo.innerText);

// let listado = document.getElementsByTagName("li");

// for(let i = 0; i < listado.length; i++) {
//   if((i+1)%2 == 0) {
//     listado[i].className = 'colorRojo'
//   } else {
//     listado[i].className = 'colorVerde'
//   }
// }

let titulo = document.querySelector("#titulo");
let temaDeLaClase = document.querySelector("#subtitulo #temaDeLaClase");
let listadoDeConceptos = document.querySelector("#listadoDeConceptos");

titulo.className = 'colorRojo';
temaDeLaClase.innerHTML = 'DOM <strong>(Modelo objeto)</strong>';

let conceptos = [
  {id: 1, concepto: 'Condicionales'},
  {id: 2, concepto: 'Arrays'},
  {id:3, concepto: 'Objetos'}
];

conceptos.forEach((concepto) => {
  let contenedor = document.createElement("li");
  contenedor.innerHTML = `<bold id="concepto${concepto.id}">${concepto.concepto}</bold>`;
  listadoDeConceptos.appendChild(contenedor);
});

// let concepto = "";
// while(concepto != 'esc') {
//   concepto = prompt("Ingresa un concepto de Javascript. (Si quiere salir ingrese esc)");
//   if(concepto !== '' && concepto.toUpperCase() !== 'ESC') {
//     // const li = document.createElement("li");
//     // li.innerText = concepto;
//     // li.className = 'colorVerde';
//     // listadoDeConceptos.appendChild(li);
//     listadoDeConceptos.innerHTML += `<li class="colorRojo">${concepto}</li>`;
//   }
// }

// let listado = document.querySelectorAll('li');

// listado[0].remove();
// listado[1].remove();