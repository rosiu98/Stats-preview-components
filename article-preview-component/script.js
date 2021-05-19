const display = document.querySelector(".display");
const link = document.querySelector(".link")


link.addEventListener("click", () => {
    display.classList.toggle("hidden");
})