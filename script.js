const list = document.querySelector('.list')
const listItems = document.getElementsByTagName('label')
const addButton = document.querySelector('.add')
let inputBox = document.querySelector('#todo-item')

addButton.addEventListener('click', submitHandler); 

// Trying to fic console problem
// addButton.addEventListener('keydown', function (e) {
//     if (e.keyCode === 13) {        
//         submitHandler;           
//     }
// })


function submitHandler(event) {
    event.preventDefault()

    let userInput = inputBox.value
    if(!userInput){
        alert('write something!');
        return;
    }
    const template = document.querySelector("#todoTemplate");
    const domFrag = template.content.cloneNode(true);
    domFrag.querySelector('.todo__text').textContent = userInput
    list.appendChild(domFrag)
    inputBox.value = ""; 
} 