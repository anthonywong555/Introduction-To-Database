/**
 * Ai-API
 * @author Anthony Wong
 * @description A list of function that AI Class can use
 */

/**
 * Sends a message to the main thread
 */
function sendMessageToMainThread(message){
	postMessage(message);
}

/**
 * Generate a general info for the client to print
 * @param  {string} message A message to print out
 * @return {Object}         For sendMessageToMainThread
 */
function infoMessage(message){
	return {"command" : "info", "message" : message};
}

/**
 * Generates a fire object to hit the player
 * @param  {int} x The row of the square
 * @param  {int} y The column of the square
 * @return {Object} For sendMessageToMainThread
 */
function fireMessage(x,y){
	return {"command":"fire", "x": x, "y": y, "message" : "AI: FIRING AT " + x + ',' + y};
}

/**
 * Generates a find object
 * @return {Object} For sendMessageToMainThread
 */
function findBoatMessage(){
	return {"command":"find", "message" : "AI: FINDING A BOAT..."};
}

/**
 * Generates a found object
 * @param  {string} boat_name The name of the boat
 * @return {Object} For sendMessageToMainThread
 */
function foundBoatMessage(boat_name){
	return {"command" : "found", "message" : "AI: FOUND " + boat_name};
}

/**
 * Returns the value from second to millisecond
 * @param  {[type]} second [description]
 * @return {[type]}        [description]
 */
function secToMillsec(second){
	return 1000 * second;
}