// Función para abrir el sobre (no se necesita cambios)
function openEnvelope() {
    document.querySelector(".top").style.transform = "rotateX(180deg)";

    setTimeout(() => {
        let letter = document.getElementById("letter");
        letter.style.display = "block";
        letter.style.transform = "translate(-50%, -50%)";
    }, 500);
}

// 📌 Función para redirigir a otra página
function goToPage(url) {
    window.location.href = url;
}

// 📌 Función para hacer crecer el botón "Sí" y mover el botón "No" aleatoriamente
function resizeYesAndMoveNo() {
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");
    let letter = document.getElementById("letter");

    // Obtener el tamaño actual del botón "Sí"
    let currentScale = yesBtn.style.transform.match(/scale\(([\d.]+)\)/);
    let newSize = currentScale ? parseFloat(currentScale[1]) + 3.4 : 1.2; // Si no tiene scale, iniciar en 1.2

    // Aplicar nuevo tamaño al botón "Sí"
    yesBtn.style.transform = `scale(${newSize})`;

    // Ocultar el botón "No" si el tamaño del botón "Sí" es demasiado grande
    if (newSize >= 25) {
        noBtn.style.display = "none";
        return;
    }

    // Obtener las dimensiones de la carta
    let letterRect = letter.getBoundingClientRect();
    
    // Definir límites de movimiento (alrededor de la carta)
    let minX = letterRect.left + 20;
    let maxX = letterRect.right - noBtn.clientWidth - 20;
    let minY = letterRect.top + 20;
    let maxY = letterRect.bottom - noBtn.clientHeight - 20;

    // Generar nuevas coordenadas dentro de los límites
    let randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    let randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    // Aplicar nueva posición al botón "No"
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
