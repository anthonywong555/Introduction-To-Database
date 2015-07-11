/**
 * Grid API
 * @author [Anthony Wong]
 * @description [Generates the Grid]
 * Note: Building 2D Arrays, rows and column is 
 * backwords. 
 * (x,y) => (y,x)
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
	console.log(this.grid);
}

/**
 * [setSquare description]
 * @param {[type]} x     [description]
 * @param {[type]} y     [description]
 * @param {[type]} value [description]
 */
Grid.prototype.setSquare = function(x, y, value){
	this.grid[y][x] = value;
}

/**
 * [getSquare description]
 * @param  {[type]} x [description]
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
Grid.prototype.getSquare = function(x, y){
	return this.grid[y][x];
}

/**
 * [Prints the Grid]
 * @return {[type]} [description]
 */
Grid.prototype.printGrid = function(){
	console.log(this.grid);
}