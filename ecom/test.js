let productId = JSON.parse(localStorage.getItem('cartItem'));

const allInfo = (allId) => {
	let info = [];
	for (let i = 0; i < allId.length; i++) {
		let id = allId[i];
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((allInfo) => {
				let data = {
					id: allInfo.id,
					price: allInfo.price,
					name: allInfo.title,
					qun: 1,
				};
				info.push(data);
			});
	}
	return info;
};

const totalPrice = async (productInfo) => {
	console.log(productInfo);
	let price = [];
	// productInfo.map((e) => {
	// 	console.log(e);
	// 	price.push(e);
	// 	// price = e.price;
	// });
	console.log(await productInfo.length);
	for (let i = 0; i < productInfo.length; i++) {
		console.log(productInfo[i]);
	}
	// console.log(productInfo[0].name);
	// let price = await productInfo;
	// console.log(price);
	// return price;
};

// console.log(totalPrice(allInfo(productId)));

const render = async () => {
	let lol = await allInfo(productId);
	// console.log(lol);
	let price = await totalPrice(lol);
	// console.log(price);
	totalPrice(lol);
};
render();
