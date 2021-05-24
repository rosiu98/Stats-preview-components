const input = document.querySelectorAll("input");
console.log(input);
const form = document.getElementById("form");

const errorElement = document.createElement("div");

input.forEach(input => {
	input.after(errorElement);
})

console.log(input[0].parentNode)


// Array.prototype.forEach.call(input, function (timestamp) {
// 	const errorElement = document.createElement("div");
//       timestamp.after(errorElement);
      
//     });


function add (value) {
		value.after(errorElement);
	}

for (let i = 0; i < input.length; i++) {
	input[i].parentNode.insertBefore(errorElement, input[i].nextSibling)
    }



form.addEventListener("submit", (e) => {
	
	input.forEach(input => {


		const messages = [];
		if(input.value == '' || input.value == null) {
			messages.push(input.name + "cannot be empty");
			
		}


		if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
        add(input);
    }
	})


})