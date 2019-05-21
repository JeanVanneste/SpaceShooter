const areaWidth=270;
const areaHeight=480;

function startGame(){
    gameArea.start();
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = areaWidth
        this.canvas.height = areaHeight
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNode[0])
        this.frameNo = 0
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}