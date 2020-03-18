const list = document.querySelector('.list')
const listItems = document.getElementsByTagName('li')
const addButton = document.querySelector('.add')
let inputBox = document.querySelector('#todo-item')

console.log(list)
console.log(listItems)


addButton.addEventListener('click', (event) => {
    event.preventDefault()
    let userInput = inputBox.value
    const node = document.createElement('li');      // Create a <li> node
    const newItem = document.createTextNode(userInput);    // Create a text node
    node.appendChild(newItem);   // Append the text to <li>
    list.appendChild(node);    // Append <li> to <ul> 
    userInput = ''
})


test('Should add a list item', t => {  
    inputBox.value = 'Walk dog'
    addButton.click()
    t.equal(listItems.length, 1)
});


test('Should add user input item', t => { 
    inputBox.value = 'Wash dishes'
    addButton.click()
    t.equal(list[3], 'Wash dishes')
});



// const firstNumber = document.querySelector("#a");
// const secondNumber = document.querySelector("#b");
// const operator = document.querySelector("#sign");
// const submitButton = document.querySelector("button[type='submit']");
// const result = document.querySelector("#result");

// test("User input displays result correctly once form is submitted", obj => {
//     firstNumber.value = "-2";
//     secondNumber.value = "3";
//     operator.value = "+";
//     submitButton.click();
//     obj.equal(result.textContent, "1");
    
//     result.textContent = "";
// });