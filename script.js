const list = document.querySelector('.list')
const listItems = document.getElementsByTagName('label')
const addButton = document.querySelector('.add')
let inputBox = document.querySelector('#todo-item')

console.log(list)
console.log(listItems)


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