# FAC19 week 3 project

At [Founders and Coders](https://www.foundersandcoders.com/about/) coding bootcamp we are tasked every week with a different project. A MVP is built in 1.5 days by 4 developers that follow the Agile methodology.

__Week 3 topics__: DOM manipulation and testing

See [week 3 schedule](https://founders-and-coders.gitbook.io/coursebook/week-3/schedule).

---

# CIJG

# What a to do

Welcome to the README for [our to do list website](https://fac19.github.io/week3-JICG/).

## The site

![Our site](https://i.imgur.com/sN6hFyq.jpg)



Here you can: 
- enter things to do by writing text and clicking Add or pressing enter
- mark them as done
- delete them (but please be sure, they're not coming back)



## Testing, 1, 2

This site was build using Test ~~Driven~~ Aware Development, by agreeing integration tests from our user stories and building unit tests from there.

For example, for deleting todo items:

```javascript=
console.groupCollapsed("TEST: Can delete items")

test('every todo has a delete button', assert => {
    const todos = Array.from(document.querySelectorAll('.todo'));
    let assertion = todos.every(todo =>
    todo.querySelector('.todo__delete'))
    //check every list item has button
    assert.equal(assertion, true)
})

test('clicking the delete button deletes a todo item', t => {
    const startingLength = list.children.length;
    document.querySelector('.todo__delete').click();
    const endLength = list.children.length;
    //check clicking delete button reduces list by one item
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
    //check a random list item is removed if its delete button is clicked
    t.equal(assertion, true);
})


console.groupEnd("TEST: Can delete items")
```

## Authors

- (Chloe)[chloeh24@hotmail.com]
- (Ivo)[ievans.storrie@gmail.com]
- (Jack)[jackherizsmith@gmail.com]
- (Giovanna)[to.gio@pm.me]
