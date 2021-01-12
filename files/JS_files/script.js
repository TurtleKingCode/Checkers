var board;
var player;
var checker;

function setup() {
	createCanvas(400, 400);
	background(0);
	rectMode(CENTER);
	imageMode(CENTER);
	board = new Board();
	player = new Player();
	// console.log(player);
	checker = new Checker();
	board.draw();
	checker.draw();
	// var dummy = createGraphics(10, 10);
}

function draw() {
	// background(0);

}

function mouseClicked() {
	var pieces = board.sheet.map(x => x.map (x => x.checker));
	for (var r in pieces) {
		for (var c in pieces[r]) {
			if (pieces[r][c] !== undefined) {
				pieces[r][c].clicked();
			}
		}
	}
}

function mouseMoved() {
	var pieces = board.sheet.map(x => x.map (x => x.checker));
	for (var r in pieces) {
		for (var c in pieces[r]) {
			if (pieces[r][c] !== undefined) {
				pieces[r][c].mousedOver();
			}
		}
	}
}