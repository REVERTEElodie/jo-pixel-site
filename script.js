
/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    document.querySelectorAll(".main-nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}


/* =========================
   FILTRES DES CREATIONS
========================= */

const filterButtons = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        workCards.forEach(card => {
            card.hidden = filter !== "tout" &&
                          card.dataset.category !== filter;
        });
    });
});


/* =========================
   AGRANDISSEMENT DES IMAGES
========================= */

function agrandirImage(image) {
    const lightbox = document.getElementById("lightbox");
    const imageAgrandie = document.getElementById("imageAgrandie");

    if (!lightbox || !imageAgrandie) {
        console.error("La fenêtre d'agrandissement est absente.");
        return;
    }

    imageAgrandie.src = image.src;
    imageAgrandie.alt = image.alt;

    lightbox.style.display = "flex";
}

function fermerImage() {
    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    }
}

/* Fermeture avec la touche Echap */
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        fermerImage();
    }
});


/* =========================
   ANNEE AUTOMATIQUE DU FOOTER
========================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
