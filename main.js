const project1Button = document.getElementById('btn-1');
const project2Button = document.getElementById('btn-2');
const project3Button = document.getElementById('btn-3');

const project1Url = 'https://sortinghatnw.netlify.app';
const project2Url = 'https://www.example.com/project2';
const project3Url = 'https://www.example.com/project3';

project1Button.addEventListener('click', () => {
  window.location.href = project1Url;
});

project2Button.addEventListener('click', () => {
  window.location.href = project2Url;
});

project3Button.addEventListener('click', () => {
  window.location.href = project3Url;
});
