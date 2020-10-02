const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const https = require('https');

// const apiID ='9ca61a5250d645a58a5115845202709';

// const url = 'https://api.weatherapi.com/v1/forecast.json?key='+apiID+'&q='+cityName+'&days=5';

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/',function(req,res){
  res.render("index");
})

app.post('/',function(req,res){

    console.log(req.body.cityName);
    const city = req.body.cityName;
    const appKey="c81b4ab3231827574e3aee31316be3e7";
    const url='https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+appKey+'&units=metric'

    https.get(url,function(response){
      console.log(response.statusCode);
      response.on("data", function(data){
        const weatherData=JSON.parse(data)

// current date and weather
        const date = weatherData.list[0].dt_txt
        console.log(date);
        const temp = weatherData.list[0].main.temp
        const fTemp = weatherData.list[0].main.feels_like
        const humidity = weatherData.list[0].main.humidity
        const des = weatherData.list[0].weather[0].description
        const icon=weatherData.list[0].weather[0].icon
        const icnUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";



// next day(1) weather
        const date1 = weatherData.list[8].dt_txt
        console.log(date1);
        const temp1 = weatherData.list[8].main.temp
        const fTemp1 = weatherData.list[8].main.feels_like
        const humidity1 = weatherData.list[8].main.humidity
        const des1 = weatherData.list[8].weather[0].description
        const icon1=weatherData.list[8].weather[0].icon
        const icnUrl1="http://openweathermap.org/img/wn/"+icon1+"@2x.png";



// next day(2) weather
        const date2 = weatherData.list[16].dt_txt
        console.log(date2);
        const temp2 = weatherData.list[16].main.temp
        const fTemp2 = weatherData.list[16].main.feels_like
        const humidity2 = weatherData.list[16].main.humidity
        const des2 = weatherData.list[16].weather[0].description
        const icon2=weatherData.list[16].weather[0].icon
        const icnUrl2="http://openweathermap.org/img/wn/"+icon2+"@2x.png";



// next day(3) weather
        const date3 = weatherData.list[24].dt_txt
        console.log(date3);
        const temp3 = weatherData.list[24].main.temp
        const fTemp3 = weatherData.list[24].main.feels_like
        const humidity3 = weatherData.list[24].main.humidity
        const des3 = weatherData.list[24].weather[0].description
        const icon3=weatherData.list[24].weather[0].icon
        const icnUrl3="http://openweathermap.org/img/wn/"+icon3+"@2x.png";

        res.render("post",{
          city:city,
          tempToday:temp,
          desToday:des,
          icnUrl:icnUrl,
          fTemp:fTemp,
          humidity:humidity,
          temp1:temp1,
          des1:des1,
          icnUrl1:icnUrl1,
          fTemp1:fTemp1,
          humidity1:humidity1,
          temp2:temp2,
          des2:des2,
          icnUrl2:icnUrl2,
          fTemp2:fTemp2,
          humidity2:humidity2,
          temp3:temp3,
          des3:des3,
          icnUrl3:icnUrl3,
          fTemp3:fTemp3,
          humidity3:humidity3
        });
      })
})
})











app.listen(process.env.PORT || 3000, function() {
  console.log("Server started");
});
