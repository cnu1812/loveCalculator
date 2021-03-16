const express = require("express");
const bodyParser = require("body-parser");
// const superheroes = require('superheroes');
// const pokemon = require('pokemon');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var yourName = req.body.yourName;
    var yourPartner = req.body.yourPartner;
    var random = (Math.random()*100 + 1);
    
    var result = "Love between " + yourName + " and " +yourPartner + " is "+random + "%";
    res.send(result);
   
   
});

app.listen(3000,function(){
    console.log("server is running on port 3000");
});