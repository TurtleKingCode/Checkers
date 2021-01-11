class Player {
	constructor(infoSheet) {
		this.info = infoSheet ? infoSheet : infoMaker('player', [board, 'top', 'black', 'human']);
		this.focus = undefined;
		this.isTurn = false;
		this.checkers = undefined;
	}
}