// Variables
let paragraph = document.getElementById('paragraph');
let range = document.getElementById('range-slider');
let size = document.getElementById('size');
// Font Color
let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
// Font style
let normalStyle = document.getElementById('normal');
let cursive = document.getElementById('cursive');
let light = document.getElementById('light');
let bold = document.getElementById('bold');

// Font family
function myFunction() {
	let font = document.getElementById('select').value;
	console.log(font);
	if (font) {
		paragraph.style.fontFamily = font;
	}
	// font ? (paragraph.style.fontFamily = font) : console.log('non');
}

// Font size
range.oninput = () => {
	console.log(typeof range.value);
	size.innerText = range.value;
	paragraph.style.fontSize = `${range.value}px`;
};

// Font Color
black.addEventListener('click', () => {
	paragraph.style.color = 'black';
});

red.addEventListener('click', () => {
	paragraph.style.color = 'red';
});

blue.addEventListener('click', () => {
	paragraph.style.color = 'blue';
});
green.addEventListener('click', () => {
	paragraph.style.color = 'green';
});

// Font Style
normalStyle.addEventListener('click', () => {
	paragraph.style.fontStyle = 'normal';
});
cursive.addEventListener('click', () => {
	paragraph.style.fontStyle = 'italic';
});
light.addEventListener('click', () => {
	paragraph.style.fontWeight = 'lighter';
});
bold.addEventListener('click', () => {
	paragraph.style.fontWeight = 'bold';
});
