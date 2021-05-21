const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const wykrzyknik = document.querySelector('.wykrzyknik');


form.addEventListener('submit', (e) => {
    let messages = [];
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value == '' || email.value == null || !email.value.match(pattern)) {
        messages.push("Please provide a valid email");
        form.style.borderColor = "red";
        wykrzyknik.style.display = "block"
    } else {
        messages.shift();
        wykrzyknik.style.display = "none";
        form.style.borderColor = "#ce979736";

    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }

})