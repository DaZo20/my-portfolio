const translations = {
  es: {
    logo: "👨‍💻 David Muñoz",
    "nav-inicio": "Inicio",
    "nav-sobremi": "Sobre mí",
    "nav-proyectos": "Proyectos",
    "nav-skills": "Skills",
    "nav-contacto": "Contacto",
    "descargar-cv": "Descargar CV",
    "sobremi-titulo": "Sobre mí",
    "sobremi-texto":
      "Soy un desarrollador Android apasionado por crear experiencias móviles modernas, fluidas y funcionales.",
    "proyectos-titulo": "Proyectos",
    "skills-titulo": "Skills",
    "contacto-titulo": "Contacto",
    "contacto-texto":
      "Puedes contactarme a través de <a href='mailto:tuemail@example.com'>tuemail@example.com</a>",
  },
  en: {
    logo: "👨‍💻 David Muñoz",
    "nav-inicio": "Home",
    "nav-sobremi": "About Me",
    "nav-proyectos": "Projects",
    "nav-skills": "Skills",
    "nav-contacto": "Contact",
    "descargar-cv": "Download CV",
    "sobremi-titulo": "About Me",
    "sobremi-texto":
      "I’m an Android developer passionate about building modern, smooth and functional mobile experiences.",
    "proyectos-titulo": "Projects",
    "skills-titulo": "Skills",
    "contacto-titulo": "Contact",
    "contacto-texto":
      "You can reach me at <a href='mailto:tuemail@example.com'>tuemail@example.com</a>",
  },
  ca: {
    logo: "👨‍💻 David Muñoz",
    "nav-inicio": "Inici",
    "nav-sobremi": "Sobre mi",
    "nav-proyectos": "Projectes",
    "nav-skills": "Habilitats",
    "nav-contacto": "Contacte",
    "descargar-cv": "Descarrega CV",
    "sobremi-titulo": "Sobre mi",
    "sobremi-texto":
      "Sóc un desenvolupador Android apassionat per crear experiències mòbils modernes, fluïdes i funcionals.",
    "proyectos-titulo": "Projectes",
    "skills-titulo": "Habilitats",
    "contacto-titulo": "Contacte",
    "contacto-texto":
      "Pots contactar amb mi a través de <a href='mailto:tuemail@example.com'>tuemail@example.com</a>",
  },
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  changeLanguage(savedLang);
  updateCurrentLangLabel(savedLang);
  updateLanguageButtons(savedLang);

  document.querySelectorAll(".lang-option").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang-btn");
      if (lang && translations[lang]) {
        changeLanguage(lang);
        updateCurrentLangLabel(lang);
        updateLanguageButtons(lang);
      }
    });
  });
});

function updateCurrentLangLabel(lang) {
  const label = document.getElementById("current-lang");
  if (label) {
    label.textContent = lang.toUpperCase();
  }
}

function updateLanguageButtons(currentLang) {
  const container = document.querySelector(".lang-options");
  const buttons = Array.from(container.querySelectorAll(".lang-option"));

  buttons.forEach((btn) => {
    btn.style.display = "inline";
    btn.style.pointerEvents = "auto";
  });

  const selectedButton = buttons.find(
    (btn) => btn.getAttribute("data-lang-btn") === currentLang
  );

  if (selectedButton) {
    container.prepend(selectedButton);

    if (!languageSelector.classList.contains("expanded")) {
      selectedButton.style.pointerEvents = "none";
    }
  }
}


const languageSelector = document.getElementById("language-selector");

languageSelector.addEventListener("mouseenter", () => {
  languageSelector.classList.add("expanded");
});

languageSelector.addEventListener("mouseleave", () => {
  languageSelector.classList.remove("expanded");
});
