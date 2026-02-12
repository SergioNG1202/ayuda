
const startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 4);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// 2. Efecto de escritura mejorado
const text = "Eres mi mejor código escrito.";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById('typed-text').textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// 3. Sistema de Partículas (Corazones de fondo)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
    
    document.getElementById('heart-particles').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 6000);
}

// Inicialización
setInterval(updateTimer, 1000);
setInterval(createHeart, 300); // Crea un corazón cada 300ms
updateTimer();
setTimeout(typeEffect, 1500);