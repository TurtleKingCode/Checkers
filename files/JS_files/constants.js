var DEFAULT = {
	width: 0,
	height: 0,
	rows: 8,
	columns: 8,
	lightColor: '#ffffff',
	darkColor: '#000000',
	checkerCount: 24
}

function arg(type, arguments) {
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
				square: {
					x: arguments[0],
					y: arguments[1]
				},
				master: arguments[3],
				color: arguments[4]
			}
			break;
	}
}
