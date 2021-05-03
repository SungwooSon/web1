const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = 'aadf919b09c9bfefb824780517633a28';

function getWeather(lat, lng) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    }).then(function(json){
        console.log(json);


        const temperature = json.main.temp;
        const place = json.name;

        weather.innerHTML = `${temperature} @ ${place}`;
    }); //then() : fetch 결과가 완전히 넘어 왔을때 실행되는 함수.

}

function saveCoords(coordsObj) {
    localStorage.setItem("coords", JSON.stringify(coordsObj));

}
    

function handleGeoSuccess(position) {
    console.log(position);

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoFailure(position) {
    console.log("can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailure);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();