function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', onChangedInput);
refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onChangedInput(event) {
  createBoxes();
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
