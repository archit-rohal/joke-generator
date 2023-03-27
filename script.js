const xhr = new XMLHttpRequest();
const jokeGoesHere = document.getElementById('joke');

xhr.onreadystatechange = function() { // this is an event handler for 'onreadystatechange'
  if (this.readyState === 4 && this.status === 200) {
    const jokeFromAPI = JSON.parse(this.responseText);
    const container = ('body');
    jokeGoesHere.textContent = jokeFromAPI.value;
  }
};
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.send();
})
document.addEventListener('DOMContentLoaded', () => {
  jokeGoesHere.textContent = 'Click the button below';
});
