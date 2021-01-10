class Board {
	constructor(infoSheet, checkersLocation) {
		this.info = infoSheet
			? infoSheet
			: arg('board', [width, height, 8, 8, '#ffffff', '#00bfff', 24])
		this.createSheet = function () {
			let sheet = [];
			for (let r = 0; r < this.info.rows; r++) {
				let rowArray = [];
				for (let c = 0; c < this.info.columns; c++) {
					rowArray[c] = {
						color: (c + r) % 2 == 0 ? this.info.lightColor : this.info.darkColor,
						point: {
							x: (c * 2 + 1) * (this.info.width / (this.info.columns * 2)),
							y: (r * 2 + 1) * (this.info.height / (this.info.rows * 2))
						},
						width: this.info.width / this.info.columns,
						height: this.info.height / this.info.rows
					};
				}
				sheet[r] = rowArray;
			}
			return sheet;
		}
		this.sheet = this.createSheet();
	}
	draw = function () {
		this.sheet.forEach(x => x.forEach((y) => {
			fill(y.color);
			noStroke();
			rect(y.point.x, y.point.y, y.width, y.height)
		}));
	}
}