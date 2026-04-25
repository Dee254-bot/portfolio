// FADE-IN ANIMATION
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));


// TYPING EFFECT
const texts = [
    "web applications.",
    "Python backends.",
    "clean user interfaces.",
    "real-world systems."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            setTimeout(type, 500);
        }, 1500);
    } else {
        setTimeout(type, 60);
    }
}

type();