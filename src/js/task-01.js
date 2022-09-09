const listRef = document.querySelector("#categories");
console.log("Number of categories", listRef.children.length);

const itemEl = listRef.querySelectorAll(".item");

itemEl.forEach(item => {
	console.log("Category", item.querySelector("h2").textContent);
	console.log("Elements", item.querySelectorAll("li").length);
});
