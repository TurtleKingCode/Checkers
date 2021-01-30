export default class Checker
{
	constructor(board, row, column, player = undefined)
	{
		this.board = board;
		this.row = row;
		this.column = column;
		this.player = player;

		this.isKing = false;
		this.inFocus = false;
		this.id = `R${this.row}C${this.column}`;
		this.alive = true;

		this.cell = () => this.board.state[this.row][this.column];

		this.moves = {
			open: [],
			kill: []
		}
		
		this.state = {
			killer: false,
			prey: false
		};

		// this.html = ``;
	}
	resetVar()
	{
		this.id = `R${this.row}C${this.column}`;
		this.cell().checker = this;
	}
	checkMoves()
	{
		this.moves.open = [];
		this.moves.kill = [];
		var realSquares = [];
		// Remove Fake Squares
		for (var r in ['a', 'b']) {
			for (var c in ['a', 'b']) {
				var row = Number(this.row) + (r*2 - 1);
				var col = Number(this.column) + (c*2 - 1);
				if (row >= 0 && row < this.board.rows && col >= 0 && col < this.board.columns) {
					realSquares.push(this.square(row, col));
				}
			}
		}
		// Checking for empty squares
		for (var square in realSquares) {
			square = realSquares[square];
			if (square.checker === undefined) {
				this.moves.open.push(square);
			}
		}
		console.log(this.moves);
	}
	moveTo(c, r)
	{
		var moveID = `m ${this.id} - R${r}C${c}`
		let r1 = this.row;
		let c1 = this.column;
		this.cell().checker = undefined;
		this.row = r;
		this.column = c;
		this.resetVar();
		this.board.checkBoard();
		this.board.setPiecesHTML();
		// this.html = $(`.square#${this.id}`).html();
		return `m R${r1}C${c1} - ${this.id}`
	}
	clicked()
	{
		this.inFocus = true;
		this.player.focus = this;
		this.checkMoves();
	}
	toKing()
	{
		this.king = true;
		$(`.checker#${this.id}`).html('K');
	}
	die()
	{
		this.alive = false;
		this.cell().checker = undefined;
		// this.cell() = undefined;
		// delete this;
		this.row = undefined;
		this.column = undefined;
		// this.board = undefined;
	}
	square(r, c)
	{
		return this.board.state[r][c];
	}
	readPoint(string)
	{
		var s = string.replace(/\s+|\(|\)/g, '').split(',');
		return {
			x: Number(s[0]),
			y: Number(s[1])
		};
	}
	convertPoint(object)
	{
		return `(${object.x}, ${object.y})`;
	}
	convertId(id)
	{
		var pos = this.readPoint(id);
		return `R${pos.y}C${pos.x}`;
	}
	convertHTMLId(html)
	{
		html.replace('C', ', ').replace('R', '(');
		html += ')';
		return this.readPoint(html);
	}
}