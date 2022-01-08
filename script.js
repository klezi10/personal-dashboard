const apiKey = `NEdkcl7_x9O2DlOiH5BU2eOW6QjGgVABkeLGQi-Jzgg`;
let headers = {
  Authorization: `Client-ID NEdkcl7_x9O2DlOiH5BU2eOW6QjGgVABkeLGQi-Jzgg`,
};
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=NEdkcl7_x9O2DlOiH5BU2eOW6QjGgVABkeLGQi-Jzgg`;
console.log(apiUrl);

fetch(
  'https://api.unsplash.com/photos/random/?orientation=landscape&query=nature',
  {
    headers: headers,
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
  });
