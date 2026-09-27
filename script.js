// Current year
document.getElementById("year").textContent = new Date().getFullYear();


// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// Reveal sections while scrolling
const sections = document.querySelectorAll(".section, .contact");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.12
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// Mouse glow effect
document.addEventListener("mousemove", event => {

    const x = event.clientX;
    const y = event.clientY;

    document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}px`
    );

});