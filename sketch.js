var Fps = 5;
var game;
var gamePlay;
var player1Name;
var player2Name;
var clyde = '\uD83C\uDDE8'
var felix = '\uD83C\uDDEB';

function getMousePos(pos) {
	let x = pos.x, y = pos.y;
	let row = Math.floor(y / squareSize);
	let col = Math.floor(x / squareSize);
	return { r: row, c: col };
}

function setup() {
	createCanvas(Width, Height);
	frameRate(Fps);
	game = new Game();
	alert(`${clyde}: Hellooooooo... It\'s Clyde!! Here with my alter ego Felix.  Say hi to the fam Felix.`);
	alert(`${felix}: Hi.`);
	alert(`${clyde}: Aight, so as you may notice, unlike our other projects, Felix and I are at the same place.  This is our first collab and I'm hyped as ever.  Aren't you hyped Felix?`);
	alert(`${felix}: Yeah, I'm hyped. Though it won't make sense since we're alter egos...`);
	alert(`${clyde}: Just ignore that Felix... Introduce the fam to this game.`);
	alert(`${felix}: Welcome to our checkers game.  You get to decide to play against a friend, or you decide to play ME.  Unfortunately, you can't play Clyde on account of he doesn't know how to play.`);
	alert(`${clyde}: You're so mean Felix (∩︵∩).`);
	alert(`${felix}: It's the truth.`);
	alert(`${clyde}: Yes I do... Let me prove it: The player can play as either color, but if they are playing you they play Dark.  Brighter color goes first.  Each player moves in diagonals, You can only go in one direction, unless you have reached the other side of the bored, in which case you become a king and can go back and forth.  You can't jump over anyone except an apponent.  When you have the ability to jump... YOU MUST JUMP.  Eliminate your oponent's pieces to win.\n\n See, I can play`);
	alert(`${felix}: Okay, then I might play you one day.`);
	let decideGamePlay = confirm(`${clyde}: Okay fam what do you want...\n"OK" to play Felix\n"Cancel" to play a pal of yours.`);
		if (decideGamePlay) {
			gamePlay = game.gamePlayAI;
			player2Name = prompt(`${felix}: I'd like to know the name of my opponent first.`);
			player1Name = 'Felix';
			alert(`${felix}: Okay ${player2Name}, Let's play.`);
		} else {
			gamePlay = game.gamePlayHuman;
			player1Name = prompt(`${felix}: Okay, what's the name of the player taking Light?`);
			player2Name = prompt(`${clyde}: Then who's taking Dark?`);
			alert(`${felix} & ${clyde}: GOOD LUCK.`)
		}
}

function draw() {
	clear();
	game.update();
	gamePlay(game);
	winCheck();
}

function mousePressed() {
	var pos = { x: mouseX, y: mouseY };
	var square = getMousePos(pos);
	game.select(square.r, square.c);
}

function keyPressed() {
	if (keyCode === ESCAPE) {
		game.validMoves = [];
		game.selected = null;
	}
}

function winCheck() {
	// console.log(game.board.hello);
	let winner = game.winner();
	if (winner !== null && winner !== undefined) {
		noLoop();
		let winnerName = winner === LightColor ? player1Name : player2Name;
		let winner_poster = document.getElementById('winner_poster');
		let winner_background = document.getElementById('winner_background');
		winnerText = `${clyde}: ${winnerName} is the Winner!!!`;
		winner_background.style.display = "flex";
		winner_poster.innerText = winnerText;
		confetti.start(12000);
	}
}