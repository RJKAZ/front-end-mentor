// https://github1s.com/DummyKen/interactive-rating-component/blob/HEAD/index.html

// all the selectors

const submitBtn = document.querySelector('#submit');
const ratings = document.querySelector('.numbers');
const rating = document.querySelector('.number');
const ratingValue = document.querySelector('.rValue');
const ratingState = document.querySelector('.rating');
const thankYouState = document.querySelector('.thank-you');
const backBtn = document.querySelector('.back');
let value = 0;

submitBtn.addEventListener('click', () => {
  ratingState.getElementsByClassName.display = 'none';
  thankYouState.getElementsByClassName.display = 'block';
});

backBtn.addEventListener('click', () => {
  ratingState.style.display = 'block';
  thankYouState.style.display = 'none';
});

ratings.addEventListener('click', (e) => {
  e.target.classList.add('selected');
  value = e.target.innerText;
  ratingValue.textContent = value;
});
