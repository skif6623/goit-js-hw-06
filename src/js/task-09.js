function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  refs.spanColor.textContent = randomColor;
});
