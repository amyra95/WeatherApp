let now = new Date();
let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

minutes = minutes + ``;
if (minutes < 10) {
  minutes = "0" + minutes;
}

h2.innerHTML = `${day}`;
document.getElementById("time").innerHTML = `${hours}:${minutes}`;

function ShowCityCurrentTemp(response) {
  console.log(response);
  let city = document.querySelector("#city-search");
  let h1 = document.querySelector("#heading");
  if (city.value) {
    h1.innerHTML = response.data.name + ", ";
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#currentTemp");
    temperatureElement.innerHTML = `${temperature}`;
  } else if (city.value.length === 0) {
    alert("Please enter a city");
  }
}

function searchCity() {
  event.preventDefault();
  let apiKey = "f4ddb9f0ce33aafdd96e40000ea348d3";
  let lookUpCity = document.querySelector("#city-search").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${lookUpCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(ShowCityCurrentTemp);
}
let form = document.querySelector("#searchingForm");
form.addEventListener("submit", searchCity);

function showWeather(response) {
  event.preventDefault();
  console.log(response);
  console.log(response.data.main.temp);
  let h1 = document.querySelector("#heading");
  h1.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = `${temperature}`;
}
