var express = require('express');
    app = express();

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index4.html');
});

app.use('/ace-builds', express.static(__dirname + '/ace-builds'));
app.use('/glyphicons', express.static(__dirname + '/glyphicons'));


//app.post('/api/meetups', meetupsController.create);

app.listen(4000, function() {
    console.log('I\'m Listening...');
});
