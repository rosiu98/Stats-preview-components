// document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () => {

//     // if (question.nextSibling.classList.contains("active")) {
//     question.nextSibling.classList.toggle("active")
//     // }
//     // else {
//     //     document.querySelectorAll(".question").forEach(question => question.nextSibling.classList.remove("active"))

//     //     question.nextSibling.classList.add("active")
//     // }



// }))

let question = document.querySelectorAll(".question");

question.forEach((question) => question.addEventListener("click", () => {

    if (question.nextElementSibling.classList.contains("active")) {
        question.nextElementSibling.classList.toggle("active");
        question.classList.toggle("active");
    }
    else {
        document.querySelectorAll(".question").forEach(question => question.nextElementSibling.classList.remove("active"))

        document.querySelectorAll(".question").forEach(question => question.classList.remove("active"))

        question.nextElementSibling.classList.add("active")

        question.classList.add("active");

    }

}));



// question.addEventListener("click", () => {
//     question.nextElementSibling.classList.toggle("active");
// })





