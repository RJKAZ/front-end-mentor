let toggle = document.querySelector('.toggle');
let navBar = document.querySelector('#navbar');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

toggle.addEventListener('click', () => {
  navBar.classList.toggle('open');
});

function selected(dropName) {
  item = document.getElementById(dropName);
  itemDisplay = item.style.display;
  if (itemDisplay != 'flex') {
    item.style.display = 'flex';
  } else {
    item.style.display = 'none';
  }
}
