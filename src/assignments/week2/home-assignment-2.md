## Home assignment 2

Assignments are in `src/assignments/week2/index.js`. There is also corresnponding test file, `index.test.js`. Tests are there for you to guide you and give you examples how functions are used.

#### 1. Write a function `negate` 
`negate` takes a function that returns boolean and returns new function that returns also boolean,
but the return value will be reversed compared to original function.

```javascript
const isEven = x => x % 2 === 0
const isOdd = negate(isEven)
isEven(2) // true
isOdd(2) // false 
```

#### 2. Write a function `prop`
`prop` accepts key (string) and object and return value of given object under that key. Make it curried.

```javascript
const foobar = { foo: 'foo', bar: 'bar' }
const getFoo = prop('foo')
getFoo(foobar) // 'foo'
```

#### 3. Write a function `filter` using `Array.prototype.reduce`
It should behave exactly as `Array.prototype.filter`, but it should be curried and follow data-last principle.

```javascript
filter(isOdd)([1, 2, 3, 4, 5, 6]) // [1, 3, 5]
```

#### 4. Write a function `map` using `Array.prototype.reduce`
It should behave exactly as `Array.prototype.map`, but it should be curried and follow data-last principle.

```javascript
map(x => x + 1)([1, 2, 3]) // [2, 3, 4]
```

#### 5. Write a function `filterUndoneTodos`
It accepts list of todos and return list of todos consisting only undone todos.
Use `negate`, `prop` and `filter` defined in previous exercises.

#### 6. Write a function`countTodos`
Write a function that accepts array of todos and returns array of three integers,
where first number shows number of undone todos, second number shows number of done todos and last number total number of todos.

```javascript
countTodos = todos => undefined
```

#### 7. Write a function `todoItem`
`src/data/todos.js` contains punch of todo item objects.
Write a function that accepts single todo item object and returns HTML representation of it.
Use `tag` function defined in the lecture (also defined below).
Returned element should contain one div with children for status, title and description.

```javascript
import { curry } from 'ramda'

const tag = curry((tagName, attrs, children) => {
  const { className } = attrs

  let element = document.createElement(tagName)
  if (className) {
    element.classList.add(...className.split(' '))
  }

  children.forEach(child => element.append(child))

  return element
})
```

Example:
```html
<div>
	<span>Status</span>
	<div>Title</div>
	<p>Description</p>
</div>
``` 

#### 8. Write a function `todoItems`
Write a function that accepts array of todos and returns array of todo item HTML representations.
Use it to render todos on the page (in `src/index.js`, see example below).

```javascript
import { yourFunction } from 'path/to/yourFunction'
const root = document.getElementById('app') // This assumes public/index.html has an element with id='app'
root.replaceChildren(yourFunction())
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MjE3OTg1OCwzOTA5NjU4NzJdfQ==
-->