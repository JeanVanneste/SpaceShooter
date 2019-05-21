const width=270;
const height=480;

function startGame(){
    myGameArea.start();
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = width
        this.canvas.height = height
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNode[0])
        this.frameNo = 0
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}