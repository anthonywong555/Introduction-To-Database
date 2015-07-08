var express 	= require('express');
var app 		= express();
var mysql 		= require('mysql');
var bodyParser  = require('body-parser');
var mongoose 	= require('mongoose');
var connection  = mysql.createConnection({
	host: 		'localhost',
	user: 		'admin',
	password: 	'whatsup',
	database: 	'students',
});
var codeController = require('./server/controllers/code-controller');

/**
 * Setup
 */
mongoose.connect('mongodb://localhost/test');
app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

/**
 * Directing Files 
 */
app.use('/lib', 	express.static(__dirname + '/lib'));
app.use('/js', 		express.static(__dirname + '/js'));
app.use('/styles',	express.static(__dirname + '/styles'));

							/* REST API */

/**
 * Perform a query to the database based on the given
 * instruction
 */
app.post('/query', function (req, res){
	connection.query(req.body.query, function(err, rows, fields){
		if(!err){
			/* It works */
			res.json({"rows" : rows, "fields" : fields});
			return;
		} else {
			/* Error */
			res.json("err:", err);
			return;
		}
	});
});

app.post('/save/code', codeController.save);
app.post('/load/code', codeController.load);

app.listen(4000, function() {
    console.log('I\'m Listening...');
});
