/**
 * Grid Boats
 * @author Anthony Wong
 * @description A special grid that is used for this particular project.
 * It inherits from grid-api.js
 */

/**
 * GridBoats Constructor
 * @param {int} numrows    The number of rows of the grid
 * @param {int} numcolumns The number of columns of the grid
 * @param {T} initialize The value of each square is assign
 * @param {Array of Boats} boats      An array of boats that is capture from the server
 */
function GridBoats(numrows, numcolumns, initialize, boats){
	this.boats = boats;
	Grid.call(this, numrows, numcolumns, initialize);
}

// TODO: Comment this!
GridBoats.prototype = Object.create(Grid.prototype);

// Set the "constructor" property to refer to GridBoats
GridBoats.prototype.constructor = Grid;

/**
 * Builds a button grid and sets it to an id
 * @param  {string} id The location where the grid is being place
 */
GridBoats.prototype.buildButtonGrid = function(id){
	var group = '<div class="btn-group btn-group-lg" role="group" aria-label="..." id="buttons">';
	var content = '';
	var square = '';
	for (var i = 0; i < this.numrows; i++){
		content += group;
		for(var j = 0; j < this.numcolumns; j++){
			square = j + ',' + i;
			if(id === "your_grid"){
				content += '<button type="button" class="btn btn-info"' + 'id="' + square + " " + id + '"' + '>' + '<img ' + 'src="lib/glyphicons/png/glyphicons-262-buoy.png">' + '</button>';
			} else {
				content += '<button type="button" class="btn btn-info"' + 'id="' + square + " " + id + '"' + '>' + square +  '</button>';	
			}
			//content += '<button type="button" class="btn btn-info"' + 'id="' + square + " " + id + '"' + '>' + '<img ' + 'src="lib/glyphicons/png/glyphicons-262-buoy.png">' + '</button>';
			//content += '<button type="button" class="btn btn-info"' + 'id="' + square + " " + id + '"' + '>' + square +  '</button>';
		}
		content += '</div></br>';
	}
	document.getElementById(id).innerHTML = content;
}

/**
 * Selects a square in this current grid and update based on the value of that square.
 * @param  {int} x  The column of the square
 * @param  {int} y  The row of the square
 * @param  {String} id The name of the grid
 */
GridBoats.prototype.selectSquare = function(x, y, id){
	var square = x + ',' + y + " " + id;

	if(this.getSquare(x,y) == 1){
		//Is a ship
		document.getElementById(square).className = "btn btn-success";
		document.getElementById(square).innerHTML = "HIT!";
	} else {
		document.getElementById(square).className = "btn btn-danger";
		document.getElementById(square).innerHTML = 'MISS!';
	}
}

/**
 * Set the internal grid to 1's for each boat
 * @param {Array of boats} boats The array of boat objects
 */
GridBoats.prototype.fillGridwithBoats = function(boats){
	for(var i = 0; i < boats.length; i++){
		var x = boats[i].x;
		var y = boats[i].y;
		this.setSquare(x,y, 1);
	}		
}

/**
 * Shows the boats in the UI and sets the value of the this.grid to 1's
 * @param  {string} id The grid id
 */
GridBoats.prototype.showBoats = function(boats, id){
	for(var i = 0; i < boats.length; i++){
		var x = boats[i].x;
		var y = boats[i].y;
		this.setSquare(x,y, 1);
    	document.getElementById(x + ',' + y + " " + id).innerHTML = '<img src="lib/glyphicons/png/glyphicons-256-boat.png">';
	}
}

/**
 * Generate 'n' number of boats
 * @param  {int} number_of_boats Number of boats to generate
 * @param  {int} rows            The number of rows in the grid
 * @param  {int} columns          The number of columns in the grid
 * @return {Array of Objects}                 Array of Boats
 */
function generateBoats(number_of_boats, rows, columns){
	var array = [];
	while(array.length < number_of_boats){
		var value = {x: this.getRandomInt(0, columns), y: this.getRandomInt(0, rows)};
		if(!isObjectContainsArray(array, value)){
			array.push(value);
		}
	}
	return array;
}