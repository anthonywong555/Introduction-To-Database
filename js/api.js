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
  console.log("saveButtonOnClicked");
  document.getElementById("save_icon").src = "lib/glyphicons/png/glyphicons-445-floppy-saved.png";
  document.getElementById("save_button").className ="btn btn-success";
  console.log(JSON.stringify({ "code": editor.getValue() }));
  /* Modify the code */
  var code = editor.getSession().getValue();
  console.log("code: " + code);
  var request = "INSERT INTO code (code) VALUES (" + code + ")";

  /* Send the request */
  $.ajax({
    type: "POST",
      url: "/save/code",          
      data: JSON.stringify({"author" : "Anthony",  "code": code }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        console.log(data);
      },
      failure: function(errMsg) {
        console.log(errMsg);
      }
  });
}

/**
 * [Sends a given query to the server via AJAX]
 * @param  {String} query [Query Instruction]
 * @return {response}       [Returns the server response]
 */
function sendQuery(query){
  console.log("sendQuery");
  $.ajax({
    type: "POST",
      url: "/query",          
      data: JSON.stringify({ "query": query }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        console.log(data);
        if(data.hasOwnProperty('rows')){
          $('#table').bootstrapTable('load', data.rows);

          for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
              var square = i + "," + j;
              document.getElementById(square).src ="lib/glyphicons/png/glyphicons-262-buoy.png";
            }
          }

          if(data.rows.length > 0){
            /* Load the boat image */
            for(var i = 0; i < data.rows.length; i++){
              var x = data.rows[i].x;
              var y = data.rows[i].y;
              console.log("x: " + x + "y: " + y);
              var id =  x + ',' + y ;
              
              document.getElementById(id).src ="lib/glyphicons/png/glyphicons-256-boat.png";
            }
          }
        }
        return data;
      },
      failure: function(errMsg) {
        console.log("error");
          return errMsg;
      }
  });
}