const areaWidth=270;
const areaHeight=480;

function updateGameArea() {
    gameArea.clear();
    gameArea.playerShip.x +=1;
    gameArea.playerShip.update();
}

function startGame(){
    gameArea = new GameArea(areaWidth, areaHeight, 20);
    gameArea.start();
}
