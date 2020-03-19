const list = document.querySelector('.list')
const listItems = document.getElementsByTagName('label')
const addButton = document.querySelector('.add')
const inputBox = document.querySelector('#todo-item');
let addedTodos = 0
  
addButton.addEventListener('click', submitHandler); 


function submitHandler(event) {
    event.preventDefault()
    addedTodos++;
    const template = document.querySelector("#todoTemplate");
    const domFrag = template.content.cloneNode(true);
    const todo = domFrag.querySelector('.todo')
    const todoLabel = domFrag.querySelector('label')
    const todoInput = domFrag.querySelector('.todo__checkbox')
    todoLabel.htmlFor = `todo-number-${addedTodos}`
    todoInput.id = `todo-number-${addedTodos}`

    let userInput = inputBox.value;
    if(!userInput){
        console.warn('write something!');
        return;
    }
    
    domFrag.querySelector('.todo__text').textContent = userInput
    todo.addEventListener('click', (event) => {
        if (event.target.tagName === "BUTTON") {
            event.currentTarget.remove()
        }
    })
    todo.addEventListener('click', (event) => {
      if (event.target.tagName === "INPUT") { 
          todoLabel.classList.toggle('todo__text--done')
      }
    })

    list.appendChild(domFrag)

    inputBox.value = ""; 
}

