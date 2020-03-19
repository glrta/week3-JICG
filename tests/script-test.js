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


console.groupCollapsed("TEST: Can mark items done")

function uncheckChecked(boxes) {
  boxes.forEach(box => {
    if (box.checked) {box.click()}
 });
}
test('Can check every checkbox', assert => {
  let checkboxes = Array.from(document.querySelectorAll('li input')) 
  let passing;
  checkboxes.forEach(checkbox => checkbox.click());
  if (checkboxes.length > 0) {passing = checkboxes.every(checkbox => checkbox.checked);}
  assert.equal(passing, true);
  checkboxes.forEach(checkbox => checkbox.click());
});

test("BEM styling is reapplied to todo item text when checkbox is clicked", assert => {
    let boxes = document.querySelectorAll('input[type=checkbox]');
    let textItems = document.querySelectorAll('li label');
    for (let i=0; i< boxes.length; i++){
        if (i%2==0){
            boxes[i].click();
            assert.equal(textItems[i].classList.contains('todo__text--done'), true);
        }
        else {
            boxes[i].click();
            boxes[i].click();
            assert.equal(textItems[i].classList.contains('todo__text--done'), false);
        }
    }

    uncheckChecked(boxes)
});

test('clicking a label ticks the corresponding checkbox', assert => {
  let labels = document.querySelectorAll('.todo > label');
  let checkboxes = document.querySelectorAll('.todo > input');
  let assertion = true;

  labels.forEach((e, i) => {
    if (i % 2 === 0) {e.click()}
  })

  checkboxes.forEach((e, i) => {
    if (i % 2 === 0 && !e.checked) {
      assertion = false;
    } else if (i % 2 !== 0 && e.checked) {
      assertion = false;
    }
  })

  assert.equal(assertion, true);

  uncheckChecked(checkboxes)
})


console.groupEnd("TEST: Can mark items done")


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
    // nb this test is dependent on others which insert todos
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
function countChecked(listItems){
    let checkedItems = 0

    for(let i=0; listItems.length; i++){
        if (listItems[i].checked === true){
            checkedItems++
        }
        console.log(checkedItems)
    }
}

countChecked(listItems)

// test('Counts how many checked items are in the list', t => {

//     t.equal()
//     }

// })


console.groupEnd("TEST: Can filter items")





document.querySelectorAll('.todo').forEach(todo => todo.remove())