/* eslint-disable require-jsdoc */
'use strict';

function handleWeatherSubmit(event) {
  event.preventDefault();
  const cityInput = document.querySelector('#city');
  const city = cityInput.value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=870b1b10b58578f725b70b13aff6c357`;

  console.log(event);

  fetch(weatherUrl)
      .then((response) => {
        if ((response.status !== 200)) {
          console.error('Received reponse status ' + response.statusText);
          throw new Error('found a problem');
        }
        return response.json();
      })
      .then(handleWeatherInfo)
      .catch((error) => {
        console.log(error);
      });
}

function handleWeatherInfo(weatherInfo) {
  const description = weatherInfo.weather[0].description;
  const temperature = weatherInfo.main.temp - 273.15;

  // eslint-disable-next-line max-len
  const weatherMessage =`The weather in ${weatherInfo.name} is currently ${description}. The temperature is ${temperature.toFixed(1)}°C.`;

  document.querySelector('#weather').textContent = weatherMessage;
}

function handleGifySubmit(event) {
  event.preventDefault();
  const gifyKey = 'g6DCacgrrOtBe0BCZMaEJld7LbtNQnos';
  const gifyUrl = 'https://api.giphy.com/v1/gifs/search';
  const MAX_LIMIT = 5;
  const searchTerm = cityInput.value;

  fetch(`${gifyUrl}?api_key=${gifyKey}&q=${searchTerm}&limit=${MAX_LIMIT}`)
      .then((response) => {
        if (response.status !== 200) {
          console.error(`Received error: ${response.statusText}`);

          throw new Error(`BAD RESPONSE: ${response.status}`);
        }

        return response.json();
      })
      .then(fillGifDiv)
      .catch((error) => {
        console.error(`Encountered Error: ${error}`);
      });
}

function fillGifDiv(gifJSON) {
  const gifArr = gifJSON['data'];
  const gifyDisplay = document.querySelector('#gify-disp');

  gifyDisplay.innerHTML = '';

  gifArr.forEach((gif) => {
    gifyDisplay.appendChild(gifElemFrom(gif));
  });
}

function gifElemFrom(gifData) {
  const gifID = gifData['id'];
  const gif = document.createElement('img');
  const gifyURL = 'https://media.giphy.com/media';

  gif.setAttribute('src', `${gifyURL}/${gifID}/giphy.gif`);
  gif.classList.add('giphy_img');

  return gif;
}


window.addEventListener('load', () => {
  const form = document.querySelector('#weather-search');

  form.addEventListener('submit', handleWeatherSubmit);
  form.addEventListener('submit', handleGifySubmit);
});


