const formList = document.querySelector(".form-list");
const list = document.querySelector(".list");
const listItems = list.getElementsByTagName("label");
const addButton = document.querySelector(".add");
const inputBox = document.querySelector("#todo-item");
const startingPageElements = formList.childElementCount
let addedTodos = 0;
const checkedItems = document.getElementsByClassName('todo__text--done')
const filterButton = document.querySelector('#filter')
const doneButton = document.querySelector('#all')

addButton.addEventListener("click", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  addedTodos++;
  const template = document.querySelector("#todoTemplate");
  const domFrag = template.content.cloneNode(true);
  const todo = domFrag.querySelector(".todo");
  const todoLabel = domFrag.querySelector("label");
  const todoInput = domFrag.querySelector(".todo__checkbox");
  const err = document.createElement("p");
  let message = document.createTextNode("Error: please write something");
  todoLabel.htmlFor = `todo-number-${addedTodos}`;
  todoInput.id = `todo-number-${addedTodos}`;

  let userInput = inputBox.value;

  if (userInput) {
    domFrag.querySelector(".todo__text").textContent = userInput;
    if (formList.childElementCount === startingPageElements + 1){
      formList.removeChild(formList.childNodes[formList.childNodes.length-1]);
    }
    todo.addEventListener("click", event => {
      if (event.target.tagName === "INPUT") {
        todoLabel.classList.toggle("todo__text--done");
      }
    });
    domFrag.querySelector('.todo__text').textContent = userInput;
    todo.addEventListener('click', (event) => {
        if (event.target.tagName === "BUTTON") {
            event.currentTarget.remove()
        }
      })
    list.appendChild(domFrag);

    inputBox.value = "";
  } 
  
  else if(formList.childElementCount === startingPageElements) {
    err.appendChild(message);
    formList.appendChild(err);
  }
}

filterButton.addEventListener("click", () =>{
  for (let i=0; i < checkedItems.length; i++){
    checkedItems[i].parentNode.classList.add('hide')
  } 
})

doneButton.addEventListener("click", () =>{
  for (let i=0; i < checkedItems.length; i++){
    checkedItems[i].parentNode.classList.remove('hide')
  } 
})


