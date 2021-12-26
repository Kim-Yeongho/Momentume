const weather = document.querySelector("#weather");
const API_KEY = "707ad4ae2af41638c219df68943f99cd";

function getWeather(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then( (response) => response.json() )
        .then( (data) => {
            weather.querySelector("span").innerText = `${Math.round(data.main.temp)}°C`
            weather.querySelector("img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;    
            weather.querySelector("div").innerHTML = `<span>${data.name}</span>`;
        });

}

function getNoWether(){
    alert("Can't find you! Please allow your location information!")
}

navigator.geolocation.getCurrentPosition(getWeather, getNoWether);