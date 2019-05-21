class Ship {
    constructor(color, width, height, x, y) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    update() {
        ctx = gameArea.context;
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class UserShip extends Ship {
    constructor(healthPoint) {
        super("blue", 25, 25, areaWidth/2, areaHeight/2);
        this.healthPoint = healthPoint;
        this.shotPeriod = gameArea.interval/4;
    }
}

class EnnemyShip extends Ship {
    constructor (width, height, x, y) {
        super("red", width, height, x, y);
        this.shotPeriod = gameArea.interval/2;
        this.shotStart = 5;
    }
}