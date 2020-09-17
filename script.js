const gifContainer = document.querySelector('.gif-container');
const gif = document.querySelector('.gif-container #gif');
const points = document.querySelector('.gif-container #points');
const word = document.querySelector('.word');
const aboutBtn = document.querySelector('#about-btn');
const about = document.querySelector('#about');
const projectsBtn = document.querySelector('#projects-btn');
const projects = document.querySelector('#projects');

// Show gif events
gifContainer.addEventListener("mousedown", () => {
  gif.style.backgroundImage = 'url("gif/' +  randomWord + '.gif")';
  points.style.visibility = 'hidden';
  clearInterval(timer);
});

gifContainer.addEventListener("mouseup", () => {
  gif.style.backgroundImage = "";
  points.style.visibility = 'visible';
  timer = setInterval(random, 200);
});

gifContainer.addEventListener("touchstart", () => {
  gif.style.backgroundImage = 'url("gif/' +  randomWord + '.gif")';
  points.style.visibility = 'hidden';
  clearInterval(timer);
});

gifContainer.addEventListener("touchend", () => {
  gif.style.backgroundImage = "";
  points.style.visibility = 'visible';
  timer = setInterval(random, 200);
});

// Show random words
const wordsArr = ['soccer', 'basketball', 'hockey', 'volleyball', 'baseball', 'football'];
let count = 0;
let randomWord

const random = () => {
  randomWord = wordsArr[count];
  word.innerHTML = randomWord;
  count ++;
  
  if (count === wordsArr.length) {
    clearInterval(timer);
    count = 0;
    
    timer = setInterval(random, 200);
  }
};

let timer = setInterval(random, 200);

aboutBtn.addEventListener('mouseover', () => about.classList.add('show'));
aboutBtn.addEventListener('mouseout', () => about.classList.remove('show'));
projectsBtn.addEventListener('mouseover', () => projects.classList.add('show'));
projectsBtn.addEventListener('mouseout', () => projects.classList.remove('show'));