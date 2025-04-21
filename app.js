const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/" , function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/" , function(req,res){
    console.log(req.body.cityName);
})

app.listen(3000, function(){
    console.log("server is running on port 3000.");
})

// const query = "Landon";
// const apiKey = "a1c54c1086724e47f8f8a4be0594d518";
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ unit;
// https.get(url, function(response){
//     console.log(response.statusCode);

//     response.on("data" , function(data){
//         const weatherData = JSON.parse(data)
//         const temp = weatherData.main.temp
//         const weatherDescription = weatherData.weather[0].description
//         const icon =weatherData.weather[0].icon
//         const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
//         res.write("<h1>The temperature in London is " + temp + " degrees Celcious. </h1>");
//         res.write("<p> The weather is currently " + weatherDescription + "</p>");
//         res.write("<img src="+ imgUrl+">");
//         res.send();
//     })
// }) 