const author = document.querySelector('.author');
const currency = document.querySelector('.currency');

const headers = {
  Authorization: `Client-ID NEdkcl7_x9O2DlOiH5BU2eOW6QjGgVABkeLGQi-Jzgg`,
};
const unsplashApiUrl = `https://api.unsplash.com/photos/random/?orientation=landscape&query=nature`;

// fetch(unsplashApiUrl, {
//   headers: headers,
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     document.body.style.backgroundImage = `url(${data.urls.regular})`;
//     author.textContent = `By: ${data.user.name}`;
//   })
//   .catch((err) => {
//     document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkzNjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE2NDM4Njk&ixlib=rb-1.2.1&q=80&w=1080')`;
//     author.textContent = `By: Christian Joudrey`;
//   });

fetch('https://api.coingecko.com/api/v3/coins/iota')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    currency.innerHTML = `
    <img src="${data.image.small}" class="logo" />
    <p class="currency-name">${data.name}</p>
    <p class="currency-price">$${data.market_data.current_price.cad}</p>
    `;
  });

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.latitude;
  const weatherApiKey = `00341c3ea2dfdc0e655eb1592fd114b6`;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;
  console.log(weatherApiUrl);
  fetch(weatherApiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
