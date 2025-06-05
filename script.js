  function actualizarContador() {
  const ahora = new Date();
  const opciones = { timeZone: "America/Chicago" };
  const ahoraCST = new Date(ahora.toLocaleString("en-US", opciones));

  const mañana = new Date(ahoraCST);
  mañana.setDate(mañana.getDate() + 1);
  mañana.setHours(0, 0, 0, 0);

  const diferencia = mañana - ahoraCST;

  const horas = String(Math.floor((diferencia / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutos = String(Math.floor((diferencia / (1000 * 60)) % 60)).padStart(2, '0');
  const segundos = String(Math.floor((diferencia / 1000) % 60)).padStart(2, '0');

  document.getElementById('contador').textContent = `${horas}:${minutos}:${segundos}`;

  if (diferencia <= 0) {
    document.getElementById('contador').style.display = 'none';
    document.getElementById('sorpresa').style.display = 'block';
    clearInterval(intervalo);
  }
}

function crearCorazones() {
  const contenedor = document.querySelector('.corazones');
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.animationDuration = (Math.random() * 3 + 3) + 's';
  contenedor.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}

setInterval(crearCorazones, 300);

const intervalo = setInterval(actualizarContador, 1000);
actualizarContador();
