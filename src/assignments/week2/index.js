import { curry } from 'ramda'

// 1. Write a function `negate`
export const negate = undefined

// 2. Write a function `prop`
export const prop = undefined

// 3. Write a function `filter` using `Array.prototype.reduce`
export const filter = undefined

// 4. Write a function `map` using `Array.prototype.reduce`
export const map = undefined

// 5. Write a function `filterUndoneTodos`
export const filterUndoneTodos = undefined

// 6. Write a function`countTodos`
export const countTodos = undefined

// 7. Write a function `todoItem`
const tag = curry((tagName, attrs, children) => {
  const { className } = attrs

  let element = document.createElement(tagName)
  if (className) {
    element.classList.add(...className.split(' '))
  }

  children.forEach(child => element.append(child))

  return element
})

const div = tag('div')

export const todoItem = div({}, [
  // TODO: Add your code here
])

// 8. Write a function `todoItems`
export const todoItems = undefined
