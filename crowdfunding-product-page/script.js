const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const bookmark = document.querySelector(".bookmark");
const button1 = document.querySelectorAll(".button1");
const popup = document.querySelector(".back-project");
const html = document.querySelector("html");
const closeModal = document.querySelector(".close-modal");

const box = document.querySelectorAll(".box");


const input = document.querySelectorAll("input");

const checked1 = document.querySelector('input[name="item"]:checked')

if (checked1 != null) {
    box[0].style.borderColor = "red"
}

console.log(box)


input.forEach((val, index) => {
    val.addEventListener('click', (e) => {
        if (val.checked) {
            box[index].lastElementChild.style.display = "flex";
        }

        if (val.checked === false) {
            box[index].lastElementChild.style.display = "none";
        }
    })

})


input.forEach((val, index) => {
    val.addEventListener('click', (e) => {
        if (val.checked) {
            box[index].lastElementChild.style.display = "flex";
        }

        if (val.checked === false) {
            box[index].lastElementChild.style.display = "none";
        }
    })

})



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



