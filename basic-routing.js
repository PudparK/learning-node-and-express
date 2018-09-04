var express = require("express");
var app = express();

// Route definition: app.METHOD(PATH, HANDLER);
app.get('/', function(req, res) {
    res.send("Hello world!");
});

app.post('/', function(req, res) {
    res.send('Got a POST Request');
});

app.put('/user', function(req, res) {
    res.send('Got a PUT Request');
});

app.delete('/user', function(req, res) {
    res.send('Got a DELETE Request');
});

app.listen(8080, function(){
    console.log("Example app listening on port 8080!");
});

