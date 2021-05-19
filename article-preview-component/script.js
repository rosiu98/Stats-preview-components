const display = document.querySelector(".display");
const link = document.querySelector(".link");
const info = document.querySelector(".info");
const btn = document.querySelector("#buttonClose");
const mobile = document.querySelector(".display-mobile");
const click = document.querySelector(".click")

link.addEventListener("click", () => {
    display.classList.toggle("hidden");
})

btn.addEventListener("click", () => {
    info.classList.toggle("hidden");
    mobile.classList.toggle("hidden");

})

click.addEventListener("click", () => {
    info.classList.toggle("hidden");
    mobile.classList.toggle("hidden");
})