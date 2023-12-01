const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

var w, h, balls = [];
var mouse = {
	x: undefined,
	y: undefined
}

var hex = [
    "#1abc9c",   // Turquesa
    "#2ecc71",   // Esmeralda
    "#3498db",   // Azul Claro
    "#9b59b6",   // Morado
    "#f1c40f",   // Amarillo
    "#e67e22",   // Naranja
    "#e74c3c",   // Rojo
    "#34495e",   // Gris Azulado
    "#16a085",   // Verde Mar
    "#27ae60",   // Verde Esmeralda
    "#2980b9",   // Azul Botella
    "#8e44ad",   // Púrpura
    "#f39c12",   // Naranja Oscuro
    "#d35400",   // Calabaza
    "#c0392b",   // Granate
    "#bdc3c7",   // Plata
    "#7f8c8d",   // Gris Azulado Oscuro
    "#2c3e50",   // Azul Pizarra
];

function init() {
	resizeReset();
	animationLoop();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}

function animationLoop() {
	ctx.clearRect(0, 0, w, h);
	ctx.globalCompositeOperation = 'lighter';
	drawBalls();
    var temp = [];
	for (var i = 0; i < balls.length; i++) {
		if (balls[i].time <= balls[i].ttl) {
			temp.push(balls[i]);
		}
	}
	balls = temp;
    
	requestAnimationFrame(animationLoop);
}
