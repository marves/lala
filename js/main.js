const menu = document.getElementById('menu');
const trigger = document.getElementById('menu__trigger');

function toggleClass(event) {
  // event.target.classList.toggle = 'open';
  menu.classList.toggle = 'open';
}

trigger.addEventListener('click', toggleClass(event));
