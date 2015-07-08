/**
 * Grid.js
 * @author [Anthony Wong]
 */
/* First Loop with innerHTML */
var rows = 3;
var columns = 5
var content = '';
var square = '';
var group = '<div class="btn-group btn-group-lg" role="group" aria-label="..." id="buttons">';

for (var i = 0; i < rows; i++) {
  content += group;
  for (var j = 0; j < columns; j++) {
    square = i + "," + j;
    //content += '<button type="button" class="btn btn-primary" id="' + square + '"' + 'onclick="clicked(' + square + ')">'+ i + ',' + j + '</button>';
    content += '<button type="button" class="btn btn-info"' + 'onclick="clicked(' + square + ')">' + '<img id="' + square + '"' + 'src="lib/glyphicons/png/glyphicons-262-buoy.png">' + '</button>';
    //content += '<button type="button" class="btn btn-primary"' + 'onclick="clicked(' + square + ')">' + '</button>';
  }
  content += '</div></br>';
}

document.getElementById('your_grid').innerHTML = content;
//document.getElementById('your_grid').innerHTML = content;

function buildGrid(numrows, numcols, initial){
    var arr = [];
    for (var i = 0; i < numrows; ++i){
        var columns = [];
        for (var j = 0; j < numcols; ++j){
          columns[j] = Math.floor((Math.random() * 2));
        }
        arr[i] = columns;
    }
    return arr;
}

var grid = buildGrid(rows, columns, 0);

/**
 * Call function when the user clicks on the grid
 *
 **/
function clicked(row, column) {
  var square = row + ',' + column;
  console.log(grid[row][column]);

  if(grid[row][column] == 1){
    // isAShip
    document.getElementById(square).className = "btn btn-success";
    document.getElementById(square).innerHTML = "HIT!";
  } else {
    document.getElementById(square).className = "btn btn-danger";
    document.getElementById(square).innerHTML = '<span class="glyphicon glyphicon-remove"  aria-hidden="true"></span>';
  }
}