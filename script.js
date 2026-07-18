const words =[
"Full Stack Developer",
"Frontend Developer",
"UI Designer",
"Programmer"
];

const themeBtn =
document.getElementById("theme-btn");

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

});

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting){
document.getElementById("typing").textContent=
currentWord.substring(0,charIndex++);
}else {
document.getElementById("typing").textContent=
currentWord.substring(0,charIndex--);
}

if(charIndex > currentWord.length) {
isDeleting = true;
setTimeout(typeEffect,1000);
return;
}

if(charIndex <0) {
isDeleting = false;
wordIndex = (wordIndex + 1) %words.length;
charIndex = 0;
}

setTimeout(typeEffect,isDeleting ? 50:120);
}

typeEffect();

const hiddenElements =
document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if(entry.isIntersecting) {
    entry.target.classList.add("show");
}
});
});

hiddenElements.forEach((el) => observer.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("nav ul a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });





























































































