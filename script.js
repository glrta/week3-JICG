const todos = document.querySelectorAll('.todo') // these are not rendered until a function makes them
const list = document.querySelector('.list')
const listItems = document.getElementsByTagName('label')
const addButton = document.querySelector('.add')
let inputBox = document.querySelector('#todo-item');

todos.forEach(todo => {
  todo.addEventListener('click', (event) => {
    let text = todo.querySelector('label')
    let e = event.target.tagName;

    if (e === "INPUT") { // label elements cause a click event on their corresponding input
      if (Array.from(text.classList).includes('todo__text--done')) {
        text.classList.remove('todo__text--done')
      } else {
        text.classList.add('todo__text--done')
      }
    }

  })
})
  
addButton.addEventListener('click', (event) => {
    event.preventDefault()

    let userInput = inputBox.value
    if(userInput === '' || null){
        alert('write something!')
    } else {
        const template = document.querySelector("#todoTemplate");
        const domFrag = template.content.cloneNode(true);
        domFrag.querySelector('.todo__text').textContent = userInput
        list.appendChild(domFrag)
    }
})