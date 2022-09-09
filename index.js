
// Activate reveal on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("revealOnScroll")
        } else {
            reveals[i].classList.remove("revealOnScroll");
        }
    }
}

// Scale in
window.addEventListener("scroll", scaleIn);

function scaleIn() {
    const scales = document.querySelectorAll(".scale");
    for (let i = 0; i < scales.length; i++) {
        let windowHeight = window.innerHeight;
        let scaleTop = scales[i].getBoundingClientRect().top;
        let scalePoint = 100;

        if (scaleTop < windowHeight - scalePoint) {
            scales[i].classList.add("scaleOnScroll")
        } else {
            scales[i].classList.remove("scaleOnScroll");
        }
    }
}


let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")

sideNav.style.right = '-70rem';
menuBtn.onclick = function () {
    if (sideNav.style.right === "-70rem") {
        sideNav.style.right = '0';
        menu.src = "img/close.png";
        // menuBtn.style.position = "fixed"
    }
    else {
        sideNav.style.right = '-70rem';
        menu.src = "img/menu.png";
    }
}