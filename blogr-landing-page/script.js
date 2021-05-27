const przycisk = document.querySelector(".nav-mobile");
const menu = document.querySelector(".menu");

const list = document.querySelectorAll(".list");

const productMenu = document.querySelector(".product-menu");

const companyMenu = document.querySelector(".company-menu");

const contactMenu = document.querySelector(".contact-menu");

console.log(przycisk.firstElementChild)


// list.addEventListener("click", (e) => {
//     list.forEach(list => {
//         list.classList.toggle("active");
//     })
// })

productMenu.addEventListener("click", (e) => {
    productMenu.nextElementSibling.classList.toggle("active");

})

companyMenu.addEventListener("click", (e) => {
    companyMenu.nextElementSibling.classList.toggle("active");
})

contactMenu.addEventListener("click", (e) => {
    contactMenu.nextElementSibling.classList.toggle("active");
})




przycisk.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    przycisk.classList.toggle("active");
})
