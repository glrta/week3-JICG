# To do list - JICG

![do it](https://media.giphy.com/media/CpgNjk2E54p7W/giphy.gif)

---

## End product
![website](https://media.giphy.com/media/QvAxQck0rFECYIVwiQ/giphy.gif)

---

## Work process

- __initial scrum__: shared learning objectives and initial blockers (i.e. testing)

- __created shared resources together__: HTML, CSS and JS, a html template element with class names that teams could use

- __devised tests__
    - integration tests based on user stories
    - accessibility tests for manual testing

---

![kanban](https://i.imgur.com/FjN10cm.png)


---

### Accessible user stories

- As a motor-impaired user, I want to:
    - be able to use the site without a mouse

- As a screenreader user, I want to:
    - be able to clearly distinguish what buttons do and hear a description of the page

---

## Learning objectives

- Gio: DOM/`template` & tests, NO STYLING!
- Chloe: TDD approach and templates
- Ivo: CSS selectors, CSS pseudo-elements, writing tests first
- Jack: TDD, using node lists, BEM modifier, and navigating the scrum master role

---

### Things we learned

![learning](https://media.giphy.com/media/IPbS5R4fSUl5S/giphy.gif =400x)

---

### Tests
- We wrote about 166 lines of tests
- Because all our functions changed the state of the DOM and most were added by another function, all our tests were integration tests. 
- we used console grouping methods to group our tests. `console.groupCollapsed` kept tests minimised in the console by default

---

- We used ping-ponging when writing the tests. This meant that the tests don't have a consistent style, but writing them was really interesting and we learned to approach development from a new direction.

---

```javascript=1
test("Does not add anything if input box is empty", t => {
  let lengthBefore = listItems.length;
  inputBox.value = "";
  addButton.click();
  let lengthAfter = listItems.length;
  t.equal(lengthBefore, lengthAfter);
});
```

---

### Other things we've learnt

- How to use templates
- How to select every label that comes after a checked checkbox (thanks Oli):
```css=1
    input:checked + label {
        text-decoration: line-through; 
    }
```

---

- You can add an event handler to a node before you add the node to the DOM
- Can search through a node's children by calling method on node rather than on document
```javascript=1
const listItems = list.getElementsByTagName("label");
```

- Advanced styling (types, children, pseudo)
- Flex
- Tool: [Peek](https://github.com/phw/peek) 



---

## What we're proud of

![proud](https://media.giphy.com/media/l0He0cVv8lGggpruo/giphy.gif)

---

- Works well unless you have more than five things to do
- Good tests which helped development
- Looks nice and calm
- Pair programming
- Good code coverage
- Coordinating a plan while working from home was surprisingly easy
- Making an effort to be patient with and learn from each other


---

## What we struggled with


![struggles](https://media.giphy.com/media/l0HU3GIUuoOX2U4H6/giphy.gif)

---

- Lots of merge conflicts...
- Naming inconsistency led to confusions later on down the line - agreeing on a 'house style' might have helped
- Body positioning & Flexbox
- Filter function
- Keeping code modular - our script was basically one function which took up 40 lines
- Significance of live vs static NodeLists
- Keeping our test functions pure - some of our tests relied on previous tests that added todos to the DOM. 

---

![questions](https://media.giphy.com/media/xT5LMB2WiOdjpB7K4o/giphy.gif)
