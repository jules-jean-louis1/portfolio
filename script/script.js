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