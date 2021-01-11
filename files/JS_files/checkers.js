class Checker {
	constructor(infoSheet) {
		this.info = infoSheet ? infoSheet : infoMaker('checker', [board, player, 0, 0, '#000000']);
		this.inFocus = false;
		this.king = false;
		this.piece = createGraphics(this.info.width, this.info.height);
	}
	setup = function() {
		this.info.board.sheet[this.info.pos.x][this.info.pos.y].checker = this;
		this.info.player.checkers.push(this);
	}
	draw = function() {
		this.info.board.sheet[this.info.pos.x][this.info.pos.y].checker = this;
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
		}
	}
}