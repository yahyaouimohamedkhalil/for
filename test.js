// Message de bienvenue
window.addEventListener("load", () => {
    alert("Bienvenue dans mon Portfolio !");
});

// Bouton Voir mes projets
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    document.querySelector(".projects").scrollIntoView({
        behavior: "smooth"
    });
});

// Animation simple des cartes projets
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

// Formulaire contact
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    if(name === "" || email === "" || message === ""){
        alert("Veuillez remplir tous les champs !");
    } else {
        alert("Message envoyé avec succès !");
        form.reset();
    }
});

// Effet dynamique sur le header lors du scroll
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#007bff";
        header.style.transition = "0.3s";
    } else {
        header.style.background = "#222";
    }

});