function circulo() {
    document.getElementById('figure').style.borderRadius = "50%";
    figure.style.background = "green"
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
    const figura = document.getElementById('figure')
    figura.style.animation = "mover 2s infinite alternate linear";
    figura.style.background = "blue";
}
function moverArriba() {
    document.getElementById('figure').style.transform = "translateY(-50px)";
}
function moverAbajo() {
    document.getElementById('figure').style.transform = "translateY(50px)";
}
function moverIzquierda() {
    document.getElementById('figure').style.transform = "translateX(-50px)";
}
function moverDerecha() {
    document.getElementById('figure').style.transform = "translateX(50px)";
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
function deleteParrafo() {
    const parrafox = document.getElementById('extraParagraphs');
    parrafox.remove();
}
function hexColor() {
    document.getElementById('figure').style.backgroundColor = prompt("Color HEX:");
}
function elegirFigura() {
    const opcion = prompt("Elige una figura:\n1: Cuadrado\n2: Estrella\n3: Círculo");

    switch (opcion) {
        case "1": // cuadrado
            const figura = document.getElementById('figure')
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
function mostOcul() {
    let img = document.getElementById('mainImage');
    img.style.display = img.style.display === "none" ? "block" : "none";
}
function cambiarAlt() {
    document.getElementById('mainImage').alt = prompt("Nuevo ALT:");
}
function cambiarLink() {
    document.getElementById('mainLink').href = prompt("Nueva URL:");
}
function abrirLink() {
    window.open("https://github.com/SchDEv-spn", "_blank");
    const enlace = document.getElementById('mainLink');
    enlace.href = "https://github.com/SchDEv-spn";
    enlace.textContent = "Visitar mi GitHub";
    enlace.target = "_blank";
}
function deshabilitarLink() {
    let link = document.getElementById('mainLink');
    link.removeAttribute("href");
}
document.getElementById('btnCircle').addEventListener('click', circulo);
document.getElementById('btnStar').addEventListener('click', estrella);
document.addEventListener("DOMContentLoaded", gif);
document.getElementById("btnAnim").addEventListener("click", animacion);
document.getElementById('btnMoveUp').addEventListener('click', moverArriba);
document.getElementById('btnMoveDown').addEventListener('click', moverAbajo);
document.getElementById('btnMoveLeft').addEventListener('click', moverIzquierda);
document.getElementById('btnMoveRight').addEventListener('click', moverDerecha);
document.addEventListener("DOMContentLoaded", cambiarTitulo);
document.addEventListener("DOMContentLoaded", cambiarParrafo);
document.addEventListener("DOMContentLoaded", agregarParrafo);
document.getElementById('btnRemoveParagraph').addEventListener('click', deleteParrafo);
document.getElementById('btnHexColor').addEventListener('click', hexColor);
document.getElementById('btnChooseFigure').addEventListener('click', elegirFigura);
document.getElementById('btnChangeImageNext').addEventListener('click', cambiarImagen);
document.getElementById('btnChangeImagePrev').addEventListener('click', cambiarAtras);
document.getElementById('btnToggleImage').addEventListener('click', mostOcul);
document.getElementById('btnChangeAlt').addEventListener('click', cambiarAlt);
document.getElementById('btnChangeLink').addEventListener('click', cambiarLink);
document.getElementById('btnOpenLink').addEventListener('click', abrirLink);
document.getElementById('btnDisableLink').addEventListener('click', deshabilitarLink);