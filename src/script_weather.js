// Today

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let h2 = document.getElementById("weather-today-js");

h2.innerHTML = `${day}, ${hour}:${minutes}`;

// Search City + API

function changeCity(event) {
  event.preventDefault();

  let input = document.querySelector("#city-input");

  let cityChanged = document.querySelector("#city-searched");

  cityChanged.innerHTML = `${input.value}`;

  function logApi(response) {
    console.log(response.data.main.temp);
    let realTemperature = Math.round(response.data.main.temp);
    let degreesToday = document.querySelector("#degrees-today");
    degreesToday.innerHTML = `${realTemperature}`;
  }

  let keyApi = "fc6c8c0c2ac577e4f7117328ff05c0cf";

  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${keyApi}&units=metric`;

  console.log(urlApi);

  axios.get(urlApi).then(logApi);
}

let cityTipe = document.querySelector("#tipe-city");

cityTipe.addEventListener("submit", changeCity);

let submitButton = document.querySelector("#city-button");

submitButton.addEventListener("click", changeCity);

// Fahrenheit and Celsius

function transformCelsius(event) {
  event.preventDefault();

  let celsiusToday = document.querySelector("#degrees-today");

  celsiusToday.innerHTML = "19";
}

function transformFahrenheit(event) {
  event.preventDefault();

  let fahrenheitToday = document.querySelector("#degrees-today");

  fahrenheitToday.innerHTML = "66";
}

let celsius = document.querySelector("#degrees-celsius");
celsius.addEventListener("click", transformCelsius);

let fahrenheit = document.querySelector("#degrees-fahrenheit");
fahrenheit.addEventListener("click", transformFahrenheit);

// Current Location

function getPosition() {
  function positionWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    function logApi(response) {
      console.log(response.data.main.temp);
      let realTemperature = Math.round(response.data.main.temp);
      let degreesToday = document.querySelector("#degrees-today");
      degreesToday.innerHTML = `${realTemperature}`;
    }

    let keyApi = "fc6c8c0c2ac577e4f7117328ff05c0cf";

    let urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric`;

    console.log(urlApi);

    axios.get(urlApi).then(logApi);
  }

  navigator.geolocation.getCurrentPosition(positionWeather);
}

let positionButton = document.querySelector("#current-location");
positionButton.addEventListener("click", getPosition);
