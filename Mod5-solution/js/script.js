// DOM manipulation
console.log(document.getElementById("title"));
 
//Toán tử instanceof trong Java 
//là một toán tử được sử dụng để kiểm 
//tra xem đối tượng này có phải là 
//đó hay không? Kết quả trả về của 
//toán tử này sẽ là true nếu đối tượng 
//đó là thể hiện của class mà các bạn đang check, 
//ngược lại thì false.

console.log(document instanceof HTMLDocument);

// DOM manipulation part2

/*function sayHello(event) {
	// body...
	var name = (document.getElementById("name").value);
	var message ="<h2>Hello " + name + "!</h2>";

	document
		.getElementById("content")
		//.textContent =message;
		.innerHTML = message;

	if(name === "student") {
		var title =
			document
				.querySelector("#title")
				.textContent;
		title+=" & Lovin'it!";
		document
			.querySelector("#title")//co the la thẻ .querySelector("h1")
			.textContent = title;

	}
}*/


// Handling Events
//the script tronng header
/*document.addEventListener("DOMContentLoaded",
	function (event){
		function sayHello(event) {
	// body...
	console.log(this);
	this.textContent = "Said it!"
	var name = (document.getElementById("name").value);
	var message ="<h2>Hello " + name + "!</h2>";

	document
		.getElementById("content")
		//.textContent =message;
		.innerHTML = message;

	if(name === "student") {
		var title =
			document
				.querySelector("#title")
				.textContent;
		title+=" & Lovin'it!";
		document
			.querySelector("#title")//co the la thẻ .querySelector("h1")
			.textContent = title;

	}
}
// unobstrusive event biding
document.querySelector("button")
.addEventListener("click",sayHello);
});*/

/*function sayHello(event) {
	// body...
	console.log(this);
	this.textContent = "Said it!"
	var name = (document.getElementById("name").value);
	var message ="<h2>Hello " + name + "!</h2>";

	document
		.getElementById("content")
		//.textContent =message;
		.innerHTML = message;

	if(name === "student") {
		var title =
			document
				.querySelector("#title")
				.textContent;
		title+=" & Lovin'it!";
		document
			.querySelector("#title")//co the la thẻ .querySelector("h1")
			.textContent = title;

	}
}*/



//obstrusive 
/*document.querySelector("button")
.onclick=sayHello;
*/

//The event Argument
document.addEventListener("DOMContentLoaded",
	function (event){
		function sayHello(event) {
	// body...
	console.log(event);
	this.textContent = "Said it!"
	var name = (document.getElementById("name").value);
	var message ="<h2>Hello " + name + "!</h2>";

	document
		.getElementById("content")
		//.textContent =message;
		.innerHTML = message;

	if(name === "student") {
		var title =
			document
				.querySelector("#title")
				.textContent;
		title+=" & Lovin'it!";
		document
			.querySelector("#title")//co the la thẻ .querySelector("h1")
			.textContent = title;

	}
}
// unobstrusive event biding
document.querySelector("button")
.addEventListener("click",sayHello);

document.querySelector("body")
	.addEventListener("mousemove",
		function (event) {
			// body...
			if(event.shiftKey === true){
				console.log("x: " + event.clientX);
				console.log("y: " + event.clientY);
			}
			

		});
});
