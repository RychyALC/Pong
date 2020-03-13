let board
let p1
let p2
let ball
function setup() {
	createCanvas(windowWidth, windowHeight);
	board = new Board(windowWidth,windowHeight,'#fe346e')
	let pw = 50
	let ph = 100
	let py = (floor(windowHeight/2)-floor(ph/2))
	p1 = new paddle(0,py,pw,ph,'#d2fafb')
	p2 = new paddle((windowWidth-pw),py,pw,ph,'#512b58')
	ball = new Ball(floor(windowWidth/2),floor(windowHeight/2),50,'green')
}

function draw() {
	board.draw()
	p1.draw()
	p2.draw()
	ball.draw()
	ball.move()
}
function keyPressed() {
	if(keyCode === 87){
		p1.moveUp()
	}else if(keyCode === 83){
		p1.moveDown()
	}else if(keyCode === UP_ARROW){
		p2.moveUp()
	}else if(keyCode === DOWN_ARROW){
		p2.moveDown()
	}
}