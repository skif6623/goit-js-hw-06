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

refs.input.addEventListener('change', createBoxes);

function createBoxes(event) {
  for (let i = 0; i < refs.input.value; i += 1) {
    const markupEl = `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}"></div>`;
    markupTable.push(markupEl);
  }
}

function onCreateBtnClick(event) {
  refs.box.insertAdjacentHTML('afterbegin', markupTable.join(''));
}

function onDestroyBtnClick(event) {
  while (refs.box.firstChild) {
    refs.box.removeChild(refs.box.firstChild);
  }
}

// ВИДАЛЕННЯ ЕЛЕМЕНТА ПРАЦЮЄ ЧЕРЕЗ Ж.ЯК ЗРОБИТИ ПРАВИЛЬНО ?
// ВОНО ВИДАЛЯЄТЬСЯ, АЛЕ ЯКЩО ВВЕСТИ НОВЕ ЧИСЛО,
// ТО ВЕРНЕТЬСЯ СТАРА КОЛЕКЦІЯ І ДО НЕЇ ДОБАВИТЬСЯ НОВА
