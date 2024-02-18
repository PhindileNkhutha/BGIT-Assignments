const apiKey = "85f98bea0279d31e3658e337c3bfef75";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const cityName = data.name;

      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>City: ${cityName}</p>
                                   <p>Temperature: ${temperature}°</p>
                                   <p>Description: ${description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML =
        '<p class="text-danger">Error fetching weather data. Please try again.</p>';
    });
}
