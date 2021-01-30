var Fps = 60;
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
  return {r:row, c:col};
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
	alert(`${clyde}: Yes I do... Let me prove it: The player can play as either color, but if they are playing you they play red.  Brighter color goes first.  Each player moves in diagonals, You can't jump over anyone except an apponent.  When you have the ability to jump... YOU MUST JUMP.  Eliminate your oponent's pieces to win.\n\n See, I can play`);
	alert(`${felix}: Okay, then I might play you one day.`);
	let decideGamePlay = confirm(`${clyde}: Okay fam what do you want...\n"OK" to play Felix\n"Cancel" cause ya' got no guts.`);
	if (decideGamePlay) {
		gamePlay = game.gamePlayAI;
		player2Name = prompt(`${felix}: I'd like to know the name of my opponent first.`);
		player1Name = 'Felix';
		alert(`${felix}: Bring it on ${player2Name}.`);
	} else {
		gamePlay = game.gamePlayHuman;
		
	}
}

function draw() {
  // clear();
  game.update();
  
  game.winCheck();
}

function mousePressed() {
  var pos = {x: mouseX, y: mouseY};
  var square = getMousePos(pos);
  // game.turn = White;
  // if (game.turn == White) {    
    game.select(square.r, square.c);
  // }
  // piece = game.board.getPiece(square.r, square.c);
  // console.log(piece);
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    game.validMoves = [];
    game.selected = null;
    // game.update();
  }
}