/**
 * Grid API
 * @author Anthony Wong
 * @description A generic type of grid.
 */

/**
 * Grid Constructor
 * Builds a grid and fills it with the given value
 * @param {int} numrows    The number of rows of the grid
 * @param {int} numcolumns The number of columns of the grid
 * @param {T} initialize The value of each square is assign
 */
var Grid = function(numrows, numcolumns, initialize){
	this.numrows = numrows;
	this.numcolumns = numcolumns;
	this.grid = [];
	for (var i = 0; i < numrows; i++){
		var columns = [];
		for(var j = 0; j < numcolumns; j++){
			columns[j] = initialize;
		}
		this.grid[i] = columns;
	}
}

/**
 * Sets a value to a particular square
 * @param {int} x     The column value of the square
 * @param {int} y     The row value of the square
 * @param {T} value The assign value to that square
 */
Grid.prototype.setSquare = function(x, y, value){
	this.grid[y][x] = value;
}

/**
 * Returns the value of that square
 * @param  {int} x The column value of the square
 * @param  {int} y The row value of the square
 * @return {T}   Value of that square
 */
Grid.prototype.getSquare = function(x, y){
	return this.grid[y][x];
}

/**
 * Prints the grid to the console.
 */
Grid.prototype.printGrid = function(){
	console.log(this.grid);
}