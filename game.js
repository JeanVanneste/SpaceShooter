const areaWidth=270;
const areaHeight=480;

function updateGameArea() {
    gameArea.clear();
    if (gameArea.x && gameArea.y) {
        gameArea.playerShip.x = gameArea.x;
        gameArea.playerShip.y = gameArea.y;
    }
    //gameArea.leftBtn.update();
    //gameArea.rightBtn.update();
    gameArea.playerShip.update();
    gameArea.ennemyShip.update();
}

function startGame(){
    gameArea = new GameArea(areaWidth, areaHeight, 20);
    gameArea.start();
}
