let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputFeild');

addToDoButton.addEventListener('click', () => {
	// ! add todo from input feild and style class
	let peragraph = document.createElement('p');
	peragraph.innerText = inputField.value;
	peragraph.classList.add('peragraph-styling');
	toDoContainer.appendChild(peragraph);
	inputField.value = '';

	// ! now react with todos remove and mark

	peragraph.addEventListener('click', () => {
		// peragraph.style.textDecoration = 'line-through';
		peragraph.classList.add('peragraph-complate');
	});
	// ! by doubble click remove the child from toDoContainer
	peragraph.addEventListener('dblclick', () => {
		toDoContainer.removeChild(peragraph);
	});
});
