function Css(board) {
	// var lightSquares = document.querySelectorAll('[color_code = "light"]');
	// var darkSquares = document.querySelectorAll('[color_code = "dark"]');
	// darkSquares.forEach(x => x.style.backgroundColor = 'red');
	var lightSquares = $('[color_code = "light"]');
	var darkSquares = $('[color_code = "dark"]');
	lightSquares.css('background', 'gray');
	darkSquares.css('background', 'pink');

	var checkers = $('.checkers');
	checkers.css('background', 'red');
}
Object.prototype.childs = function() {
	var lengthIndex = Object.keys(this).indexOf('length');
	return Object.values(this).slice(0, lengthIndex);
}
