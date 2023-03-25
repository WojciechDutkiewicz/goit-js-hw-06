// let textInput = document.getElementById('validation-input');
// textInput.addEventListener('blur', () => {
//   textInput.value.length === +textInput.dataset.length
//     ? (textInput.className = 'valid')
//     : (textInput.className = 'invalid');
// });
let textInput = document.getElementById('validation-input');
let inputLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
  if (textInput.value.length === +inputLength) {
    textInput.className = 'valid';
  } else {
    textInput.className = 'invalid';
  }
});
