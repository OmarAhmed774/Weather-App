let searchBox = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let apiKey = "277fd08f3907410f074a89d28a5ec787";

async function checkWeather(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
  let res = await fetch(apiUrl);

  if (res.status === 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await res.json();

    document.querySelector(".city").innerHTML = `${data.name}`;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )} °C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${Math.round(
      data.wind.speed
    )} km/h`;

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "imgs/clouds.avif";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "imgs/clear.avif";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "imgs/rain.avif";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "imgs/drizzle.avif";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "imgs/mist.avif";
    } else if (data.weather[0].main === "Humidity") {
      weatherIcon.src = "imgs/humidity.avif";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "imgs/snow.avif";
    } else if (data.weather[0].main === "Wind") {
      weatherIcon.src = "imgs/wind.avif";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  let city = searchBox.value;
  if (city) {
    checkWeather(city);
  } else {
    alert("Please Enter City Name");
  }
});
