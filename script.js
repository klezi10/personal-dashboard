const author = document.querySelector('.author');
const currency = document.querySelector('.currency');
const weather = document.getElementById('weather');

const headers = {
  Authorization: `Client-ID NEdkcl7_x9O2DlOiH5BU2eOW6QjGgVABkeLGQi-Jzgg`,
};
const unsplashApiUrl = `https://api.unsplash.com/photos/random/?orientation=landscape&query=nature`;

fetch(unsplashApiUrl, {
  headers: headers,
})
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    author.textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkzNjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE2NDM4Njk&ixlib=rb-1.2.1&q=80&w=1080')`;
    author.textContent = `By: Christian Joudrey`;
  });

fetch('https://api.coingecko.com/api/v3/coins/iota')
  .then((response) => {
    if (!response.ok) {
      throw Error('Something went wrong');
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    currency.innerHTML = `
    <img src="${data.image.small}" class="logo" />
    <p class="currency-name">${data.name}</p>
    <p class="currency-price">$${data.market_data.current_price.cad}</p>
    `;
  })
  .catch((err) => {
    console.error(err);
    currency.textContent = err;
  });

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const weatherApiKey = `00341c3ea2dfdc0e655eb1592fd114b6`;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;
  console.log(weatherApiUrl);
  fetch(weatherApiUrl)
    .then((response) => {
      if (!response.ok) {
        throw Error('Weather data is not available');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerHTML = `
      <img src=${iconUrl} />
      <p class="temp">${Math.round(data.main.temp)}°</p>
     <p class="city">Rawai</p>
      `;
    })
    .catch((err) => {
      weather.textContent = err;
    });
});
