"use strict";

const button = document.querySelector(".btn");
const userInput = document.querySelector(".user-input");
let loc = document.querySelector(".location");
let temp = document.querySelector(".degrees");
let caption = document.querySelector(".caption");
let icon = document.getElementById("icon");
let weather = document.querySelector(".weather-container");

const apiKey = "cabe0ceec471b071308cc1a6a5681c3c";
let lat;
let long;
let iconURL;

function setWeather(data) {
  iconURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  icon.innerHTML = `<img src="${iconURL}"/>`;
  loc.textContent = data.name;
  temp.textContent = Math.floor(data.main.temp) + " °F";
  caption.textContent = data.weather[0].description;
}

window.addEventListener("load", function () {
  if (this.navigator.geolocation) {
    this.navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log(lat, long);
      weather.classList.remove("hide");
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          // loc.textContent = "Current Location"; "used for demo (privacy)"
        });
    }); //end of position
  } //end of if statement
});

button.addEventListener("click", function () {
  weather.classList.remove("hide");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&units=imperial&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      setWeather(data);
    });
});
