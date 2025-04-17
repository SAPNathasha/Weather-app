const express = require("express");
const app = express();
const https = require("https");


app.get("/" , function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a1c54c1086724e47f8f8a4be0594d518&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);
    })
    res.send("Server is up and running.");
})

app.listen(3000, function(){
    console.log("server is running on port 3000.");
})