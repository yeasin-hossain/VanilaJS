let getuser = async () => {
	let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	let data = await res.json();
	return data;
};

getuser().then((data) => {});

const factorial = (n) => {
	let fact = 1;
	for (let i = 1; i <= n; i++) {
		fact = fact * i;
	}
	return fact;
};

console.log(factorial(5));

const fr = (n) => {
	if (n == 0) {
		return 1;
	} else {
		return n * fr(n - 1);
	}
};

console.log(fr(5));

let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
	fibo[i] = fibo[i - 1] + fibo[i - 2];
	console.log(fibo);
}
