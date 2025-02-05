const canvas = document.getElementById("glitterCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5, // Começa do meio para cima
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        color: `hsl(${Math.random() * 360}, 100%, 80%)` // Cores brilhantes
    };     
}

function initParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(createParticle());
    }        
}
    
function updateParticles() {
    particles.forEach((p, index) => {
        p.y += p.speedY;
        p.opacity -= 0.005; // Vai desaparecendo
        if (p.opacity <= 0) {
            particles[index] = createParticle(); // Substitui partículas desaparecidas
        }
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initParticles();
animate();