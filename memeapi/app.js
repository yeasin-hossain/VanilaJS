let imgs = document.getElementById('images');
let imgCaption = document.querySelector('.figure-caption');
let figure = document.querySelector('#figure');
let gallary = document.querySelector('.gallary');

let allImages = [];

fetch('https://api.imgflip.com/get_memes')
	.then((res) => res.json())
	.then((data) => {
		const img = data.data.memes
			.map((meme) => {
				return `<figure class="figure" id="figure">
            <img
                src="${meme.url}"
                id="images"
                class="figure-img img-fluid rounded"
                alt="${meme.name}"
            />
            <figcaption class="figure-caption bold">
                ${meme.name}
            </figcaption>
        </figure>`;
			})
			.join('');
		console.log(img);
		// gallary.append(img);
		// gallary.innerHTML(img);
		gallary.insertAdjacentHTML('afterbegin', img);
	});

// const allimg = (num) => {
// 	fetch('https://api.imgflip.com/get_memes')
// 		.then((res) => res.json())
// 		.then((data) => {
// 			imgs.src = `${data.data.memes[num].url}`;
// 			imgCaption.innerText = data.data.memes[num].name;
// 			figure.prepend(imgs);
// 			figure.append(imgCaption);
// 			allImages = data.data.memes;
// 		});
// };
// allimg(2);
// allimg(2);
// allimg(5);
// allimg(3);
