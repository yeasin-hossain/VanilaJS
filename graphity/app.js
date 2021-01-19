const peragraph = document.querySelector('#peragraph');
let mainImg = document.querySelector('.main-img');

peragraph.addEventListener('onKeyDown', () => {
	mainImg.innerHTML = ` <p>${peragraph.value}</p>`;
});

function text(fdfgd) {
	mainImg.innerHTML = ` <p>${fdfgd.value}</p>`;
}
