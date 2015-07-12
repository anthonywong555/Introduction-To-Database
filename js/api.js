/**
 * API.JS
 * @author [Anthony Wong]
 */

/**
 * When editor detectes a keystoke
 */
function editorKeyPressed(){
  document.getElementById("save_icon").src = "lib/glyphicons/png/glyphicons-447-floppy-save.png";
  document.getElementById("save_button").className ="btn btn-primary";
}

/**
 * Comparing two object are the same based on string comparison
 * @param  {Object} obj1 Object 1
 * @param  {Object} obj2 Object 2
 * @return {boolean}      True if equals. Otherwise false.
 */
function compareTwoObjects(obj1, obj2){
  return JSON.stringify(obj1) === JSON.stringify(obj2) 
}

/**
 * Checks to see if the object contains the array
 * @param  {Array}  array The array to test with
 * @param  {Object}  obj   The object itself
 * @return {Boolean}       True if the array contains the object
 */
function isObjectContainsArray(array, obj){
  for(var i = 0; i < array.length; i++){
    if(compareTwoObjects(array[i], obj)){
      return true;
    }
  }
  return false;
}

/**
 * [Run Button ActionListner]
 */
function runButtonOnClicked(){
  runCode(editor.getValue());
}

/**
 * [Runs the JavaScript Engine based on the code]
 * @param  {String} code [A JavaScript expression, variable, statement, or sequence of statements]
 */
function runCode(code){
	eval(code);
}

/**
 * [Save Button ActionListner]
 */
function saveButtonOnClicked(){
  term.echo("SAVING CODE", {
      finalize: function(div) {
        div.css("color", "#5bc0de");
      }
    });
  document.getElementById("save_icon").src = "lib/glyphicons/png/glyphicons-445-floppy-saved.png";
  document.getElementById("save_button").className ="btn btn-success";
  
  /* Modify the code */
  var code = editor.getSession().getValue();
  var request = "INSERT INTO code (code) VALUES (" + code + ")";

  /* Send the request */
  $.ajax({
    type: "POST",
      url: "/save/code",          
      data: JSON.stringify({"author" : "Anthony",  "code": code }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){        
        term.echo("SUCCESSFULLY SAVE CODE", {
          finalize: function(div) {
            div.css("color", "green");
          }
        });
      },
      failure: function(errMsg) {
        term.echo("ERROR: SAVING CODE--saveButtonOnClicked()", {
          finalize: function(div) {
            div.css("color", "red");
          }
        });
      }
  });
}

/**
 * [Sends a given query to the server via AJAX]
 * @param  {String} query [Query Instruction]
 * @return {response}       [Returns the server response]
 */
function sendQuery(query){
  term.echo("SENDING QUERY: " + query, {
    finalize: function(div) {
      div.css("color", "#5bc0de");
    }
  });
  $.ajax({
    type: "POST",
      url: "/query",          
      data: JSON.stringify({ "query": query }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        if(data.hasOwnProperty('code')){
          term.echo("ERROR SENDING QUERY: " + data.code, {
            finalize: function(div) {
              div.css("color", "red");
            }
          });
          return;  
        }
        term.echo("SUCCESSFULLY SENT QUERY", {
          finalize: function(div) {
            div.css("color", "green");
          }
        });
        
        console.log("SUCCESSFULLY SENT QUERY");
        console.log("Data:");
        console.log(data);
        updateGrid(data);

        if(document.getElementById('table') !== null){
          updateTable(data); 
        }

        try {
          AI.postMessage({"command": "update_player_boats", "player_boats": data.rows});
        } catch (err){
          // AI is not in use.
        }
        
        return data;
      },
      failure: function(errMsg) {
        term.echo("ERROR SENDING QUERY" + console.log(JSON.stringify(errMsg)), {
          finalize: function(div) {
            div.css("color", "red");
          }
        });
      }

  });
}

/**
 * Print the message to the console
 * @param  {string} string The message itself
 * @param  {string} color  The color it should be
 */
function printToConsole(string, color){
  term.echo(string, {
    finalize: function(div) {
        div.css("color", color);
      }
  });
}

/**
 * Generates a random number between min (inclusive) and max (exclusive)
 * @param  {int} min [description]
 * @param  {int} max [description]
 * @return {int}     a random number between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function FIRE(x,y){
  computer_grid.selectSquare(x,y, "computer_grid");
}

function updateGrid(data){
  console.log("updateGrid");
  // Sets the value of the internal grid to zero
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 5; j++) {
      your_grid.setSquare(j, i, 0);
      document.getElementById(j + ',' + i + " " + "your_grid").className = "btn btn-info";
      document.getElementById(j + ',' + i + " " + "your_grid").innerHTML = '<img src="lib/glyphicons/png/glyphicons-262-buoy.png">';
    }
  }

  your_grid.boats = data.rows;
  // Update the visual grid
  for(var i = 0; i < your_grid.boats.length; i++){
    var x = your_grid.boats[i].x;
    var y = your_grid.boats[i].y;
    console.log(x + ',' + y + " " + "your_grid");
    your_grid.setSquare(x,y, 1);
    document.getElementById(x + ',' + y + " " + "your_grid").className = "btn btn-info";
    document.getElementById(x + ',' + y + " " + "your_grid").innerHTML = '<img src="lib/glyphicons/png/glyphicons-256-boat.png">';
  }
}

function updateTable(data){
  term.echo("UPDATE TABLE", {
    finalize: function(div) {
      div.css("color", "#5bc0de");
    }
  });
  if(data.hasOwnProperty('rows')){
    $('#table').bootstrapTable('load', data.rows);
  }
}

var getStackTrace = function() {
  var obj = {};
  Error.captureStackTrace(obj, getStackTrace);
  return obj.stack;
};
