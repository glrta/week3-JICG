console.groupCollapsed("TEST: Can add items")
    
    test('Should add a list item', t => {  
        inputBox.value = 'Walk dog';
        addButton.click();
        t.equal(listItems.length, 1);
    });

    test('Should add user input item', t => { 
        inputBox.value = 'Wash dishes'
        addButton.click()
        t.equal(listItems[listItems.length-1].textContent, 'Wash dishes')
    });

    function isTemplate(item){
        return document.body.contains(document.getElementById('todoTemplate'));
    }

    test('Should add items within template format', t => {
        t.equal(isTemplate(list), true)
    })

    test('Does not add anything if input box is empty', t =>{
        let lengthBefore = listItems.length;
        inputBox.value = ""
        addButton.click()
        let lengthAfter = listItems.length
        t.equal(lengthBefore, lengthAfter);
    })

    test('Clears box after input added', t => {
        inputBox.value = "something"
        addButton.click()
        t.equal(inputBox.value, "");
    })
        
console.groupEnd("TEST: Can add items")

console.groupCollapsed("TEST: Can delete items")

test('every todo has a delete button', assert => {
    // will be false positive if there are no todos
    const todos = Array.from(document.querySelectorAll('.todo'));
    let assertion = todos.every(todo => todo.querySelector('.todo__delete'))
    assert.equal(assertion, true)
})

test('clicking the delete button deletes a todo item', t => {
    const startingLength = list.children.length;
    document.querySelector('.todo__delete').click();
    const endLength = list.children.length;
    t.equal(startingLength - 1, endLength);
})

test('pressing the delete button deletes the correct todo', t => {
    let todos = document.querySelectorAll('.todo')
    const startingLength = todos.length
    const randomIndex = Math.floor(Math.random() * todos.length)
    const removableElement = todos[randomIndex]
    removableElement.remove();
    todos = Array.from(document.querySelectorAll('.todo'))
    const assertion = !todos.includes(removableElement) && todos.length === startingLength - 1;
    t.equal(assertion, true);
})


console.groupEnd("TEST: Can delete items")
    
console.groupCollapsed("TEST: Can filter items")

function countChecked(){
    let checkedItems = 0

    for(let i=0; listItems.length; i++){
        if (listItems[i].checked === true){
            checkedItems++
        }
        console.log(checkedItems)
    }
}

test('Counts how many checked items are in the list', t => {
    inputBox.value = 'Walk dog';
    addButton.click();
    inputBox.value = 'Do laundry';
    addButton.click();
    inputBox.value = 'Buy vegetables'
    addButton.click()

    let boxes = document.querySelectorAll('input[type="checkbox"]')
    console.log(boxes)

    for(let i=0; i < boxes.length; i++){
        boxes[i].checked = true
        boxes[i].classList.add('todo__text--done')
    }


})


console.groupEnd("TEST: Can filter items")