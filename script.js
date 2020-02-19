// to create a variable targeting the btn class:
const btn = document.querySelector('.btn');

// to create a variable targeting the body:
const bodyBg = document.querySelector('body');

// to create an array to hold the background colors to be used: 
const colors = ["green","orange","#101d2c","tomato"];

// to add the event listner to the btn:
btn.addEventListener('click',changeColor);

// the function that triggers the event listener
function changeColor() {
	// to change the background color randomly on clicking the button:
	// bodyBg.style.backgroundColor = colors[2];
	let random = Math.floor(Math.random() * colors.length)
	bodyBg.style.backgroundColor = colors[random];
}