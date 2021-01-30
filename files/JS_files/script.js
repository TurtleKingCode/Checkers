import Board from "./board.js";
import Game from "./game.js";
// var board;
// var player;
// var checker;

var board = new Board(false, 8, 8);
var game = new Game(board);

game.setupBoard();
game.displayBoard();

// var checker = document.querySelectorAll('.checker');
// checker.forEach(x => x.addEventListener('click', (e) => console.log(board.convertHTMLId(e.target.id))));
// board.executeMove('m R0C1 - R1C2');