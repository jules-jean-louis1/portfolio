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


/* spinningProject.addEventListener('mouseover', function() {
    let image = document.createElement("div");
    image.id = "image";
    let img = document.createElement("img");
    img.src = "images-cv/projet/rsalles.jpg";
    img.alt = "";
    image.appendChild(img);
    spinningProject.appendChild(image);
});

spinningProject.addEventListener('mouseout', function() {
    let image = document.getElementById("image");
    spinningProject.removeChild(image);
}); */
