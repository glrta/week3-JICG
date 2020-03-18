const todos = document.querySelectorAll('form > div')

todos.forEach(todo => {
  todo.addEventListener('click', (event) => {
    let text = todo.querySelector('label')
    let e = event.target.tagName;

    if (e === "INPUT") { // label elements cause a click event on their corresponding input
      if (Array.from(text.classList).includes('todo__text--done')) {
        text.classList.remove('todo__text--done')
      } else {
        text.classList.add('todo__text--done')
      }
    }

  })
})