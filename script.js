const author = document.querySelector('.author');

const headers = {
  Authorization: `Client-ID NEdkcl7_x9O2DlOiH5BU2eOW6QjGgVABkeLGQi-Jzgg`,
};
const apiUrl = `https://api.unsplash.com/photos/random/?orientation=landscape&query=nature`;

fetch(apiUrl, {
  headers: headers,
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    author.textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkzNjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE2NDM4Njk&ixlib=rb-1.2.1&q=80&w=1080')`;
    author.textContent = `By: Christian Joudrey`;
  });
