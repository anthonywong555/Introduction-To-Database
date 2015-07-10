/**
 * API.JS
 * @author [Anthony Wong]
 */

/**
 * [When editor detectes a keystoke]
 */
function editorKeyPressed(){
  document.getElementById("save_icon").src = "lib/glyphicons/png/glyphicons-447-floppy-save.png";
  document.getElementById("save_button").className ="btn btn-primary";
}

/**
 * [Ctrl-S]
 * @return {[type]} [description]
 */
function saveButtonPress(){
  var evtobj = window.event? event : e
  if (evtobj.keyCode == 83 && evtobj.ctrlKey) {
    saveButtonOnClicked();
  } 
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
        if(data.code === "ER_PARSE_ERROR"){
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
        updateTable(data);

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

function printToConsole(string, color){
  term.echo(string, {
    finalize: function(div) {
        div.css("color", color);
      }
  });
}

function updateTable(data){
    term.echo("UPDATE TABLE", {
      finalize: function(div) {
        div.css("color", "#5bc0de");
      }
    });
    if(data.hasOwnProperty('rows')){
      $('#table').bootstrapTable('load', data.rows);

      /*
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          var square = i + "," + j;
          document.getElementById(square).src ="lib/glyphicons/png/glyphicons-262-buoy.png";
        }
      }*/

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          console.log("rows: " + i + "columns: " + j);
          grid[i][j] = 0;
        }
      }
      
      console.log(data.rows);

      if(data.rows.length > 0){
        // Load the boat image 
        for(var i = 0; i < data.rows.length; i++){
          var x = data.rows[i].x;
          var y = data.rows[i].y;
          grid[y][x] = 1;
          console.log("x: " + x + "y: " + y);
          var id =  x + ',' + y ;
          
          //document.getElementById(id).src ="lib/glyphicons/png/glyphicons-256-boat.png";
        }
      }
    }
}