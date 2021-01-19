let marks = [12, 43, 65, 86, 45, 87, 2, 45, 45, 97];
let mark = [0];
for (let i = 0; i < marks.length; i++) {
	if (marks[i] > mark) {
		mark = marks[i];
	}
}

console.log(mark);

let total = null;
for (let i = 0; i < marks.length; i++) {
	total = total + marks[i];
}

console.log(total);

var friends = ['alu', 'bulu', 'Culu', 'Dulu', 'fulu'];
var allNames = '';

for (let i = 0; i < friends.length; i++) {
	allNames = allNames + friends[i];
}

console.log(allNames);

let allNum = [
	21,
	34,
	21,
	34,
	655,
	78,
	5445,
	67,
	76,
	67,
	76,
	65,
	54,
	54,
	55,
	54,
];

let unique = [];

for (let i = 0; i < allNum.length; i++) {
	// if (allNum[i] != allNum[-i]) {
	// 	unique.push(allNum[i]);
	// }

	if (unique.indexOf(allNum[i]) == -1) {
		unique.push(allNum[i]);
	}
}
console.log(unique);

let speech =
	'lorem dfkgjn dfkjg oijtornsdfn sdklfg dklfjg dfgjr poionsd slkjrn sdfljken sdfjksd';

speech = speech.split(' ');
console.log(speech.length);
