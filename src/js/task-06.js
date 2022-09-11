const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const isValid = event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'));

  isValid ? (inputRef.classList = 'valid') : (inputRef.classList = 'invalid');
}
