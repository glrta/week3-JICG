const list = document.querySelector('.list')
const listItems = document.getElementsByTagName('label')
const addButton = document.querySelector('.add')
let inputBox = document.querySelector('#todo-item')

console.log(list)
console.log(listItems)


addButton.addEventListener('click', (event) => {
    event.preventDefault()
    let userInput = inputBox.value
    const template = document.querySelector("#todoTemplate");
    const frag = template.content.cloneNode(true);
    frag.querySelector('.todo__text').textContent = userInput
    list.appendChild(frag)

})


// / this function uses the <template> defined in the HTML
// // it'll only get longer if we need to add more dynamic properties
// function createCardUsingTemplate(article) {
//   const { title, summary, image } = article;
//   // get the template for articles
//   const template = document.querySelector("#articleTemplate");
//   // clone the content of the template (returns a DocumentFragment)
//   const domFragment = template.content.cloneNode(true);
//   // we only need to add the dynamic properties inside the fragment
//   // since all the static ones (e.g. styling classNames) are set in the template
//   domFragment.querySelector("h3").textContent = title;
//   domFragment.querySelector("img").src = image;
//   domFragment.querySelector("p").textContent = summary;
//   // put the fragment onto the page
//   containerElement2.appendChild(domFragment);
// }

// articles.forEach(createCard);
// articles.forEach(createCardUsingTemplate);


test('Should add a list item', t => {  
    inputBox.value = 'Walk dog'
    addButton.click()
    t.equal(listItems.length, 1)
});


test('Should add user input item', t => { 
    inputBox.value = 'Wash dishes'
    addButton.click()
    t.equal(listItems[1].textContent, 'Wash dishes')
});

test('Should add items within template format', t => {
    
})