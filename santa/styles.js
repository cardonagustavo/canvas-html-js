var canvas = document.getElementById("spriteCanvas");
var ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 300;

var images = [];
images.length = 78;

for (var i = 0; i < images.length; i++) {
    images[i] = new Image(); 
    images[i].src = './img/slide/Slide (' + i.toString() + ').png'; //10

}
for(var i = 0; i <= 15; i++) {
    images[i + 10] = new Image();
    images[i + 10].src = './img/idle/Idle (' + i.toString() + ').png'; //15
}


for (var i = 0; i <= 15; i++) {
    images[i + 25] = new Image(); 
    images[i + 25].src = 'img/jump/jump (' + i.toString() + ').png'; //15
}


for (var i = 0; i <= 10; i++) {
    images[i + 40] = new Image(); 
    images[i + 40].src = 'img/run/Run (' + i.toString() + ').png'; //10
}

for (var i = 0; i <= 12; i++) {
    images[i + 50] = new Image(); 
    images[i + 50].src = 'img/walk/Walk (' + i.toString() + ').png'; //12
}

for (var i = 0; i <= 16; i++) {
    images[i + 62] = new Image(); 
    images[i + 62].src = 'img/dead/Dead (' + i.toString() + ').png'; //16

}

var i = 1;
setInterval(function () {
    i++;
    if (i >= 78) {
        i = 1;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[i], 50, 50, 300, 290);
}, 100);

// var walkDuration = 300; 
// var framesPerImage = 100; 

// var totalFrames = walkDuration / framesPerImage;
// var framesCounter = 0;

// var i = 1;

// setInterval(function() {
//     framesCounter++;

//     if (framesCounter >= totalFrames) {
//         framesCounter = 0;  
//     }

//     // Calcular el índice de la imagen en función del progreso de la animación
//     var walkIndex = Math.floor((framesCounter / totalFrames) * 12);

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(images[walkIndex + 50], 50, 50, 300, 290);

// }, framesPerImage);



