let formulario = document.getElementById('iniciarSesion');

formulario.onsubmit = (e) => {
  e.preventDefault();

  // validaciones
  // checamos en base de datos

  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No existe ningun usuario con ese nombre.'
  })
} 

const { DateTime, Interval, Duration } = luxon;

const ahora = DateTime.now();
const duration = Duration.fromObject({ month: 1, days: 10, hours: 5 });
const agregandoDuracion = ahora.plus(duration);
const restandoDuracion = ahora.minus(duration);
const intervaloDeDuracions = Interval.fromDateTimes(restandoDuracion, agregandoDuracion);


console.log( agregandoDuracion.toString(DateTime.DATE_SHORT) );
console.log( restandoDuracion.toString() );
console.log(intervaloDeDuracions.length('minutes'))