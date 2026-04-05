const apiKey = "9ba95a597475d04073c505b3460c12ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 

const weatherIcon = document.querySelector(".weather-icon"); // Select the weather icon element

// Add event listener for "Enter" key press on the input field
const input = document.querySelector("input");
const button = document.querySelector("button");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click(); // simulate button press
  }
});

async function checkWeather(city = "Hamburg") {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else { var data = await response.json();
    // console.log(data); if we heide the result then we dont need this line


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";}

   

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
// checkWeather(); 