// Este código é para garantir que as imagens se repitam infinitamente
const slider = document.querySelector('.image-slider');

// Clone os elementos para que o movimento pareça infinito
const images = document.querySelectorAll('.image-slider img');
images.forEach(image => {
  const clone = image.cloneNode(true);
  slider.appendChild(clone);
});


