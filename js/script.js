// ===== JavaScript para menú hamburguesa =====

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


//=====JavaScript seccion de lanchas slider pequeño ===//

let index = 0;
  const slides = document.querySelectorAll('.slide');

  function mostrarSiguienteSlide() {
    slides[index].classList.remove('activo');
    index = (index + 1) % slides.length;
    slides[index].classList.add('activo');
  }

  setInterval(mostrarSiguienteSlide, 3000); // Cambia cada 3 segundos


 



///testimonios///

let indiceTestimonio = 0;
const testimonios = document.querySelectorAll('.testimonio');
const slider = document.getElementById('sliderTestimonios');
const total = testimonios.length;

function actualizarSlider() {
  const anchoTarjeta = testimonios[0].offsetWidth + 32;
  slider.style.transform = `translateX(-${indiceTestimonio * anchoTarjeta}px)`;
}

function avanzarSlider() {
  if (indiceTestimonio < total - 3) {
    indiceTestimonio++;
  } else {
    indiceTestimonio = 0;
  }
  actualizarSlider();
}

// Botones manuales
document.getElementById('nextTestimonio').addEventListener('click', avanzarSlider);

document.getElementById('prevTestimonio').addEventListener('click', () => {
  if (indiceTestimonio > 0) indiceTestimonio--;
  actualizarSlider();
});

// Auto slide
setInterval(avanzarSlider, 5000);

// Ajustar al cambiar tamaño
window.addEventListener('resize', actualizarSlider);