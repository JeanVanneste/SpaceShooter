var playerShip;

const width=270;
const height=480;

function startGame(){
    myGameArea.start();
    playerShip = new ship()
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

function ship(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function clear() {
    ctx.fillStyle = pattern
    ctx.fillRect(0, 0, width, height)
}


function draw(ball) {
    ctx.beginPath()
    ctx.ellipse(ball.x, ball.y, 5, 5, 0, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fillStyle = 'white'
    ctx.fill()
}

const ball = {
    x: width/2,
    y: height/2,
    vx: 5,
    vy: 5
}

function update(ball) {
    ball.x += ball.vx
    ball.y += ball.vy
    if(ball.x > width || ball.x < 0)
        ball.vx = -ball.vx
    if(ball.y > height || ball.y < 0)
    ball.vy = -ball.vy
} 

function frame() {
    clear()
    update(ball)
//    drawBackground()
    draw(ball)
    requestAnimationFrame(frame)
}

requestAnimationFrame(frame)
