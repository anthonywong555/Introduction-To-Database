/**
 * AI-Brian.js
 * @author Anthony Wong
 * @description The decision making of the brain
 */

/**
 * [onmessage description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
onmessage = function (message){
	switch(message.command){
		case "init":
			break;
		default:
			break;
	}
}

/**
 * Starts the AI UP
 */
function start(){

}

/**
 * Sends a message to the main thread
 */
function sendMessageToMainThread(message){
	postMessage(message);
}

/**
 * Generates a fire object to hit the player
 * @param  {int} x The row of the square
 * @param  {int} y The column of the square
 * @return {Object} For sendMessageToMainThread
 */
function fire(x,y){
	return {"command":"fire", "x": x, "y": y, "message" : "FIRING AT " + x + ',' + y};
}

/**
 * Generates a find object
 * @return {Object} For sendMessageToMainThread
 */
function findBoat(){
	return {"command":"find", "message" : "FINDING A BOAT..."};
}

/**
 * Generates a found object
 * @param  {string} boat_name The name of the boat
 * @return {Object} For sendMessageToMainThread
 */
function foundBoat(boat_name){
	return {"command" : "found", "message" : "FOUND " + boat_name};
}