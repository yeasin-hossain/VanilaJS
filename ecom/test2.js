let productId = JSON.parse(localStorage.getItem('cartItem'));
let cartBody = document.querySelector('.cart-body');
let total = document.querySelector('#total');
let products = [
	{
		id: 1,
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		qun: 1,
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	},
	{
		id: 4,
		name: 'Mens Casual Slim Fit',
		price: 15.99,
		qun: 2,
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	},
	{
		id: 2,
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		qun: 1,
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	},
];

const totalPrice = (price) => {
	let totalPrice = 0;
	price.map((total) => {
		let price = total.price * total.qun;
		totalPrice = totalPrice + price;
	});
	return totalPrice;
};

const quantityUpdatePlus = (id, product) => {
	for (let i = 0; i < product.length; i++) {
		if (id == product[i].id) {
			product[i].qun = product[i].qun + 1;
			return product;
		}
	}
};
const quantityUpdateMinus = (id, product) => {
	for (let i = 0; i < product.length; i++) {
		if (id == product[i].id) {
			if (product[i].qun > 1) {
				product[i].qun = product[i].qun - 1;
				return product;
			} else {
				return false;
			}
		}
	}
};

const render = (products) => {
	if (products.length !== 0) {
		products.map((product) => {
			let productRender = `
			<div class="cart-item flex justify-between my-5 bg-white">
			<div class="cart-img w-20">
				<img
					src="${product.image}"
					alt=""
				/>
			</div>
			<div class="cart-info">
				<h3>${product.name}</h3>
				<p>$ ${product.price}</p>
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
				<div class="quantity">${product.qun}</div>
				<div class="cart-up">
                    <svg
                        onclick = "quantityUpdatePlus1(${product.qun})"
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
			cartBody.insertAdjacentHTML('afterbegin', productRender);
		});
	} else {
		return false;
	}
};

console.log(render(products));
let price = totalPrice(products);
total.innerText = price.toFixed(2);
const quantityUpdatePlus1 = (id) => {
	quantityUpdatePlus(id, products);
};
console.log(products);
