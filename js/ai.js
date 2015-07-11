/**
 * AP JS
 * @author Anthony Wong
 */
var AI = function(number_of_boats, rows, columns){
	this.rows = this.generateBoats(number_of_boats, rows, columns);
	console.log(this.rows);
}

AI.prototype.generateBoats = function (number_of_boats, rows, columns){
	var array = [];
	while(array.length < number_of_boats){
		var value = {x: this.getRandomInt(0, columns), y: this.getRandomInt(0, rows)};
		console.log("value:");
		console.log(value);
		if(!isObjectContainsArray(array, value)){
			array.push(value);
		}
	}
	return array;
}

// Returns a random number between min (inclusive) and max (exclusive)
AI.prototype.getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}