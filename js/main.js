
// Atualização para barras de progresso lineares
document.querySelectorAll('.skill-bar-fill').forEach(function(skillBar) {
  // Obtenha o valor de preenchimento da barra de progresso a partir do atributo 'data-percentage'
  const percentage = parseInt(skillBar.getAttribute('data-percentage'));
  skillBar.style.width = '0%'; // Inicia a barra de progresso com 0% para efeito de animação

  // Função de animação para preencher a barra gradualmente
  function animateSkillBar() {
      let currentWidth = 0;
      const interval = setInterval(() => {
          if (currentWidth >= percentage) {
              clearInterval(interval); // Para a animação quando o valor é alcançado
          } else {
              currentWidth++; // Aumenta a largura da barra
              skillBar.style.width = `${currentWidth}%`;
              skillBar.textContent = `${currentWidth}%`; // Atualiza o texto exibido
          }
      }, 15); // Tempo entre cada incremento
  }

  // Inicia a animação ao carregar o script
  animateSkillBar();
});







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