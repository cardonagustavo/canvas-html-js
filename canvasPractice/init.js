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
ctx.drawImage(image, 10, 10,canvas.width/5,canvas.height/5); //((elemento imagen) ( x , y) ( W , h))
}   

