/**
 * api.js
 * @author Anthony Wong
 * @description This is for debugging purpose
 */

/**
 * [Runs the JavaScript Engine based on the code]
 * @param  {String} code [A JavaScript expression, variable, statement, or sequence of statements]
 */
function runCode(code){
	eval(code);
}

/**
 * [Saves a given piece of code to the database via AJAX]
 * @param  {String} code [A JavaScript Code]
 * @return {response}     [Returns the server response]
 */
function saveCode(code){
	console.log("saveCode");
	$.ajax({
		type: "POST",
	    url: "/save/code",			    
	    data: JSON.stringify({ "code": code }),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data){
	    	console.log(data);
	    	return data;
	    },
	    failure: function(errMsg) {
	    	console.log(errMsg);
	        return errMsg;
	    }
	});
}
