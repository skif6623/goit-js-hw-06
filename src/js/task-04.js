let counterValue = 0;

const refs = {
	increentBtn: document.querySelector('[data-action="increment"]'),
	decrementBtn: document.querySelector('[data-action="decrement"]'),
	value: document.querySelector("#value"),
};

refs.increentBtn.addEventListener("click", onIncrementBtnClick);
refs.decrementBtn.addEventListener("click", onDecrementBtnClick);

function onIncrementBtnClick() {
	counterValue += 1;
	refs.value.textContent = counterValue;
}

function onDecrementBtnClick() {
	counterValue -= 1;
	refs.value.textContent = counterValue;
}
