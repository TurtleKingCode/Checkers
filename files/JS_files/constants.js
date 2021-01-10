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
	}
}
