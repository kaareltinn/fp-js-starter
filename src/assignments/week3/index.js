import { compose, prop, curry, sortBy, filter, gte, map } from 'ramda'

export const persons = [
  {
    name: 'Joe Doe',
    sex: 'male',
    dob: '2001/02/07',
  },
  {
    name: 'Moe Doe',
    sex: 'male',
    dob: '1992/11/23',
  },
  {
    name: 'Doe Doe',
    sex: 'male',
    dob: '1978/05/19',
  },
  {
    name: 'Jane Doe',
    sex: 'female',
    dob: '1964/02/10',
  },
  {
    name: 'Mary Doe',
    sex: 'female',
    dob: '1995/01/02',
  },
]

// 1. Write a function `classNames`
export const classNames = undefined

// 2. Refactor to point-free
export const calculateAge = person => {
  const t1 = Date.parse(person.dob)
  const t2 = Date.now()

  return Math.floor((t2 - t1) / 3.15576e+10)
}

// 3. Order by date
export const orderByDate = undefined

// 4. Filter by age
export const filterByAge = undefined

// 5. Parameterized order
export const orderBy = undefined

// 6. personsTable
const tag = curry((tagName, attrs, children) => {
  const { className } = attrs

  let element = document.createElement(tagName)
  if (className) {
    element.classList.add(...className.split(' '))
  }

  children.forEach(child => element.append(child))

  return element
})

const textNode = (text) =>
  document.createTextNode(text)

export const personsTable = undefined

// 7. `view` function
export const view = undefined
