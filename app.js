const button = document.querySelector(".btn");
const userInput = document.querySelector(".user-input");
let loc = document.querySelector(".location");
let temp = document.querySelector(".degrees");
let caption = document.querySelector(".caption");
let icon = document.getElementById("icon");
let weather = document.querySelector(".weather-container");
// let iconURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon;

button.addEventListener("click", function (e) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&units=imperial&appid=cabe0ceec471b071308cc1a6a5681c3c`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let iconURL =
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      icon.innerHTML = `<img src="${iconURL}"/>`;
      loc.textContent = data.name;
      temp.textContent = data.main.temp + " °F";
      caption.textContent = data.weather[0].description;
      //   weather.classList.remove(".hide");
    });

  //  .catch(() => alert("Not a city name."));
});
