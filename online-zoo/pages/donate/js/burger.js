let menuOpenButton = document.querySelector('.burger');
let menu = document.querySelector('.shadow');
let menuCloseButton = menu.querySelector('.close');

menuOpenButton.addEventListener('click', () => {
  menu.classList.add('show');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')
    || !e.target.classList.contains('shadow')
    && !e.target.classList.contains('burger')) {
    menu.classList.remove('show');
 }
});



