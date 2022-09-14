const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('span'),
};

refs.input.addEventListener('input', onInputChanged);

function onInputChanged(event) {
  event.currentTarget.value === ''
    ? (refs.span.textContent = 'Anonymous')
    : (refs.span.textContent = event.currentTarget.value);
}
