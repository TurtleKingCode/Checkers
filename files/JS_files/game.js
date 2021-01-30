import Board from "./board.js";
import Checker from "./checkers.js";
import Player from "./players.js";

export default class Game {
	constructor(board, northPlayer, southPlayer) {
		this.board = board;
		this.southPlayer = southPlayer !== undefined ? southPlayer : new Player(this.board, -1, 'southPlayer', 'human');
		this.northPlayer = northPlayer !== undefined ? northPlayer : new Player(this.board, 1, 'northPlayer', 'human');
	}
	setupBoard()
	{
		this.board.northPlayer = this.northPlayer;
		this.board.southPlayer = this.southPlayer;
		this.board.createSheet();
		this.board.setBoard();
	}
	displayBoard()
	{
		this.board.drawBoard();
		this.board.setPiecesHTML();
		this.board.css();
		// console.log(this.northPlayer.checkers.map(x => x.id));
	}
	setPlayers()
	{

	}
	switchTurn()
	{

	}
}
