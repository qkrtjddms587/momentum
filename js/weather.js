const API_KEY = "699495a7c4688514379e78e3bbaa506b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:last-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:first-child");
            city.innerText = `Location: ${data.name}`;
            weather.innerText = `Weather: ${data.weather[0].main}`;
            temp.innerText = `Temperture: ${(Math.round(data.main.temp*10)/10).toFixed(1)}℃`;
        });
}   

function onGeoErr() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);