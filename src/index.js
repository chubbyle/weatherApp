function refreshWeatherData (response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("h1");
    let descriptionElement = document.querySelector("#description");
    let windSpeedElement = document.querySelector("#wind-speed");
    let humidityElement = document.querySelector("#humidity");

    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    let iconElement = document.querySelector("#icon");


    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.condition.description;
    windSpeedElement.innerHTML = `${response.data.wind.speed
}km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

    timeElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" /> `;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes} `;
}

function searchCity (city) {
    let apiKey = "d43e706ted81e54bf1d00fo1a187a1b5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeatherData);
}


function handleSearchNewCity (event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity (searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchNewCity);

searchCity("Kuala Lumpur");