function openEnvelope() {
    // Rotar la tapa del sobre hacia arriba
    document.querySelector(".top").style.transform = "rotateX(180deg)";

    // Mostrar la carta con animación
    setTimeout(() => {
        let letter = document.getElementById("letter");
        letter.style.display = "block";
        letter.style.transform = "translate(-50%, -50%)"; // La carta sube desde el sobre
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
    if (newSize >= 20) { 
        noBtn.style.display = "none";
        return; // Salimos de la función para que el botón "No" no se mueva más
    }

    // Obtener las dimensiones de la carta
    let letterRect = letter.getBoundingClientRect();
    
    // Definir límites de movimiento (alrededor de la carta)
    let minX = letterRect.left + 20; // Un poco a la derecha del borde izquierdo
    let maxX = letterRect.right - noBtn.clientWidth - 20; // Un poco antes del borde derecho
    let minY = letterRect.top + 20; // Un poco abajo del borde superior
    let maxY = letterRect.bottom - noBtn.clientHeight - 20; // Un poco antes del borde inferior

    // Generar nuevas coordenadas dentro de los límites
    let randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    let randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    // Aplicar nueva posición al botón "No"
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
function goToPage(url) {
    window.location.href = url;
}

function resizeYesAndMoveNo() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    yesBtn.style.transform = "scale(1.5)";
    noBtn.style.position = "relative";
    noBtn.style.left = "50px";
}
