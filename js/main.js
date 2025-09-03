function circulo() {
    const figure = document.getElementById("figure");
    const btnCircle = document.getElementById("btnCircle");

    btnCircle.addEventListener("click", () => {
        figure.style.borderRadius = "50%";
        figure.style.background = "green";
        
    });
}

function estrella() {
    const figure = document.getElementById("figure");
    const btnStar = document.getElementById("btnStar");

    btnStar.addEventListener("click", () => {
        figure.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, " +
                                "79% 91%, 50% 70%, 21% 91%, 32% 57%, " +
                                "2% 35%, 39% 35%)";
        figure.style.background = "green";
    });
}

function gif() {
    const figure = document.getElementById("figure");
    const btnGif = document.getElementById("btnGif");

    btnGif.addEventListener("click", () => {
        figure.style.backgroundImage = "url('img/gif.gif')";
        figure.style.backgroundSize = "cover";
    });
}
function animacion() {
    const figure = document.getElementById("figure");
    const btnAnim = document.getElementById("btnAnim");

    btnAnim.addEventListener("click", () => {
        if (figure.style.transform === "rotate(360deg)") {
            figure.style.transform = "rotate(0deg)";
        } else {
            figure.style.transform = "rotate(360deg)";
        }
    });
}
function moverArriba() {
    const figure = document.getElementById("figure");
    const btnUp = document.getElementById("btnMoveUp");

    let posY = 0; 

    btnUp.addEventListener("click", () => {
        posY -= 20; 
        figure.style.transform = `translateY(${posY}px)`;
    });
}
function moverAbajo() {
    const figure = document.getElementById("figure");
    const btnDown = document.getElementById("btnMoveDown");

    let posY = 0; // posición inicial

    btnDown.addEventListener("click", () => {
        posY += 20; // bajar 20px
        figure.style.transform = `translateY(${posY}px)`;
    });
}
function moverIzquierda() {
    const figure = document.getElementById("figure");
    const btnLeft = document.getElementById("btnMoveLeft");

    let posX = 0; 

    btnLeft.addEventListener("click", () => {
        posX -= 20; 
        figure.style.transform = `translateX(${posX}px)`;
    });
}
function moverDerecha() {
    const figure = document.getElementById("figure");
    const btnRight = document.getElementById("btnMoveRight");

    let posX = 0;

    btnRight.addEventListener("click", () => {
        posX += 20; 
        figure.style.transform = `translateX(${posX}px)`;
    });
}



document.addEventListener("DOMContentLoaded", circulo);
document.addEventListener("DOMContentLoaded", estrella);
document.addEventListener("DOMContentLoaded", gif);
document.addEventListener("DOMContentLoaded", animacion);
document.addEventListener("DOMContentLoaded", moverArriba);
document.addEventListener("DOMContentLoaded", moverAbajo);
document.addEventListener("DOMContentLoaded", moverIzquierda);
document.addEventListener("DOMContentLoaded", moverDerecha);
