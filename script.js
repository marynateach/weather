fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')  
    .then(function(resp){ return resp.json() })
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
    .catch(function(error) {
        console.log(error);
    });


function drawWeather(d) {
    document.querySelector('.city').innerHTML = d.name;
    document.querySelector('.temp').innerHTML = d.main.temp;
    document.querySelector('.pres').innerHTML = d.main.pressure;
    document.querySelector('.desc').innerHTML = d.weather[0].description;
    document.querySelector('.humid').innerHTML = d.main.humidity;
    document.querySelector('.speed').innerHTML = d.wind.speed;
    document.querySelector('.deg').innerHTML = d.wind.deg;
    document.querySelector('.icon').src = "http://openweathermap.org/img/w/" + d.weather[0].icon + ".png";
}