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
                <div class="col-md-3">
                    <div class="card product" style="width: 18rem">
                        <img src="${product.image}"   class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <h5 class="card-title">${product.price}</h5>
                            <p class="card-text">
                                ${product.description}
                            </p>
                            <a onclick="buyNow('${product.id}')" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
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
		cartlist.innerText = cartIteam.length;
	} else {
		alert('this iteam already in your cart');
	}
};
