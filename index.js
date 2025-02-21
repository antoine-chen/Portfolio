// Effet de scroll avec apparition progressive des éléments
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Effet au survol des boîtes de projets
const projetBoxes = document.querySelectorAll(".projetBox");
projetBoxes.forEach((box) => {
    const imgP = box.querySelector(".imgP"); 
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.2)";
        box.style.transition = "transform 0.3s ease";
        box.style.boxShadow = "0 0 30px 10px rgba(255, 255, 255, 0.8)";
        if (imgP) {
            imgP.style.transition = "filter 0.3s ease";
            imgP.style.filter = "blur(2px)";
        }
    });
    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
        imgP.style.boxShadow = "none";
        if (imgP) {
            imgP.style.filter = "none";
        }
    });
});

// Changement de couleur et animation au survol des liens
const links = document.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#00ffff";
        link.style.transition = "color 0.3s ease";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "white";
    });
});

// Soulignement du texte quand un lien est cliqué (y compris "Retour")
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        links.forEach((l) => l.classList.remove("active")); 
        link.classList.add("active"); 
        setTimeout(() => {
            window.location.href = link.href;
        }, 300); 
    });
});