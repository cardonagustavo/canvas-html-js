import Background from "./background";

Background

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const timeDisplay = document.getElementById('timeDisplay');

const imageSources = [
    '../img/background_city_transition.jpg',
    '../img/background_desert.jpg',
    '../img/background_desert.jpg',
    '../img/background_desert_transition.jpg',
    '../img/background_camp.jpg',
    '../img/background_camp_transition.jpg',
    '../img/background_city.jpg',
    '../img/background_city.jpg',
];

let framesPerSecond = 7;
let elapsedTime = 0;

const background = new Background(canvas, ctx, imageSources, elapsedTime);
