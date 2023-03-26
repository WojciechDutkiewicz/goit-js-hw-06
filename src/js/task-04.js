let counterValue = 0;

const value = document.querySelector('span');
console.log(value);
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

decBtn.addEventListener('click', function () {
  counterValue--;
  value.textContent = counterValue;
});
incBtn.addEventListener('click', function () {
  counterValue++;
  value.textContent = counterValue;
});
