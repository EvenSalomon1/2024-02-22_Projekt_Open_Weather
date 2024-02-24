// fetch(
//   "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=2f995a7671b05cfdc7096752cf86cf77"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error("Fehler in gesamt fetch", err));

// fetch(
//   `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2f995a7671b05cfdc7096752cf86cf77`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const button = document.querySelector("input[type='button']");

const cityNameOutput = document.querySelector(".cityname");
const iconOutput = document.querySelector(".icons");
const dateOutput = document.querySelector(".date");
const timeOutpout = document.querySelector(".time");
const weatherMainOutput = document.querySelector(".weatherMain");
const minTempOutput = document.querySelector(".minTemp");
const maxTempOutput = document.querySelector(".maxTemp");
const feelsLikeOutput = document.querySelector(".feelsLike");
const descriptionOutput = document.querySelector(".description");
const humidityOutput = document.querySelector(".humidity");
const pressureOutput = document.querySelector(".pressure");
const sunriseOutput = document.querySelector(".sunrise");
const sunsetOutput = document.querySelector(".sunset");

button.addEventListener("click", () => {
  let city = document.querySelector("input[type='text']").value;
  myWeatherApi = "2f995a7671b05cfdc7096752cf86cf77";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myWeatherApi}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // *get current Weekday
      const weekday = `${new Date().toLocaleString("en", {
        weekday: "long",
      })}`;
      iconOutput.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`;
      // *put data in html
      cityNameOutput.innerHTML = data.name;
      dateOutput.innerHTML = `${weekday}, ${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`;
      timeOutpout.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
      weatherMainOutput.innerHTML = data.weather[0].main;
      minTempOutput.innerHTML = data.main.temp_min + "°C";
      maxTempOutput.innerHTML = data.main.temp_max + " °C";
      feelsLikeOutput.innerHTML = data.main.feels_like + " °C";
      descriptionOutput.innerHTML = data.weather[0].description;
      humidityOutput.innerHTML = data.main.humidity + " %";
      pressureOutput.innerHTML = data.main.pressure + " hPa";
      sunriseOutput.innerHTML = `${new Date(
        data.sys.sunrise * 1000
      ).getHours()}:${new Date(data.sys.sunrise * 1000).getMinutes()}`;
      sunsetOutput.innerHTML = `${new Date(
        data.sys.sunset * 1000
      ).getHours()}:${new Date(data.sys.sunset * 1000).getMinutes()}`;
    })
    .catch((error) => console.log(error));
});
