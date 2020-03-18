
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
    if(document.body.contains(document.getElementById('todoTemplate'))){
        return true
    } else {
        return false
    }
}

test('Should add items within template format', t => {
    t.equal(isTemplate(list), true)
})

// function 

test('Does not add anything if input box is empty', t =>{
   
})