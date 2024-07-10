


//Medidor de Habilidades
document.querySelectorAll('.skill').forEach(function(skill) {
  var ctx = skill.querySelector('.skill-canvas').getContext('2d');
  var skillValue = parseFloat(skill.getAttribute('data-value'));
  var currentPercent = 0;
  var animation;

  function drawCircle(progress) {
      ctx.clearRect(0, 0, 110, 110);
      ctx.beginPath();
      ctx.arc(55, 55, 50, -Math.PI / 2, (Math.PI * 2 * progress) - Math.PI / 2, false);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#12C2E9';
      ctx.stroke();
  }

  function updatePercentage(percent) {
      skill.querySelector('.skill-percent').textContent = Math.round(percent * 100) + "%";
  }

  function animateSkill() {
      animation = setInterval(function() {
          if (currentPercent >= skillValue) {
              clearInterval(animation);
              setTimeout(resetSkill, 5000); // Descarrega e recarrega após 5 segundos
          } else {
              currentPercent += 0.01; // Velocidade da animação
              drawCircle(currentPercent);
              updatePercentage(currentPercent);
          }
      }, 15); // Tempo entre cada frame da animação
  }

  function resetSkill() {
      currentPercent = 0;
      animateSkill();
  }

  animateSkill(); // Inicia a animação quando o script é carregado
});



//Animation text description

const textElement = document.getElementById('typing-text');
const texts = [
  'Desenvolvedor Full-Stack',
  'Especialista em UX/UI Design'
]; // Array com os textos que deseja animar
const delay = 1000; // Tempo de atraso entre apagar e reescrever o texto (em milissegundos)
const typingSpeed = 100; // Velocidade de digitação (em milissegundos)

let currentTextIndex = 0;

function typeText() {
  let i = 0;
  let text = texts[currentTextIndex];
  
  let typingInterval = setInterval(function() {
    textElement.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
      setTimeout(eraseText, delay);
    }
  }, typingSpeed);
}

function eraseText() {
  let textLength = textElement.textContent.length;
  let eraseInterval = setInterval(function() {
    textElement.textContent = textElement.textContent.slice(0, textLength - 1);
    textLength--;
    if (textLength === 0) {
      clearInterval(eraseInterval);
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Avança para o próximo texto no array circularmente
      setTimeout(typeText, delay);
    }
  }, typingSpeed);
}

// Iniciar o processo
typeText();





// Header On Scroll Color Change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


// Remove Menu On Click Any Menu Link
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    // reset: true
})

sr.reveal('.home-text,.buds-text',{origin: 'left'})
sr.reveal('.home-img,.buds-img',{origin: 'right'})
sr.reveal('.heading',{delay: 200})
sr.reveal('.specs-detais .box',{origin: 'left', interval:200})
sr.reveal('.specs-img',{delay: 600})
sr.reveal('.shop-container .box,.footer .logo,.footer .footer-box',{ interval:150})