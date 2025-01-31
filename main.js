window.onload = function () {
  window.scrollTo(0, 0); // Faz a página iniciar do topo ao recarregar
};


let lastScrollTop = 0; // Armazena a última posição do scroll

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const firstSection = document.querySelector("section"); // Pega a primeira seção da página
    let scrollTop = window.scrollY; // Posição atual do scroll

    if (scrollTop > firstSection.offsetTop) { 
        // Só adiciona a sombra se a navbar ultrapassou a primeira seção
        if (scrollTop > lastScrollTop) { 
            nav.classList.add("shadow-down"); // Quando desce a página, a sombra aparece
        } else {
            nav.classList.remove("shadow-down"); // Quando sobe a página, a sombra desaparece
        }
    } else {
        nav.classList.remove("shadow-down"); // Remove a sombra se estiver no topo
    }

    lastScrollTop = scrollTop; // Atualiza a última posição do scroll
});

// Função para exibir/ocultar o menu hambúrguer
function menuShow() {
  const ul = document.querySelector('nav ul'); // Acessa a lista de navegação
  if (ul.classList.contains('open')) {
      ul.classList.remove('open'); // Se a lista estiver visível, esconde
  } else {
      ul.classList.add('open'); // Se a lista estiver escondida, exibe
  }
}



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

// Função para rolagem suave corrigindo deslocamento da navbar
function scrollToSection(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Ajuste da altura da navbar
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

// Adiciona evento de clique a todos os links da navbar
navLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
});

// Atualiza o link ativo conforme a rolagem da página
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 81; // Ajuste para compensar a navbar fixa
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});




// Atualização para barras de progresso lineares
document.querySelectorAll('.skill-bar-fill').forEach(function (skillBar) {
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


