var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "darkgreen";
ctx.fillRect(10, 10, 100, 100);

// ================== Line ===================

var c = document.getElementById("line");
var ctx = c.getContext("2d");
ctx.lineWidth = 9;
ctx.fillStyle = "gray";

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 30, 30)
ctx.fillRect(30, 30, 30, 30)
ctx.fillRect(60, 60, 30, 30)
ctx.fillRect(90, 90, 30, 30)
ctx.fillRect(120, 120, 30, 30)
ctx.fillRect(150, 150, 30, 30)
ctx.fillRect(180, 180, 30, 30)
ctx.fillRect(210, 210, 30, 30)
ctx.fillRect(240, 240, 30, 30)
ctx.fillRect(270, 270, 30, 30)

ctx.fillStyle = "darkgray";
ctx.fillRect(0, 30, 30, 30)
ctx.fillRect(30, 60, 30, 30)
ctx.fillRect(60, 90, 30, 30)
ctx.fillRect(90, 120, 30, 30)
ctx.fillRect(120, 150, 30, 30)
ctx.fillRect(150, 180, 30, 30)
ctx.fillRect(180, 210, 30, 30)
ctx.fillRect(210, 240, 30, 30)
ctx.fillRect(240, 270, 30, 30)
ctx.fillRect(270, 300, 30, 30)

ctx.fillStyle = "darkgreen";
ctx.fillRect(0, 60, 30, 30)
ctx.fillRect(30, 90, 30, 30)
ctx.fillRect(60, 120, 30, 30)
ctx.fillRect(90, 150, 30, 30)
ctx.fillRect(120, 180, 30, 30)
ctx.fillRect(150, 210, 30, 30)
ctx.fillRect(180, 240, 30, 30)
ctx.fillRect(210, 270, 30, 30)
ctx.fillRect(240, 300, 30, 30)

ctx.fillStyle = "yellow";
ctx.fillRect(0, 90, 30, 30)
ctx.fillRect(30, 120, 30, 30)
ctx.fillRect(60, 150, 30, 30)
ctx.fillRect(90, 180, 30, 30)
ctx.fillRect(120, 210, 30, 30)
ctx.fillRect(150, 240, 30, 30)
ctx.fillRect(180, 270, 30, 30)

ctx.fillStyle = "darkblue";
ctx.fillRect(0, 120, 30, 30)
ctx.fillRect(30, 150, 30, 30)
ctx.fillRect(60, 180, 30, 30)
ctx.fillRect(90, 210, 30, 30)
ctx.fillRect(120, 240, 30, 30)
ctx.fillRect(150, 270, 30, 30)

ctx.fillStyle = "darkred";
ctx.fillRect(0, 150, 30, 30)
ctx.fillRect(30, 180, 30, 30)
ctx.fillRect(60, 210, 30, 30)
ctx.fillRect(90, 240, 30, 30)
ctx.fillRect(120, 270, 30, 30)

ctx.fillStyle = "darkred";
ctx.fillRect(0, 150, 30, 30)
ctx.fillRect(30, 180, 30, 30)
ctx.fillRect(60, 210, 30, 30)
ctx.fillRect(90, 240, 30, 30)
ctx.fillRect(120, 270, 30, 30)

ctx.fillStyle = "purple";
ctx.fillRect(0, 180, 30, 30)
ctx.fillRect(30, 210, 30, 30)
ctx.fillRect(60, 240, 30, 30)
ctx.fillRect(90, 270, 30, 30)

ctx.fillStyle = "orange";
ctx.fillRect(0, 210, 30, 30)
ctx.fillRect(30, 240, 30, 30)
ctx.fillRect(60, 270, 30, 30)

ctx.fillStyle = "lightgreen";
ctx.fillRect(0, 240, 30, 30)
ctx.fillRect(30, 270, 30, 30)

ctx.fillStyle = "black";
ctx.fillRect(0, 270, 30, 30)

// ================== Circle ===================

var c = document.getElementById("line");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(130, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// ================== Home ===================
var canvas = document.getElementById("house");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 5;

// Muro
ctx.strokeRect(75, 140, 150, 110);

// Puerta
ctx.fillRect(130, 190, 40, 60);

// Techo
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();

// ================== Table ===================

var c = document.getElementById("table");
var ctx = c.getContext("2d");

var squareSize = 30;
var numRows = 10;
var numCols = 10;

for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {
        var x = col * squareSize;
        var y = row * squareSize;

        ctx.fillStyle = (row + col) % 2 === 0 ? "darkgrey" : "black";

        ctx.fillRect(x, y, squareSize, squareSize);
    }
}

//==================== Text ======================


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "30px Comic Samns";
ctx.fillText("Canvas1", 90, 30);
ctx.strokeText("Canvas", 90, 60);

//console.log("Contexto del lienzo:", ctx);

ctx.font = "30px Arial";
ctx.textAlign = "center"; //w
ctx.textBaseline = "middle"; //h
ctx.fillText("canvas", canvas.width / 2, canvas.height / 2);


ctx.font = "30px Arial";
var textMetrics = ctx.measureText("Canvas");
console.log("Ancho del texto:", textMetrics.width);

//==================== IMG ======================
window.onload = function () {
    const canvasImg = document.getElementById("imgCanvas");
    const ctx = canvasImg.getContext("2d");
    const image = document.getElementById("control");
    ctx.drawImage(image, 10, 10, canvas.width / 5, canvas.height / 5); //((elemento imagen) ( x , y) ( W , h))
}

//==================== Forms ======================
canvas = document.getElementById('canvasForms');
context = canvas.getContext('2d');

// Draw a rectangle
context.fillStyle = '#000000';
context.fillRect(10, 50, 100, 75);

//Draw a circle
context.beginPath();
context.arc(200, 200, 50, 0, 2 * Math.PI);
context.fill();

//Draw a triangle
context.beginPath();
context.moveTo(200, 100);
context.lineTo(250, 150);
context.lineTo(250, 50);
context.fill();

//==================== Loop ======================

window.onload = init;

function init() {
    canvas = document.getElementById('canvasLoop');
    ctx = canvas.getContext('2d');

    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
    draw();

    window.requestAnimationFrame(gameLoop);
}

function draw() {
    var randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';
    ctx.fillStyle = randomColor;
    ctx.fillRect(100, 50, 100, 100);
}

var secondsPassed;
var oldTimeStamp;
var fps;

function gameLoop(timeStamp) {

    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    fps = Math.round(1 / secondsPassed);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 200, 100);
    ctx.font = '25px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("FPS: " + fps, 10, 30);

    draw();

    window.requestAnimationFrame(gameLoop);
}

//==================== gameLoop2 ======================

var canvas2 = document.getElementById('canvasLoop2');
var ctx2 = canvas2.getContext('2d');

var rectX2 = 10;
var rectY2 = 10;
var rectSpeed2 = 5;

function draw2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    ctx2.fillStyle = 'green';
    ctx2.fillRect(rectX2, rectY2, 50, 50);
}


function gameLoop2() {
    update();
    draw2();
    window.requestAnimationFrame(gameLoop2);
}

function update() {
    rectY2 += rectSpeed2;

    if (rectY2 > canvas2.height) {
        rectY2 = 1;
    }
}

gameLoop2();
//==================== gameLoop3 ======================
class game {
    constructor() {
        this.canvas = document.getElementById('canvasLoop3');
        this.ctx = this.canvas.getContext('2d');
        this.rectX = 20;
        this.rectY = 0;
        this.rectSpeed = 100; 
        this.oldTimeStamp = 10;
        this.fps = 0;

        this.init();
    }

    init() {
        this.gameLoop();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.rectX, this.rectY, 50, 50);
        this.ctx.fillStyle = 'white';

        this.ctx.fillRect(0, 0, 0, 0);
        this.ctx.font = '15px Arial';
        this.ctx.fillStyle = 'black';

        this.ctx.fillText("FPS: " + this.fps, 10, 20);
        this.ctx.fillText("Speed: " + this.rectSpeed, 10, 40);
    }

    gameLoop() {
        const timeStamp = performance.now();
        const secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;

        this.fps = Math.round(1 / secondsPassed);

        this.update();
        this.draw();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.rectY += (this.rectSpeed * (1 / this.fps));

        if (this.rectY > this.canvas.height) {
            this.rectY = 1;
        }
    }
}

const game = new Game();

//==================== Intersect ======================


// rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
//     if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
//         return false;
//     }
//     return true;
// }



