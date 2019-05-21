class Ship {
    constructor(color, width, height, x, y) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    update() {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class UserShip extends Ship {
    constructor() {
        super("blue", 25, 25, width/2, height/2)
    }
}

class EnnemyShip extends Ship {
    constructor (width, height, x, y) {
        super("red", width, height, x, y);
        this.shotPeriod = 10;
        this.shotStart = 5;
    }
}