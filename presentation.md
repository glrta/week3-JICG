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

## WK3
### 3a Stop
- Planning and getting started look a long time - work on shortening it?
    - There could be tools for this e.g. James' whiteboard, also 
- Jack: losing sight of the big picture

### 3b Go
- **We should start using prettier as a team, and before every commit. There's also a setting so it runs every time you save**
- camelCase and BEM
- Share responsibility for project board and issues
- **Commit little and often like saving a Word doc + get co-authoring thing to work! (Gio)**
- Let's all try to be mindful of whether we are changing something that was established in a previous commit. If we really need to do it, it might help to let the other team know
- Relax about being scrum master :)
- Possibility: factor accessibility into every relevant issue as checkboxes like 'ensure screenreader compatible', rather than making it a separate issue
- co-author commits - sharing is caring

### 3c Continue
- Pair swapping often :)
- Teaching each other things
- Using live share and group hangouts - use more to ask questions?
- respecting each other's learning objectives

## Minutes
### Stop
#### Too much time planning
Chloe: we could use technologies to avoid going round in circles
Jack: Maybe right amount of planning but could have been quicker
Ivo: Now we know each other better this could speed up
Gio: Use the project board early on

#### Perspective
Jack: needs to keep the big picture in mind

### Go
#### Project board together
Chloe: Can we all take more responsibility

#### camelCase & BEM
Jack: It makes two separate teams to write similar code
Ivo: Can arrange teams by who knows syntax

#### commit little and often
Chloe: Change the driver so commits can be even
Gio: Let’s work out how co-authoring works

#### make other teams aware of changes
Ivo: It can cause problems if you change fundamental things (e.g. where things are, what things are called)
Jack: This might also help to reduce merge conflicts

#### scrum master should relax
Gio: no need to take on so much stress
Jack: good point!

#### accessibility
we should start including accessibility as checkboxes in each issue, with an issue to check at the end

#### Miro
Sounds good

### Continue
#### Pair swapping
We did this really well, and were flexible about it

#### Teaching each other
Let’s keep prioritising learning over completing the project

#### Using LiveShare and Hangouts / Jitsi
Not being too cautious to jump into each other’s rooms to ask questions or for help

#### Respecting each other’s learning objectives
Let’s be proactive with each other about our own learning objectives so we can support them
