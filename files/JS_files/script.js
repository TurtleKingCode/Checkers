function setup() {
	createCanvas(400, 400);
	background(0);
	rectMode(CENTER);
	var board = new Board();
	// console.log(board.sheet.map(x => x.map( x => x.point)));
	board.draw();
}

function draw() {
	// background(0);

}