const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const bookmark = document.querySelector(".bookmark");
const button1 = document.querySelectorAll(".button1");
const popup = document.querySelector(".back-project");
const html = document.querySelector("html");
const closeModal = document.querySelector(".close-modal");

const input = document.querySelectorAll("input");

console.log(input.checked)


function checking() {
    bookmark.classList.toggle("bookmarked");
    if (bookmark.classList.value.includes("bookmarked")) {
        bookmark.lastElementChild.innerText = "Bookmarked";
    } else {
        bookmark.lastElementChild.innerText = "Bookmark"
    }

}

bookmark.addEventListener('click', checking)

menu.addEventListener('click', (e) => {
    links.classList.toggle("active");
    menu.classList.toggle("active");
})


button1.forEach(val => {
    val.addEventListener('click', (e) => {
        popup.style.display = "block";
        html.style.fontSize = "50%";
    })
})

closeModal.addEventListener('click', (e) => {
    popup.style.display = "none";
    html.style.fontSize = "62.5%";
})


