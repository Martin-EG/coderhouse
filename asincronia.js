const usuariosDB = [
  {
    id: 1,
    usuario: 'Martin',
    password: '123456',
    telefono: 555225354,
    dinero: 5000
  },
  {
    id: 2,
    usuario: 'Mateo',
    password: '789654',
    telefono: 555244864,
    dinero: 15000
  },
  {
    id: 3,
    usuario: 'Ruben',
    password: 'contrasena',
    telefono: 684254412,
    dinero: 3000
  },
  {
    id: 4,
    usuario: 'Lucas',
    password: 'contrasena1',
    telefono: 8683514524,
    dinero: 30000
  },
];


// Al enviar la informacion del login vamos a enviar con una promesa lso datos del 
// formulario y se verificara en la base de datos si ya existe un usuario con ese nombre

//Creando nuestra promesa y simulador de backend
const registrarUsuario = (informacionFormulario) => {
  return new Promise( (resolve, rejected) => {
    const { usuario: nombreUsuario, telefono } = informacionFormulario;
    
    let existeUsuario = usuariosDB.some( (user) => 
      user.usuario === nombreUsuario || user.telefono === telefono 
    );

    if(existeUsuario) {
      rejected('Este usuario o telefono ya fue registrado.');
    } else {
      usuariosDB.push({
        ...usuario,
        id: usuariosDB.length+1
      });
      console.log(usuariosDB);
      resolve('Usuario registrado exitosamente.')
    }
  });
}

const formulario = document.getElementById('iniciarSesion');

formulario.onsubmit = (e) => {
  e.preventDefault();

  let target = e.target;
  let datos = target.children;

  if(datos[0].value !== '' && datos[1].value !== '' && datos[2].value !== '' && datos[3].value !== '' ) {
    registrarUsuario({
      usuario: datos[0].value,
      password: datos[1].value,
      telefono: datos[2].value,
      dinero: datos[3].value
    })
    .then((respuesta) => {
      alert(respuesta);
    })
    .catch((error) => {
      alert(error);
    })
  }
}



const contador = document.getElementById('contador');
const parrafoError = document.getElementById('error');
const formulario = document.getElementById('iniciarSesion');
let conteoEnSegundos = 0;

const interval = setInterval(() => {
  conteoEnSegundos++;
  contador.innerText = conteoEnSegundos;
}, 1000);

const timeOut = setTimeout(() => {
  parrafoError.classList.remove('hidden');
}, 10000);

formulario.onsubmit = (e) => {
  e.preventDefault();

  clearInterval(interval);
  clearTimeout(timeOut);
  alert(`Se logeo en ${conteoEnSegundos} segundos`);
}

setTimeout(() => {
  console.log('Pasaron 10 segundos')
}, 0);