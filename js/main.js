function circulo() {
    const figure = document.getElementById("figure");
    const btnCircle = document.getElementById("btnCircle");

    btnCircle.addEventListener("click", () => {
        figure.style.borderRadius = "50%";
        figure.style.background = "green";
    });
}











document.addEventListener("DOMContentLoaded", circulo);
document.addEventListener("DOMContentLoaded", estrella);
