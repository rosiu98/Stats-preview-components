const form = document.getElementById("form");

const error = document.querySelector(".error");

const input = document.querySelector("input");



form.addEventListener("submit", (e) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value.trim() === "") {
        e.preventDefault();
        error.innerText = "Email is required"
        error.style.display = "block"
        input.style.borderColor = "red"
    } else if (!input.value.match(pattern)) {
        e.preventDefault();
        error.innerText = "Please provide valid email address"
        input.style.borderColor = "red"
    }
})

input.addEventListener("focus", (e) => {
    input.style.borderColor = "blue"
    error.style.display = "none"
})

