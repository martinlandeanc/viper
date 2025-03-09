// 🎆 Fondo animado con partículas
const canvasFondo = document.createElement("canvas");
const ctxFondo = canvasFondo.getContext("2d");
document.body.appendChild(canvasFondo);
canvasFondo.style.position = "fixed";
canvasFondo.style.top = "0";
canvasFondo.style.left = "0";
canvasFondo.style.zIndex = "-1";
canvasFondo.width = window.innerWidth;
canvasFondo.height = window.innerHeight;

const particlesFondo = [];
const numParticlesFondo = 100;

for (let i = 0; i < numParticlesFondo; i++) {
    particlesFondo.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2 + 1,
        dx: Math.random() * 1 - 0.5,
        dy: Math.random() * 1 - 0.5
    });
}

function animateParticlesFondo() {
    ctxFondo.clearRect(0, 0, canvasFondo.width, canvasFondo.height);
    ctxFondo.fillStyle = "rgba(94, 229, 247, 0.7)"; // Azul neón

    particlesFondo.forEach(p => {
        ctxFondo.beginPath();
        ctxFondo.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctxFondo.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvasFondo.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvasFondo.height) p.dy *= -1;
    });

    requestAnimationFrame(animateParticlesFondo);
}

animateParticlesFondo();

// 📜 Efecto de máquina de escribir para el mensaje de bienvenida
const textoBienvenida = `Bienvenidx!
Viper es una crew de entrenamiento coreográfico, trabajamos diferentes técnicas y buscamos potenciar el talento tanto individual como grupal.
También contamos con una hs semanal de acrobacia.
¡Te invitamos a completar el formulario y nos pondremos en contacto!`;

let i = 0;
function escribirTexto() {
    if (i < textoBienvenida.length) {
        document.getElementById("texto-escritura").innerHTML += textoBienvenida.charAt(i);
        i++;
        setTimeout(escribirTexto, 40);
    }
}

document.addEventListener("DOMContentLoaded", escribirTexto);

// 📩 Modal para el formulario de inscripción
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-formulario");
    const btn = document.getElementById("boton-inscripcion");
    const span = document.getElementsByClassName("cerrar")[0];
    const iframe = document.getElementById("iframe-formulario");

    btn.onclick = function() {
        iframe.src = "https://forms.gle/ATRS9drBxe1pkzz17"; // aca lo cambio pro si rompo
        modal.style.display = "block"; 
    }

    span.onclick = function() {
        modal.style.display = "none";
        iframe.src = ""; // Limpia el src para evitar problemas de carga
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".carrusel-imagenes");

    carrusel.addEventListener("mouseenter", () => {
        carrusel.style.animationPlayState = "paused";
    });

    carrusel.addEventListener("mouseleave", () => {
        carrusel.style.animationPlayState = "running";
    });
});

