const icons = document.querySelectorAll('.js-html-icon, .js-css-icon, .js-js-icon, .js-res-icon, .js-met-icon')

const html = document.querySelector('.js-html-icon');
const css = document.querySelector('.js-css-icon');
const js = document.querySelector('.js-js-icon');

const projectBoxes = document.querySelectorAll('.js-project-box');
const projectImage = document.querySelectorAll('.project-box-img');
const projectText = document.querySelectorAll('.js-project-text'); 

const imgWhiteList = ['./images/html-white.png', './images/css-white.png', './images/js-white.png', './images/res-white.png', './images/met-white.png']; 
const imgBlackList = ['./images/html-black.png', './images/css-black.png', './images/js-black.png', './images/res-black.png', './images/met-black.png']; 

icons.forEach((icon, index) => {
  icon.addEventListener('mouseenter', (event) => {
    let header = event.target.children[0];
    let image = event.target.children[1];

    header.classList.add('toggle-color');
    image.src = imgWhiteList[index];
    // image.style.filter = 'invert(1)';
  })
  
  icon.addEventListener('mouseleave', (event) => {
    let header = event.target.children[0];
    let image = event.target.children[1];

    header.classList.remove('toggle-color');
    image.src = imgBlackList[index];
    // image.style.filter = 'invert(0)';
  })
})

projectBoxes.forEach((box, index) => {
  box.addEventListener('mouseenter', () => {
    projectText[index].classList.add('project-text-show');
  })  

  box.addEventListener('mouseleave', () => {
    projectText[index].classList.remove('project-text-show');
  })  
})
