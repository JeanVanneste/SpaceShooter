class EnnemyShip extends Ship {
    constructor (width, height) {
        super("red", width, height);
        this.shotPeriod = 10;
        this.shotStart = 5;
    }
}