// Traduções
const translations = {
  pt: {
    welcomeTitle: "Bem-vindo ao meu Portfólio",
    description: "Sou Avelino Teixeira, um Desenvolvedor Front-end...",
    skillsTitle: "Habilidades",
    skillsDescription: "Aqui estão algumas das minhas habilidades..."
  },
  en: {
    welcomeTitle: "Welcome to my Portfolio",
    description: "I am Avelino Teixeira, a Front-end Developer...",
    skillsTitle: "Skills",
    skillsDescription: "Here are some of my skills..."
  }
};

// Função para mudar o idioma
function changeLanguage(lang) {
  document.getElementById("welcome-title").innerText = translations[lang].welcomeTitle;
  document.getElementById("description").innerText = translations[lang].description;
  document.getElementById("skills-title").innerText = translations[lang].skillsTitle;
  document.getElementById("skills-description").innerText = translations[lang].skillsDescription;
}

// Event listeners para os botões
document.getElementById("pt-button").addEventListener("click", () => changeLanguage("pt"));
document.getElementById("en-button").addEventListener("click", () => changeLanguage("en"));

// Inicializa o idioma padrão
changeLanguage("pt"); // Ou "en" dependendo do idioma padrão que você deseja
