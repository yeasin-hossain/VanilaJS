let mainImg = document.querySelector('.main-img');
let massage = document.querySelector('#massage');
let sizeSlider = document.querySelector('#range-slider');
// Massage content insert to main image section
function text(msg) {
	massage.innerText = msg.value;
	// mainImg.innerHTML = ` <p id="massage">${msg.value}</p>`;
}

// Font Color change area
const fontColor = (e) => {
	massage.style.color = e;
};

// Font Color change area
const backgroundColor = (e) => {
	mainImg.style.backgroundColor = e;
};

// Font Color change area
const fontSize = (e) => {
	massage.style.fontSize = `${e}px`;
};

sizeSlider.oninput = () => {
	fontSize(sizeSlider.value);
};

// Font weight

const fontWeight = (e) => {
	massage.style.fontWeight = e;
};
// font position
const fontPosition = (e) => {
	switch (e) {
		case 'center':
			mainImg.style.justifyContent = 'center';
			break;
		case 'middle':
			mainImg.style.justifyContent = 'center';
			mainImg.style.alignItems = 'center';
			break;
		case 'top':
			mainImg.style.alignItems = 'flex-start';
			break;
		case 'bottom':
			mainImg.style.alignItems = 'flex-end';
			break;
		case 'right':
			mainImg.style.justifyContent = 'flex-end';
			break;
		case 'left':
			mainImg.style.justifyContent = 'flex-start';
			break;
	}
};

// img download useing by domToImg lib and FileSaver
const download = () => {
	domtoimage.toBlob(mainImg).then(function (blob) {
		window.saveAs(blob, 'my-node.png');
	});
};
