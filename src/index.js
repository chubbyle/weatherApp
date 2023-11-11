function refreshWeatherData (response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("h1");
    let descriptionElement = document.querySelector("#description");
    let windSpeedElement = document.querySelector("#wind-speed");
    let humidityElement = document.querySelector("#humidity");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.condition.description;
    windSpeedElement.innerHTML = `${response.data.wind.speed
} km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
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