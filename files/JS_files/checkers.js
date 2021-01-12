class Checker {
	constructor(infoSheet) {
		this.info = infoSheet ? infoSheet : infoMaker('checker', [board, player, 0, 0, '#000000']);
		this.spot = this.info.board.sheet[this.info.pos.x][this.info.pos.y];
		this.inFocus = false;
		this.king = false;
		this.piece = createGraphics(this.info.width, this.info.height);
	}
	setup = function() {
		this.info.board.sheet[this.info.pos.x][this.info.pos.y].checker = this;
		this.info.player.checkers.push(this);
	}
	reset = function() {
		this.info.square.x = convPoint(this.info.pos.x) * this.info.board.info.width/this.info.board.info.columns / 2;
		this.info.square.y = convPoint(this.info.pos.y) * this.info.board.info.width/this.info.board.info.columns / 2;
		this.spot = this.info.board.sheet[this.info.pos.x][this.info.pos.y];
	}
	draw = function() {
		this.spot.checker = this;
		this.piece.noStroke();
		this.piece.fill(this.info.color);
		this.piece.ellipseMode(CENTER);
		this.piece.ellipse(this.info.width/2, this.info.height/2, this.info.width - 10, this.info.height - 10);
		image(this.piece, this.info.square.x, this.info.square.y);
	}
	clicked = function() {
		var distance = dist(this.info.square.x, this.info.square.x, mouseX, mouseY);
		if (distance < this.info.width / 2) {
			this.info.player.focus = this;
			this.moveTo(1, 1);
		}
	}
	mousedOver = function() {
		var distance = dist(this.info.square.x, this.info.square.x, mouseX, mouseY);
		if (distance < this.info.width / 2) {
			cursor('pointer');
		} else {
			cursor('default');
		}
	}
	moveTo = function(x, y) {
		var pos = y ? {x: x, y: y} : x;
		var rows = this.info.board.rows;
		var cols = this.info.board.columns;
		if (pos.y > rows || pos.y < 0 || pos.x > cols || pos.x < 0) {
			throw new Error(`Square ${pos} does not exist`);
		}
		this.spot.checker = undefined;
		this.info.pos = pos;
		this.reset();
		this.draw()
	}
}