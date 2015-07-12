/**
 * AI.js
 * @author Anthony Wong
 * @description The AI Class
 */

importScripts('ai-api.js');

onmessage = function (message){
	console.log("ai.onmessage");
	console.log(message.data.command);
	switch(message.data.command){
		case "init": // Saves the proper fields
			player_boats = message.data.player_boats;
			computer_boats = message.data.computer_boats;
			number_of_rows = message.data.rows;
			number_of_columns = message.data.columns;
			sendMessageToMainThread(infoMessage("AI Starting"));
			break;
		case "update_player_boats":
			player_boats = message.data.player_boats;
			console.log("update_player_boats");
			console.log(player_boats);
			break;
		case "update_computer_boats":
			computer_boats = message.data.computer_boats;
			break;
		case "kill": // Kill Process
			clearInterval(timer);
		default:
			break;
	}
}

var timer = setInterval(function(){main()}, secToMillsec(10));

x = 0;
y = 0;

/**
 * AI Logic
 */
function main(){
	// Loop at every square
	sendMessageToMainThread(fireMessage(x,y));	
	x++;
	if(x === number_of_columns){
		x = 0;
		y++;
		if(y === number_of_rows){
			y = 0;
			clearInterval(timer);
		}
	}
}