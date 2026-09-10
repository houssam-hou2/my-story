

const zone = document.querySelector(".particules");

if (zone) {
    for (let i = 0; i < 35; i++) {
        const particule = document.createElement("div");

        particule.classList.add("particule");

        particule.style.left = Math.random() * 100 + "%";
        particule.style.top = Math.random() * 100 + "%";

        particule.style.animationDelay = Math.random() * 4 + "s";

        zone.appendChild(particule);
    }
}
// Transition entre les pages

const liensNavigation = document.querySelectorAll(".navigation-parties a, .accueil .bouton");

liensNavigation.forEach(lien => {

    lien.addEventListener("click", function(event) {

        event.preventDefault();

        const destination = this.href;

        if (this.classList.contains("bouton") || this.textContent.trim() === "→") {
    document.body.classList.add("page-transition-next");
} else {
    document.body.classList.add("page-transition-prev");
}

        setTimeout(() => {
            window.location.href = destination;
        }, 800);

    });

});

const menuBouton = document.querySelector(".menu-bouton");
const menuContenu = document.querySelector(".menu-contenu");

menuBouton.addEventListener("click", function() {
    menuContenu.classList.toggle("menu-ouvert");
});
const retourHaut = document.querySelector(".retour-haut");

if (retourHaut) {
    retourHaut.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}



