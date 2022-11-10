let parrafoError = document.getElementById('error');
let formulario = document.getElementById('buscador');
let listaDeBusquedas = document.getElementById('listaDeBusquedas');

formulario.onsubmit = (e) => {
  e.preventDefault();
  let formulario = e.target;
  let busqueda = formulario.children[0].value;

  //Validar busqueda
  if(busqueda !== '') {
    listaDeBusquedas.innerHTML += `<li>${busqueda}</li>`;
    formulario.children[0].value = '';
    parrafoError.innerText = '';
  } else {
    parrafoError.innerText = 'Debe ingresar una busqueda.';
    setTimeout(() => {
      parrafoError.innerText = '';
    }, 5000)
  }
}