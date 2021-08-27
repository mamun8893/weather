document.getElementById("search-btn").addEventListener("click", function() {
    const searchField = document.getElementById("search-field");
    const searchFieldText = searchField.value;
    searchField.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchFieldText}&appid=cae3ecb5417c5330d4658a650085b1bd`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayWeather(data));
});

const displayWeather = (weather) => {
    console.log(weather);
    const celciusWeather = Math.floor(weather.main.temp - 273.15);
    const showWeather = document.getElementById("show-weather");
    const cityName = document.getElementById("city-name");
    const weatherMain = document.getElementById("weather-main");
    const weatherIcon = document.getElementById("weather-icon");
    const iconcode = weather.weather[0].icon;
    const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    showWeather.innerText = celciusWeather;
    cityName.innerText = weather.name;
    weatherMain.innerText = weather.weather[0].main;
    weatherIcon.src = iconurl;
};

// Default show city

const defaultLoadCity = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=cae3ecb5417c5330d4658a650085b1bd`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => defaultDisplyCity(data));
};
defaultLoadCity();
const defaultDisplyCity = (weather) => {
    displayWeather(weather);
};