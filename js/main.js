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







document.addEventListener("DOMContentLoaded", circulo);
document.addEventListener("DOMContentLoaded", estrella);
document.addEventListener("DOMContentLoaded", gif);
