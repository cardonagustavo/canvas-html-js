var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function reportWindowSize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.lineWidth = 10;
    ctx.lineCap = "round"

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI);
    var widthSquare = 90;
    var heightSquare = 90;
    
    var x = (canvas.width / 2) - (widthSquare / 2);
    var y = (canvas.height / 2) - (heightSquare / 2);
    ctx.fillRect(x, y, widthSquare, heightSquare)
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(x + widthSquare, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + heightSquare);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(x + widthSquare, y + heightSquare);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    

}
reportWindowSize();
window.onresize = reportWindowSize;
