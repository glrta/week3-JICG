
test('Should add a list item', t => {  
    inputBox.value = 'Walk dog'
    addButton.click()
    t.equal(listItems.length, 1)
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
    let lengthBefore = listItems.length
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

