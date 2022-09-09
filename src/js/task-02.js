const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const makeListItem = ingredients.map(ingredient => {
	const itemRef = document.createElement("li");
	itemRef.textContent = ingredient;
	itemRef.classList.add("item");
	return itemRef;
});

const listRef = document.querySelector("#ingredients");

listRef.append(...makeListItem);
