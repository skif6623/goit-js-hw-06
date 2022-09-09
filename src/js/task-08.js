const refs = {
	form: document.querySelector(".login-form"),
	inputEmail: document.querySelector('[name="email"]'),
	inputPassword: document.querySelector('[name="password"]'),
	formBtn: document.querySelector("button"),
};

refs.form.addEventListener("submit", onFieldsEmpty);
refs.form.addEventListener("submit", onFieldsSubmit);

function onFieldsEmpty(event) {
	event.preventDefault();

	if (refs.inputEmail.value === "" || refs.inputPassword.value === "") {
		alert("Всі поля мають бути заповнені");
	}
}

function onFieldsSubmit(event) {
	const email = event.currentTarget.elements.email.value;
	const password = event.currentTarget.elements.password.value;
	const formData = {
		email,
		password,
	};

	console.log(formData);
	event.currentTarget.reset();
}
