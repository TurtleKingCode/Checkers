import Checker from "./checkers.js"

export default class Board {
	constructor(state = false, rows = 8, cols = 8, southPlayer, northPlayer) {
		this.state = state !== false ? state : undefined;
		this.rows = rows;
		this.columns = cols;
		this.southPlayer = southPlayer;
		this.northPlayer = northPlayer;

		this.darkColor = '#00bfff';
		this.lightColor = '#ffffff';
		this.html = '';
	}
	createSheet = function () {
		this.state = [];
		for (let r = 0; r < this.rows; r++) {
			this.state[r] = [];
			for (let c = 0; c < this.columns; c++) {
				this.state[r][c] = {
					empty: true,
					_null: (c + r) % 2 == 0 ? true : false,
					color_code: (c + r) % 2 == 0 ? 'light' : 'dark',
					pos: {
						x: c,
						y: r
					},
					id: `R${r}C${c}`,
					checker: undefined
				};
			}
		}
	}
	piece(x, y)
	{
		return this.state[y][x].checker;
	}
	checkBoard()
	{
		this.state.forEach(x => x.forEach(y => {
			y.empty = y.checker === undefined ? true : false;
			y.html = y.empty ? '' : y.html;
			$(`.square#${y.id}`).html(y.html);
		}));
	}
	setBoard()
	{
		for (var r in this.state) {
			for (var c in this.state[r]) {
				var cell = this.state[r][c];
				if (r < this.rows / 2 - 1) {
					this.state[r][c].checker = !cell._null && cell.empty ? new Checker(this, r, c, this.northPlayer) : cell.checker;
					this.northPlayer.checkers.push(this.state[r][c].checker);
					this.northPlayer.checkers = this.northPlayer.checkers.filter(x => x !== undefined);
				} else if (r > this.rows / 2) {
					this.state[r][c].checker = !cell._null && cell.empty ? new Checker(this, r, c, this.southPlayer) : cell.checker;
					this.southPlayer.checkers.push(this.state[r][c].checker);
					this.southPlayer.checkers = this.southPlayer.checkers.filter(x => x !== undefined);
				}
				this.checkBoard();
			}
		}
	}
	drawBoard()
	{
		this.html = '\t<div id = "board">';
		for (var r in this.state) {
			this.html += `\n\t\t<div id = "R_${r}" class = "row">`;
			for (var c in this.state[r]) {
				var square = this.state[r][c];
				this.html += `\n\t\t\t<div id = "${square.id}" class = "square" color_code = "${square.color_code}"></div>`
			}
			this.html += '\n\t\t</div>';
		}
		this.html += '\n\t</div>';
		$('body').html(this.html + $('body').html());
		// body.click(e => console.log($(e.target)[0].children));
	}
	setPiecesHTML()
	{
		var possibleHolders = this.state.map(x => x.filter(y => !y._null && !y.empty));
		var checkerHolders = [];
		for (var h in possibleHolders) {
			checkerHolders = checkerHolders.concat(possibleHolders[h]);
		}
		// console.log(checkerHolders.map(x => x.id));
		checkerHolders.forEach(x => {
			$(`.square#${x.id}`).html('\n\t\t\t\t' + `<div id = "${x.id}" class = "checker" draggable="true"></div>` + '\n\t\t\t');
		});

		this.northPlayer.checkers.forEach(x => {
			document.querySelectorAll(`.checker#${x.id}`).forEach(x => x.setAttribute('player', 'northPlayer'));
		});

		this.southPlayer.checkers.forEach(x => {
			document.querySelectorAll(`.checker#${x.id}`).forEach(x => x.setAttribute('player', 'southPlayer'));
		});
		document.querySelectorAll(`.checker`).forEach(x => {
			x.addEventListener('click', e => {
				var pos = this.convertHTMLId(x.id);
				var square = this.state[pos.y][pos.x];
				square.checker.clicked();
			});
		});

	}
	css()
	{
		$('.square').css('border', '1px solid black');
		$('[color_code = "light"]').css('background-color', 'red');
		$('[color_code = "dark"]').css('background-color', 'black');
		$('[player = "northPlayer"]').css('background-color', 'black');
		$('[player = "southPlayer"]').css('background-color', 'red');
		// console.log($('body').html());
	}
	square(r, c)
	{
		return this.state[r][c];
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
		html = html.replace('C', ',').replace('R', '');
		html = html.split(',');
		html = `(${html[1]}, ${html[0]})`;
		return this.readPoint(html);
	}
	executeMove(move)
	{
		move = move.replace(/ /g, '');
		if (move.startsWith('m')) {
			move = move.slice(1).split('-');
			var moveObj = move.map(x => this.convertHTMLId(x));
			var checker = this.square(moveObj[0].y, moveObj[0].x).checker;
			checker.moveTo(moveObj[1].x, moveObj[1].y);
		}
	}
}