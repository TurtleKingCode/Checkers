var DEFAULT = {
	width: 0,
	height: 0,
	rows: 8,
	columns: 8,
	lightColor: '#ffffff',
	darkColor: '#000000',
	checkerCount: 24
}

function infoMaker(type, arguments) {
	switch (type) {
		case 'board':
			return {
				width: arguments[0],
				height: arguments[1],
				rows: arguments[2],
				columns: arguments[3],
				lightColor: arguments[4],
				darkColor: arguments[5],
				checkerCount: arguments[6]
			};
			break;
		case 'checker':
			return {
				board: arguments[0],
				player: arguments[1],
				width: arguments[0].info.width/arguments[0].info.columns,
				height: arguments[0].info.height/arguments[0].info.rows,
				pos: {
					x: arguments[2],
					y: arguments[3]
				},
				square: {
					x: convPoint(arguments[2]) * arguments[0].info.width/arguments[0].info.columns / 2,
					y: convPoint(arguments[3]) * arguments[0].info.height/arguments[0].info.rows / 2
				},
				color: arguments[4]
			}
			break;
		case 'player':
			return {
				board: arguments[0],
				side: arguments[1],
				color: arguments[2],
				name: arguments[3]
			}
			break;
	}
}

function convPoint(x, to) {
	return to ? (x - 1) / 2 : x * 2 + 1;
}
