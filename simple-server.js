var express = require("express");
var app = express();

app.get('/pedro', function(req, res){
    res.send("Pedro is a papahead!");
});

app.listen(8080, function(){
    console.log("Example app listening on port 8080!");
});

