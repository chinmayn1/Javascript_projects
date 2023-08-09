
const API_KEY = "";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SEARCH_BOX = document.querySelector('.search input');
const SEARCH_BTN = document.querySelector('.search button');
const WEATHER_ICON = document.querySelector('.weather-icon');

SEARCH_BTN.addEventListener("click", () => {
    checkWeather(SEARCH_BOX.value);

})

async function checkWeather(city) {
    const RESPONSE = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if (RESPONSE.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }

    else {
        var data = await RESPONSE.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == "Clouds") {
            WEATHER_ICON.src = 'images/clouds.png'
        }
        else if (data.weather[0].main == "Clear") {
            WEATHER_ICON.src = 'images/clear.png'
        }
        else if (data.weather[0].main == "Rain") {
            WEATHER_ICON.src = 'images/rain.png'
        }
        else if (data.weather[0].main == "Drizzle") {
            WEATHER_ICON.src = 'images/drizzle.png'
        }
        else if (data.weather[0].main == "Mist") {
            WEATHER_ICON.src = 'images/mist.png'
        }
        document.querySelector(".weather").style.display = 'block';
        document.querySelector(".error").style.display = 'none';
    }

}
