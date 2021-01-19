let memes = document.querySelector('.memes');
let spain = document.querySelector('.spain');

let getuser = async () => {
	let res = await fetch('https://api.imgflip.com/get_memes');
	let data = await res.json();
	data ? (spain.style.display = 'none') : console.log('no');
	return data;
};

getuser().then((data) => {
	const meme = data.data.memes
		.map((meme) => {
			let dat = [meme.id, meme.name, meme.url];
			return `<div class="col-md-3 mx-3 meme">
								<div class="card" style="width: 18rem">
								<img src="${meme.url}" id="${meme.id}" onclick="printC('${dat}')" class="card-img-top" alt="..." />
								<div class="card-body">
								<h5 class="card-title">${meme.name}</h5>
								<a target="_blank" href="${meme.url}" class="btn btn-primary download" >Download</a>
								</div>
							</div>
						</div>`;
		})
		.join('');
	memes.insertAdjacentHTML('afterbegin', meme);
	// let download = document.querySelector(meme.id);
	// download.addEventListener('click', (e) => {
	// 	console.log(e);
	// });
});

function printC(da) {
	console.log(da.split(','));
}
// let download = document.querySelectorAll('#img');
