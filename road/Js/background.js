export default class Background {
    constructor(canvas, ctx, imageSources) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.imageSources = imageSources;
        this.images = [];

        this.loadImages();

        this.lastFrameTime = performance.now();

        this.drawBackground();
    }

    loadImages() {
        const loadImage = (source) => {
            const image = new Image();
            image.onload = () => console.log(`Image ${source} loaded successfully.`);
            image.onerror = (error) => console.error(`Error loading image ${source}: ${error.message}`);
            image.src = source;
            this.images.push(image);
        };

        this.imageSources.forEach(loadImage);
    }

    drawBackground() {
        const draw = (offset, currentImageIndex) => {
            const now = performance.now();
            const deltaTime = now - this.lastFrameTime;
            this.lastFrameTime = now;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            const { width, height } = this.canvas;
            const currentImage = this.images[currentImageIndex];
            const nextImageIndex = (currentImageIndex + 1) % this.images.length;
            const nextImage = this.images[nextImageIndex];

            this.ctx.drawImage(currentImage, 0, offset, width, height);

            const nextImageOffset = offset - height;
            this.ctx.drawImage(nextImage, 0, nextImageOffset, width, height);
            this.ctx.globalAlpha = 1;

            const newOffset = offset + framesPerSecond;

            if (newOffset >= height) {
                draw(0, nextImageIndex);
            } else {
                requestAnimationFrame(() => draw(newOffset, currentImageIndex));
            }

            elapsedTime += deltaTime / 1000;

            timeDisplay.textContent = `Tiempo transcurrido: ${Math.floor(elapsedTime)} segundos`;
        };

        const updateFramesPerSecond = () => {
            framesPerSecond = Math.floor(elapsedTime / 30) * 2 + 7;
            requestAnimationFrame(() => updateFramesPerSecond());
        };

        updateFramesPerSecond();
        draw(0, 0);
    }
}
