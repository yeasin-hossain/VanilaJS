let products = document.querySelector('.products');
let cartlist = document.querySelector('#cartIteam');
let cart = document.querySelector('#cart');

const fetchAllProduct = () => {
	fetch('https://fakestoreapi.com/products')
		.then((res) => res.json())
		.then((json) => {
			let allProduct = json
				.map((product) => {
					return `
					<div class="flex p-6 bg-gray-50 m-2 rounded-md max-w-xl">
					  <div class="flex-none w-44 relative">
						<img src="${product.image}" />
					  </div>
					  <form class="flex-auto pl-6">
						<div class="flex flex-wrap items-baseline">
						  <h1 class="w-full flex-none font-semibold mb-2.5">
						  ${product.title}
						  </h1>
						  <div class="text-4xl leading-7 font-bold text-purple-600">$
						  ${product.price}
						  </div>
						  <div class="text-sm font-medium text-gray-400 ml-3">
							In stock
						  </div>
						</div>
						<div class="flex items-baseline my-8">
						  <div class="space-x-2 flex text-sm font-medium">
							<label>
							  <input class="w-9 h-9 flex items-center justify-center rounded-full bg-purple-700 text-white" name="size" type="radio" value="xs" checked>
							  XS
							</label>
							<label>
							  <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="s">
							  S
							</label>
							<label>
							  <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="m">
							  M
							</label>
							<label>
							  <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="l">
							  L
							</label>
							<label>
							  <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="xl">
							  XL
							</label>
						  </div>
						  <div class="ml-3 text-sm text-gray-500 underline">Size Guide</div>
						</div>
						<div class="flex space-x-3 mb-4 text-sm font-semibold">
						  <div class="flex-auto flex space-x-3">
							<button class="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white" type="button">Buy now</button>
							<button onclick="buyNow('${product.id}')"  class="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700" type="button">Add to bag</button>
						  </div>
						  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like">
							<svg width="20" height="20" fill="currentColor">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
							</svg>
						  </button>
						</div>
						<p class="text-sm text-gray-500">
						  Free shipping on all continental US orders.
						</p>
					  </form>
					</div>
					`;
				})
				.join('');
			products.insertAdjacentHTML('afterbegin', allProduct);
		});
};

fetchAllProduct();
let cartIteam = [];
const buyNow = (e) => {
	if (cartIteam.indexOf(e) == -1) {
		cartIteam.push(e);
		localStorage.setItem('cartItem', JSON.stringify(cartIteam));
		cartlist.innerText = cartIteam.length;
	} else {
		alert('this iteam already in your cart');
	}
};

// `
//                 <div class="col-md-3">
//                     <div class="card product" style="width: 18rem">
//                         <img src="${product.image}"   class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">${product.title}</h5>
//                             <h5 class="card-title">${product.price}</h5>
//                             <p class="card-text">
//                                 ${product.description}
//                             </p>
//                             <a onclick="buyNow('${product.id}')" class="btn btn-primary">Buy Now</a>
//                         </div>
//                     </div>
//                 </div>
//                 `
