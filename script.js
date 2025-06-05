function crearCorazones() {
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
