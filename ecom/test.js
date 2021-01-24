let productId = JSON.parse(localStorage.getItem('cartItem'));

let total = document.querySelector('#total');
let cartBody = document.querySelector('.cart-body');

const allInfo = async (id) => {
	let products = [];
	for (let i = 0; i < id.length; i++) {
		const response = await fetch(`https://fakestoreapi.com/products/${id[i]}`);
		const data = await response.json();
		products.push(data);
	}
	return products;
};

const totalPrice = async (productInfo) => {
	let price = null;
	for (let i = 0; i < productInfo.length; i++) {
		price = price + productInfo[i].price;
	}
	return price;
};

const uiRender = async (products) => {
	let product = await products;
	product.map(({ image, price, title }) => {
		let render = `
		<div class="cart-item flex justify-between my-5 bg-white">
		<div class="cart-img w-20">
			<img
				src="${image}"
				alt=""
			/>
		</div>
		<div class="cart-info">
			<h3>${title}</h3>
			<p>$ ${price}</p>
		</div>
		<div class="cart-quantity flex">
			<div class="cart-down">
				<svg
					class="h-8 cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="quantity">2</div>
			<div class="cart-up">
				<svg
					class="h-8 cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	</div>
		`;
		cartBody.insertAdjacentHTML('afterbegin', render);
	});
	return true;
};

const totalPriceRender = async (price) => {
	total.innerText = price;
};

const render = async () => {
	let products = await allInfo(productId);
	let price = await totalPrice(products);
	let render = await uiRender(products);
	if (render) {
		totalPriceRender(price);
	}
	console.log(await price);
};
render();
