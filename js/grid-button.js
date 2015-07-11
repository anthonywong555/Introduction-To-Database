/**
 * Grid Button JS
 * A grid that consists of buttons
 */
function GridButtons(numrows, numcolumns, initialize){
	Grid.call(this, numrows, numcolumns, initialize);
}

// TODO: Add Comment
GridButtons.prototype = Object.create(Grid.prototype);

// Set the "constructor" property to refer to GridButtons
GridButtons.prototype.constructor = Grid;

/**
 * [buildButtonGrid description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
GridButtons.prototype.buildButtonGrid = function(id){
	var group = '<div class="btn-group btn-group-lg" role="group" aria-label="..." id="buttons">';
	var content = '';
	var square = '';
	for (var i = 0; i < this.numrows; i++){
		content += group;
		for(var j = 0; j < this.numcolumns; j++){
			square = j + ',' + i;
			content += '<button type="button" class="btn btn-info"' + 'id="' + square + " " + id + '"' + '>' + '<img ' + 'src="lib/glyphicons/png/glyphicons-262-buoy.png">' + '</button>';
		}
		content += '</div></br>';
	}
	document.getElementById(id).innerHTML = content;
}

/**
 * [buildGrid description]
 * @param  {[type]} boats [description]
 * @return {[type]}       [description]
 */
GridButtons.prototype.fillGridwithBoats = function(boats){
	for(var i = 0; i < boats.rows.length; i++){
		var x = boats.rows[i].x;
		var y = boats.rows[i].y;
		this.setSquare(x,y, 1);
	}		
}

/**
 * [showBoats description]
 * @return {[type]} [description]
 */
GridButtons.prototype.showBoats = function(boats, id){
	console.log("showBoats");
	console.log(boats);
	for(var i = 0; i < boats.rows.length; i++){
		var x = boats.rows[i].x;
		var y = boats.rows[i].y;
		console.log(x + ',' + y + " " + id);
		this.setSquare(x,y, 1);
    	document.getElementById(x + ',' + y + " " + id).innerHTML = '<img src="lib/glyphicons/png/glyphicons-256-boat.png">';
	}	
	console.log(this.grid);
}