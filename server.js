var express 	= require('express');
var app 		= express();
var mysql 		= require('mysql');
var bodyParser = require('body-parser')
var connection  = mysql.createConnection({
	host: 		'localhost',
	user: 		'admin',
	password: 	'whatsup',
	database: 	'students',
});

app.use(bodyParser());

/* MySQL conection */

//connection.connect();
/*
connection.query('CREATE TABLE pet (name VARCHAR(20))', function(err, rows, fields) {
	if(!err) {
		console.log('Rows: ', rows);
		console.log('Fields: ', fields);
	} else {
		console.log('Error while performing Query.', err);
	}
});*/

//connection.end();

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index4.html');
});

app.use('/ace-builds', express.static(__dirname + '/ace-builds'));
app.use('/glyphicons', express.static(__dirname + '/glyphicons'));


app.post('/send/data', function (req, res){
	connection.query(req.body.code1, function(err, rows, fields) {
  		if (!err){
  			console.log('Works');
  			console.log("Rows: ", rows);
  			console.log("Fields:", fields);
  			res.json({"rows" : rows, "fields" : fields, "name" : "Anthony"});
			return;
  		} else {
  			console.log('Nope');
  			console.log("err:", err);
  			res.json(err);
			return;
  		}
  	});
});

app.listen(4000, function() {
    console.log('I\'m Listening...');
});
