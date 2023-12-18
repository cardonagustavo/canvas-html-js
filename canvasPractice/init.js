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

// ================== Square Green ===================
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "darkgreen";
ctx.fillRect(0, 0, 300, 300);

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

// ================== House ===================
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


// ================== Circle ===================

var c = document.getElementById("line");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(130, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


// ================== Chess ===================

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
//==================== IMG ======================
window.onload = function () {
    const canvasImg = document.getElementById("imgCanvas");
    const ctx = canvasImg.getContext("2d");
    const image = document.getElementById("control");
    ctx.drawImage(image, 10, 10, canvas.width / 5, canvas.height / 5); //((elemento imagen) ( x , y) ( W , h))
}
//==================== Loop ======================
class GameLoop1 {
    constructor() {
        this.canvas = document.getElementById('canvasLoop');
        this.ctx = this.canvas.getContext('2d');

        this.secondsPassed = 0;
        this.oldTimeStamp = 0;
        this.fps = 0;

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    draw() {
        var randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';
        this.ctx.fillStyle = randomColor;
        this.ctx.fillRect(50, 50, 200, 200);
    }

    gameLoop(timeStamp1) {
        this.secondsPassed = (timeStamp1 - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp1;

        this.fps = Math.round(1 / this.secondsPassed);

        this.ctx.fillStyle = 'purple';
        this.ctx.fillRect(0, 0, 110, 40);
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("FPS: " + this.fps, 10, 30);

        this.draw();

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
}

const gameLoop1Instance = new GameLoop1();
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
        this.rectX = 110;
        this.rectY = 0;
        this.rectSpeed = 3000;
        this.oldTimeStamp = 0;
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

        this.ctx.fillStyle = 'purple';
        this.ctx.fillRect(0, 0, 99, 50);
        this.ctx.font = '15px Arial';

        this.ctx.fillStyle = 'white';
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

const myGame = new game();

//==================== gameLoop4 ======================
var canvas4 = document.getElementById('canvasLoop4');
var ctx4 = canvas4.getContext('2d');


var rectX4 = 0;
var rectY4 = 0;
var rectSpeed4 = 6;
var img4 = new Image();
img4.src = '../IMG/2730738.svg';


var rectX5 = -200;
var rectY5 = canvas4.height - 100;
var rectSpeed5 = 1;
var img5 = new Image();
img5.src = '../IMG/307109.svg';

function draw4() {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);

    ctx4.fillStyle = 'transparent';
    ctx4.fillRect(rectX4, rectY4, 10, 10);
    ctx4.drawImage(img4, rectX4, rectY4, 300, 100);


    ctx4.fillStyle = 'transparent';
    ctx4.fillRect(rectX5, rectY5, -10, 10);
    ctx4.drawImage(img5, rectX5, rectY5, 200, 100);
}

function gameLoop4() {
    update4();
    draw4();
    window.requestAnimationFrame(gameLoop4);
}

function update4() {

    rectX4 -= rectSpeed4;
    if (rectX4 + 50 < -250) {
        rectX4 = canvas4.width - 0;
    }

    rectX5 += rectSpeed5;
    if (rectX5 > canvas4.width) {
        rectX5 = -200;
    }


}

gameLoop4();


// function update4() {
//     //rectY4 += rectSpeed4;
//     // if (rectY4 > canvas4.height) {
//     //     rectY4 = 0;
//     // }

//     // rectX4 += rectSpeed4;
//     // if (rectX4 > canvas4.width) {
//     //     rectX4 = 1;
//     // }


//     rectX4 -= rectSpeed4; 

//     if (rectX4 + 50 < 0) {
//         rectX4 = canvas4.width - 60; 
//     }






// }


//==================== Colisions ======================
function clearCanvas() {
    var canvas = document.getElementById('canvasCollision');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
class Square {

    constructor(ctx, x, y, vx, vy) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.width = 50;
        this.height = 50;

    }

    draw() {
        var { x, y, width, height, isColliding } = this;
        this.ctx.fillStyle = isColliding ? 'darkgrey' : 'gold';
        this.ctx.fillRect(x, y, width, height);
    }

    update(secondsPassed) {
        this.x += (this.vx * secondsPassed);
        this.y += (this.vy * secondsPassed);
    }
}

var gameObjects;

function createGameSquare() {
    var canvas = document.getElementById('canvasCollision');
    var ctx = canvas.getContext('2d');
    gameObjects = [
        new Square(ctx, 250, 50, 0, 50),
        new Square(ctx, 250, 300, 0, -50),
        new Square(ctx, 150, 0, 50, 50),
        new Square(ctx, 250, 150, 50, 50),
        new Square(ctx, 350, 75, -50, 30),
        new Square(ctx, 300, 300, 50, -50)
    ];
}

var oldTimeStamp = 0;

function gameLoop(timeStamp) {
    var secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    for (var indice = 0; indice < gameObjects.length; indice++) {
        gameObjects[indice].update(secondsPassed);
    }

    detectCollisions();

    clearCanvas();

    for (var indice = 0; indice < gameObjects.length; indice++) {
        gameObjects[indice].draw();
    }

    window.requestAnimationFrame(gameLoop);
}

function detectCollisions() {
    let obj1;
    let obj2;

    for (let objets = 0; objets < gameObjects.length; objets++) {
        gameObjects[objets].isColliding = false;
    }

    for (let objet1 = 0; objet1 < gameObjects.length; objet1++) {
        obj1 = gameObjects[objet1];

        for (let objet2 = objet1 + 1; objet2 < gameObjects.length; objet2++) {
            obj2 = gameObjects[objet2];

            if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
                obj1.isColliding = true;
                obj2.isColliding = true;
            }
        }
    }

}

console.log(detectCollisions)

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {

    // Check if the right edge of rectangle 1 is to the left of the left edge of rectangle 2
    var isLeftOf = x1 < x2 + w2;

    // Check if the left edge of rectangle 1 is to the right of the right edge of rectangle 2
    var isRightOf = x1 + w1 > x2;

    // Check if the bottom edge of rectangle 1 is above the top edge of rectangle 2
    var isAbove = y1 < y2 + h2;

    // Check if the top edge of rectangle 1 is below the bottom edge of rectangle 2
    var isBelow = y1 + h1 > y2;

    // Check for horizontal intersection (if there is overlap on the x-axis)
    var horizontalOverlap = isLeftOf && isRightOf;

    // Check for vertical intersection (if there is overlap on the y-axis)
    var verticalOverlap = isAbove && isBelow;

    // If there is both horizontal and vertical intersection, return true
    return horizontalOverlap && verticalOverlap;
}



createGameSquare();

window.requestAnimationFrame(gameLoop);

//==================== Sprit Animation ======================

// var canvas = document.getElementById("spriteCanvas");
// var ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var images = [];
// images.length = 13;

// for (var i = 1; i < images.length; i++) {
//     images[i] = new Image(); 
//     images[i].src = 'Walk ('+ i.toString()+').png';

//     var i = 1;
//     setInterval(function(){
//         i++;
//         if(i >= 10){
//             i = 1;
//         }
//         c.drawImage(images[i], 100, 100, 100, 100);
//     },100)
// }





// var spriteWidth = 2000;
// var spriteHeight = 200;
// var cols = 16;
// var rows = 1;
// var width = spriteWidth / cols;
// var height = spriteHeight / rows;
// var frameCount = cols;
// var srcX = 0;
// var srcY = 0;
// var canvas = document.getElementById("spriteCanvas");
// var ctx = canvas.getContext("2d");
// var santa = new Image();
// santa.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/183204/char.png';
// var x = -1;
// var y = 0;
// var direction = 1;
// var speed = 3;

// santa.onload = function () {
//     setInterval(draw, 1000 / 4);
// };

// function updateFrame() {
//     srcX = (srcX + direction * width) % spriteWidth;
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     x += direction * speed;

//     if (x > canvas.width - width || x < 3) {
//         direction *= -1;
//     }

//     updateFrame();

//     ctx.drawImage(santa, srcX, srcY, width, height, x, y, canvas.width, canvas.height);
// }

