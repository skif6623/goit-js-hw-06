const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const {email, password} = event.currentTarget.elements;

	if (email.value === "" || password.value === "") {
		return alert("Всі поля мають бути заповнені");
	}

	const formData = {
		[email.name]: email.value,
		[password.name]: password.value,
	};

	console.log(formData);
}
