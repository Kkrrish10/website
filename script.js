// Year auto update
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Animated Counters
const counters = document.querySelectorAll(".count");
let started = false;

function startCounters() {
    if (!started && window.scrollY > 200) {
        counters.forEach(counter => {
            let target = +counter.dataset.target;
            let count = 0;
            let speed = target / 80;

            function update() {
                if (count < target) {
                    count += speed;
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            }
            update();
        });
        started = true;
    }
}

window.addEventListener("scroll", startCounters);

// Fade-in animations
document.querySelectorAll('.fade-up').forEach(el => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    });
    observer.observe(el);
});

// Auto-play Testimonials (if added)
let tIndex = 1;
setInterval(() => {
    const radio = document.getElementById("t" + tIndex);
    if (radio) radio.checked = true;
    tIndex = tIndex === 3 ? 1 : tIndex + 1;
}, 3500);


    document.getElementById("openRegBtn").addEventListener("click", function () {
        window.open("C:\Users\Abhibhava Krrish\Desktop\DSU SITE\Form.html", "_blank");
    });
