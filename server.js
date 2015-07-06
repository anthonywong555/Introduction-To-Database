var express = require('express');
    app = express();

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index4.html');
});

//app.use('/js', express.static(__dirname + '/client/js'));

//app.post('/api/meetups', meetupsController.create);

app.listen(4000, function() {
    console.log('I\'m Listening...');
});
