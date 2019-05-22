class GameArea {
    constructor(width, height, interval) {
        this.canvas = document.getElementById("canvas");
        this.width = width
        this.height = height
        this.interval = interval
    }
    start() {
        this.canvas.width = areaWidth;
        this.canvas.height = areaHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }    
}