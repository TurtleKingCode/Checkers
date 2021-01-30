import Board from "./board.js";
import Checker from "./checkers.js";
export default class Player
{
	constructor(board, side = -1, name, type)
	{
		this.board = board;
		this.side = side;
		this.name = name;
		this.type = type;

		this.focus = undefined;
		this.isTurn = false;
		this.checkers = [];
		this.pieces = this.checkers.length;
	}
	movablePieces()
	{
		// this.checkers.forEach();
	}
}