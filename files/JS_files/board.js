class Board {
	constructor(body, r = undefined, c = undefined, d = undefined, l = undefined) {
		this.body = body;
		this.rows = r != undefined ? r : 8;
		this.columns = c != undefined ? c : 8;
		this.darkColor = d != undefined ? d : '#00bfff';
		this.lightColor = l != undefined ? l : '#ffffff';
		this.boardHTML = '';
		this.createSheet = function () {
			let sheet = [];
			for (let r = 0; r < this.rows; r++) {
				let rowArray = [];
				for (let c = 0; c < this.columns; c++) {
					rowArray[c] = {
						color: (c + r) % 2 == 0 ? this.lightColor : this.darkColor,
						colorCode: (c + r) % 2 == 0 ? 'light' : 'dark',
						pos: {
							x: c,
							y: r
						},
						checker: undefined
					};
				}
				sheet[r] = rowArray;
			}
			return sheet;
		}
		this.sheet = this.createSheet();
	}
	show = function () {
		this.boardHTML = '<table id = "board">';
		for (var r in this.sheet) {
			var rowString = `<tr id = "r${r}" class = "row">`;
			for (var c in this.sheet[r]) {
				rowString += `<td id = "r${r}-c${c}" class = "square" color_code = "${this.sheet[r][c].colorCode}"></td>`
			}
			this.boardHTML += rowString;
			this.boardHTML +=  "</tr>";
		}
		this.boardHTML += "</table>";
		this.body.html(this.boardHTML);
	}
}