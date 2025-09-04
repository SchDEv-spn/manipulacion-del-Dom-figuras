function circulo() {
    document.getElementById('figure').style.borderRadius = "50%";
}


function estrella() {
    document.getElementById('figure').style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
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

    let posY = 0; 

    btnDown.addEventListener("click", () => {
        posY += 20; 
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
function cambiarTitulo() {
    const title = document.getElementById("mainTitle");
    const btnTitle = document.getElementById("btnChangeTitle");

    btnTitle.addEventListener("click", () => {
        title.innerText = prompt("Escribe el nuevo título:");
    });
}
function cambiarParrafo() {
    document.getElementById("btnChangeParagraph").addEventListener("click", () => {
        document.getElementById("mainParagraph").innerText = prompt("Escribe el nuevo párrafo:");
    });
}
function agregarParrafo() {
    document.getElementById("btnAddParagraph").addEventListener("click", () => {
        document.getElementById("extraParagraphs").innerHTML += `<p>${prompt("Escribe el nuevo párrafo:")}</p>`;
    });
}
function deleteParrafo(){
    const parrafox = document.getElementById('extraParagraphs');
    parrafox.remove();
}
function hexColor() {
    document.getElementById('figure').style.backgroundColor = prompt("Color HEX:");
}
function elegirFigura() {
    const opcion = prompt("Elige una figura:\n1: Cuadrado\n2: Estrella\n3: Círculo");

    switch(opcion) {
        case "1": // cuadrado
          const figura =document.getElementById('figure')
            figura.style.clipPath = "none";
            figura.style.borderRadius = "0";
            figura.style.background = "green";
            break;

        case "2": // estrella
            estrella();
            break;

        case "3": // circulo
            circulo();
            break;

        default:
            alert("Opción no válida");
    }
}
let imgIndex = 0;
const imgs = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
function cambiarImagen() {
    imgIndex = (imgIndex + 1) % imgs.length;
    document.getElementById('mainImage').src = imgs[imgIndex];
}
function cambiarAtras() {
    imgIndex = (imgIndex - 1 + imgs.length) % imgs.length;
    document.getElementById('mainImage').src = imgs[imgIndex];
}
document.getElementById('btnCircle').addEventListener('click', circulo);
document.getElementById('btnStar').addEventListener('click', estrella);
document.addEventListener("DOMContentLoaded", gif);
document.addEventListener("DOMContentLoaded", animacion);
document.addEventListener("DOMContentLoaded", moverArriba);
document.addEventListener("DOMContentLoaded", moverAbajo);
document.addEventListener("DOMContentLoaded", moverIzquierda);
document.addEventListener("DOMContentLoaded", moverDerecha);
document.addEventListener("DOMContentLoaded", cambiarTitulo);
document.addEventListener("DOMContentLoaded", cambiarParrafo);
document.addEventListener("DOMContentLoaded", agregarParrafo);
document.getElementById('btnRemoveParagraph').addEventListener('click', deleteParrafo);
document.getElementById('btnHexColor').addEventListener('click', hexColor);
document.getElementById('btnChooseFigure').addEventListener('click', elegirFigura);
document.getElementById('btnChangeImageNext').addEventListener('click', cambiarImagen);
document.getElementById('btnChangeImagePrev').addEventListener('click', cambiarAtras);

