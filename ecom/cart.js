let cartItems = JSON.parse(localStorage.getItem('cartItem'));
let cartBody = document.querySelector('.cart-body');
let totalPrice = [];
cartItems
	.map((cartItem) => {
		fetch(`https://fakestoreapi.com/products/${cartItem}`)
			.then((res) => res.json())
			.then((item) => {
				// console.log(item.title);
				totalPrice.push(item.price * 5);
				totalSum(item.price, 3);
				let items = `
			<div class="cart-item flex justify-between my-5 bg-white">
			<div class="cart-img w-20">
				<img
					src="${item.image}"
					alt=""
				/>
			</div>
			<div class="cart-info">
				<h3>${item.title}</h3>
				<p>$ ${item.price}</p>
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
				cartBody.insertAdjacentHTML('afterbegin', items);
			});
		let price = 0;
		totalPrice.map((e) => {
			price = price + e;
			console.log(price);
		});
	})
	.join(' ');

const totalSum = async (e, b) => {
	// return await (sum = b * e);
	// totalPrice.push((sum = b * e));
	// console.log(b * e);
};
