// Lista de palabras para mostrar aleatoriamente
const words = ["Adrian", "Sol", "Corazon", "TE QUIERO", "Bonita", "hermosa", "TKM", "Mirador","Sol y Adrian"];

// Función para crear corazones o palabras aleatorias
function createHeartOrWord() {
    let element = document.createElement("div");

    // Decidir aleatoriamente si crear un corazón o una palabra
    if (Math.random() > 0.5) {
        // Crear un corazón
        element.className = "heart";
        element.innerHTML = "❤️";
    } else {
        // Crear una palabra aleatoria
        element.className = "word";
        element.innerHTML = words[Math.floor(Math.random() * words.length)];
        element.style.fontSize = Math.random() * 20 + 15 + "px"; // Tamaño de fuente aleatorio
        element.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Color aleatorio
    }

    // Posición aleatoria en la pantalla
    element.style.left = Math.random() * 100 + "vw";
    element.style.top = Math.random() * 100 + "vh"; // Para que también suban y bajen
    element.style.animationDuration = Math.random() * 7 + 4 + "s"; // Duración aleatoria

    document.querySelector(".hearts-container").appendChild(element);

    // Eliminar el elemento después de la animación
    setTimeout(() => {
        element.remove();
    }, 10000); // Un poco más del tiempo máximo de animación
}

// Crear muchos corazones o palabras al inicio
for (let i = 0; i < 100; i++) {
    createHeartOrWord();
}

// Generar elementos continuamente cada 300ms
setInterval(createHeartOrWord, 50);
