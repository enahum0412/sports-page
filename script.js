const gifContainer = document.querySelector('.gif-container');
const gif = document.querySelector('.gif-container #gif');
const points = document.querySelector('.gif-container #points');
const word = document.querySelector('.word');
const aboutBtn = document.getElementById('about-btn');
const about = document.getElementById('about');
const projectsBtn = document.getElementById('projects-btn');
const projects = document.getElementById('projects');

// Show gif events
gifContainer.addEventListener("mousedown", () => {
  gif.style.display = 'flex';
  points.style.visibility = 'hidden';
  clearInterval(timer);
});

gifContainer.addEventListener("touchstart", () => {
  gif.style.display = 'flex';
  points.style.visibility = 'hidden';
  clearInterval(timer);
});

gifContainer.addEventListener("mouseup", () => {
  gif.style.display = 'none';
  points.style.visibility = 'visible';
  timer = setInterval(random, 200);
});

gifContainer.addEventListener("touchend", () => {
  gif.style.display = 'none';
  points.style.visibility = 'visible';
  timer = setInterval(random, 200);
});

// Show random words
const wordsArr = ['soccer', 'basketball', 'hockey', 'volleyball', 'baseball', 'football'];
let count = 0;

const random = () => {
  let randomWord = wordsArr[count];
  word.innerHTML = randomWord;
  gif.src = './gif/' + randomWord + '.gif';
  count ++;
  
  if (count === wordsArr.length) {
    clearInterval(timer);
    count = 0;

    setTimeout(function() {
      timer = setInterval(random, 200);
    }, 20);
  }
};

let timer = setInterval(random, 200);

aboutBtn.addEventListener('mouseover', () => about.classList.add('show'));
aboutBtn.addEventListener('mouseout', () => about.classList.remove('show'));
projectsBtn.addEventListener('mouseover', () => projects.classList.add('show'));
projectsBtn.addEventListener('mouseout', () => projects.classList.remove('show'));