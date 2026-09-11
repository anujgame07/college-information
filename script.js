// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "75px";
        navLinks.style.right = "20px";
        navLinks.style.background = "white";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "15px";
        navLinks.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
    }
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            navLinks.style.display = "none";
        }
    });
});


// Reveal animation
const elements = document.querySelectorAll(
    ".course-card, .facility, .about-card, .contact-grid div"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all .7s ease";

    observer.observe(element);

});