function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const markupTable = [];

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

refs.input.addEventListener('input', onChangedInput);

function onChangedInput(event) {
  return event.currentTarget.value;
}

function onCreateBtnClick(event) {
  console.log('click create');
}

function onDestroyBtnClick(event) {
  console.log('click destroy');
}

function createBoxes(amount) {
  const div = document.createElement('div');
  console.log(div);
}
