const nav = document.querySelector(".scroller");
	
window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
})

// Barre de defilement lors du scroll
const scrollbar = document.getElementById("scrollbar");
const totalHeight = document.body.scrollHeight - window.innerHeight;
window.innerHeight;

// ajouter la barre de defilement lors du defilement
window.addEventListener("scroll", function(){
  // Obtenir la position de défilement actuelle
  const scrollPosition = window.pageYOffset;
  
  // Calculer la largeur de la barre de défilement
  const scrollPercent = (scrollPosition / totalHeight) * 100;
  
  // Update the width of the scrollbar div
  scrollbar.style.width = scrollPercent + "%";
});

// Défilement du button contact
const button = document.getElementById("btnContactDefilAuto");
function startMarquee() {
  button.classList.add("marquee");
}

function stopMarquee() {
  button.classList.remove("marquee");
}
button.addEventListener("mouseover", startMarquee);
button.addEventListener("mouseout", stopMarquee);


//Afficher une image au survol du projet


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".cacheranime");
const hiddenElements2 = document.querySelectorAll(".hiddenanime2");
const imageLeft = document.querySelectorAll(".imageGauche");
const imageRight = document.querySelectorAll(".imageDroite");
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
imageLeft.forEach((el) => observer.observe(el));
imageRight.forEach((el) => observer.observe(el));


const html5 = document.querySelector("#html5");
const css3 = document.querySelector("#css3");
const javascript = document.querySelector("#javascript");
const php = document.querySelector("#php");
const nodejs = document.querySelector("#nodejs");

// frameWork
const bootstrap = document.querySelector("#bootstrap");
const jquery = document.querySelector("#jquery");
const react = document.querySelector("#react");
const tailwind = document.querySelector("#tailwind");

const titleHtml5 = document.querySelector("#titleHtml5");
const titleCss3 = document.querySelector("#titleCss3");
const titleJavascript = document.querySelector("#titleJavascript");
const titlePhp = document.querySelector("#titlePhp");
const titleNodejs = document.querySelector("#titleNodejs");

// frameWork
const titleBootstrap = document.querySelector("#titleBootstrap");
const titleJquery = document.querySelector("#titleJquery");
const titleReact = document.querySelector("#titleReact");
const titleTailwind = document.querySelector("#titleTailwind");

function displayTitle(svg, title) {
    svg.addEventListener("mouseover", () => {
        title.classList.remove("hidden");
    });
    svg.addEventListener("mouseout", () => {
        title.classList.add("hidden");
    });
}
displayTitle(html5, titleHtml5);
displayTitle(css3, titleCss3);
displayTitle(javascript, titleJavascript);
displayTitle(php, titlePhp);
displayTitle(nodejs, titleNodejs);

// frameWork
displayTitle(bootstrap, titleBootstrap);
displayTitle(jquery, titleJquery);
displayTitle(react, titleReact);
displayTitle(tailwind, titleTailwind);

