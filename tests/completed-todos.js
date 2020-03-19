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

/*
test ideas
- Every todo has a checkbox
- Every checkbox is clickable
- clicking the checkbox creates a strikethrough of the checkbox's label
- clicking the checkbox makes the checkbox's label less opaque
- strikethrough is not applied to todo item text when checkbox is not checked
*/