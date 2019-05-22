class Ship {
    constructor(color, width, height, x, y) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    update() {
        gameArea.context.fillStyle = this.color
        gameArea.context.fillRect(this.x, this.y, this.width, this.height)
    }
}

class UserShip extends Ship {
    constructor(healthPoint) {
        super("blue", 25, 25, areaWidth/2 -12, areaHeight-25 -5);
        this.healthPoint = healthPoint;
        this.shotPeriod = gameArea.interval*12;
    }
}

class EnnemyShip extends Ship {
    constructor (width, height, x, y) {
        super("red", width, height, x, y);
        this.shotPeriod = gameArea.interval*25;
        this.shotStart = 5;
    }
}