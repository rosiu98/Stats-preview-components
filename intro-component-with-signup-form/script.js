'use strict'

const form = document.getElementById("signup");

const error = document.querySelectorAll(".input-error");

console.log(error[0].previousElementSibling)


const requiredFields = [
	{ input: form.elements[0], message: 'Name is required' },
	{ input: form.elements[1], message: 'Last Name is required' },
	{ input: form.elements[2], message: 'Email is required' },
	{ input: form.elements[3], message: 'Password is required' }
];
// document.querySelector(".input-error").style.setProperty('--display', 'block');


form.addEventListener("submit", (e) => {
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	requiredFields.forEach((val, index) => {

		if (val.input.value.trim() === "") {
			e.preventDefault();
			console.log(val.message)

			error[index].innerText = val.message;
			error[index].previousElementSibling.style.borderColor = "red"
			error[index].previousElementSibling.placeholder = "";
			error[index].style.setProperty('--display', 'block');



		}
		else if (requiredFields[2].input.value != pattern) {
			error[2].innerText = "Looks like this is not an email"
			error[2].previousElementSibling.style.borderColor = "red"

		}

	})

	// if (requiredFields[2].input.value != pattern) {
	// 	error[2].innerText = "Looks like this is not an email"
	// }
})