
getWeather();   


document.querySelector('.butt').onclick = getWeather;

function getWeather () {
    let inpValue = document.querySelector('.inp').value;
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inpValue}&units=metric&appid=e2f0a55f16a65b0c32200fb5c3ed87ba`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {

        document.querySelector('.city2').textContent = data.name;

        document.querySelector('.temp2').innerHTML =  Math.round(data.main.temp) + '&deg;';

        document.querySelector('.feels2').innerHTML = "feels" + " " + Math.round(data.main.feels_like) + "&deg;";

        document.querySelector('.sky2').textContent = data.weather[0]['description'];
        
        document.querySelector('.icon2').innerHTML = `<img class="img2" src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

        document.querySelector('.wind2').innerHTML = `wind    ${Math.round(data.wind.speed)}m/s`;
    });
}