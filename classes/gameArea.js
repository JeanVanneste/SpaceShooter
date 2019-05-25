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
        this.interval = setInterval(updateGameArea, this.interval);
        //this.leftBtn = new Button(30, 30, 10, 440);
        //this.rightBtn = new Button(30,30, 230, 440);

        this.playerShip = new UserShip(100);
        this.ennemyShip = new EnnemyShip(40, 40, 100, 30);

        window.addEventListener('touchmove', function(e) {
            this.x = e.touches[0].screenX;
            this.y = e.touches[0].screenY;
        })
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    stop() {
        clearInterval(this.interval);
    }
    restart() {
        this.interval = setInterval(updateGameArea, this.interval)
    }
}