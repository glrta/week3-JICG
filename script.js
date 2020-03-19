const list = document.querySelector('.list')
const listItems = document.getElementsByTagName('label')
const addButton = document.querySelector('.add')
const inputBox = document.querySelector('#todo-item');

  
addButton.addEventListener('click', submitHandler); 

function submitHandler(event) {
    event.preventDefault()
    const template = document.querySelector("#todoTemplate");
    const domFrag = template.content.cloneNode(true);
    const todo = domFrag.querySelector('.todo')

    let userInput = inputBox.value
    if(!userInput){
        alert('write something!');
        return;
    }
    domFrag.querySelector('.todo__text').textContent = userInput

    todo.addEventListener('click', (event) => {
      let text = todo.querySelector('label')
      let e = event.target.tagName;
  
      if (e === "INPUT") { 
          text.classList.toggle('todo__text--done')
      }
    })

    list.appendChild(domFrag)

    inputBox.value = ""; 
}