const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('span'),
};

refs.input.addEventListener('input', onInputChanged);

function onInputChanged(event) {
  refs.span.textContent = event.currentTarget.value;
}
