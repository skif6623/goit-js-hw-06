const refs = {
  controlInput: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.controlInput.addEventListener('input', event => {
  const size = event.currentTarget.value;
  refs.span.style.fontSize = `${size}px`;
});
