## Home assignment 3

#### Write a function `classNames` 
Write a function classNames. It accepts arbitrary number of arguments (strings or objects) and returns string.
If argument is a string include it in the final string to be returned.
If an object include only keys if value evaluates truthy.
Use dot-chaining.

```javascript
classNames('foo', 'bar') // 'foo bar'
classNames({ foo: true, bar: true }) // 'foo bar'
classNames('foo bar', { baz: true, zen: false }) // 'foo bar baz'
classNames('foo bar', {}, 'zen') // 'foo bar zen'
classNames({ foo: '', bar: 0 }) // ''
```

#### Refactor following function to point-free

```javascript
export const calculateAge = person => {
  const t1 = Date.parse(person.dob)
  const t2 = Date.now()

  return Math.floor((t2 - t1) / 3.15576e+10)
}
```

#### Ordering
Consider following funtions:

```javascript
import { sortBy } from 'ramda'
Date.parse('2020/11/27') // 1606428000000

sortBy(Date.parse, ['2020/11/27', '2019/11/27', '2020/01/27'])
// ['2019/11/27', '2020/01/27', '2020/11/27']
```

Define a function `orderByDob` using `compose`.
It orders persons array by date of birth (earliest to latest).

Hint: Use `prop` function from previous week 

```javascript
orderByDueDate([
	{ id: 1, dob: '2020/02/01' },
	{ id: 2, dob: '2020/01/01' },
	{ id: 3, dob: '2020/01/15' },
]) // [{ id: 2, ... }, { id: 3, ... }, { id: 1, ... }]
```

#### Filtering
Write a function `filterByAge` that accepts number and returns new function which accepts
persons array and filters it by returning all persons who are younger then number passed in. 
Hint: use `filter` and `gt` functions from ramda

#### Parameterized ordering
Create `orderBy` function that takes string as an argument. String is a key on person object and is used
to order persons based on key's value.
Possible values for argument should be `name` , `age` and `dob`
When `name` given persons are ordered by name alphabetically.
When `dob` given persons are ordered by date of birth (earliest to latest)
When `age` given persons are ordered by age (youngest to oldest)

Hint: use `calculateAge`

#### `personsTable`
Implement function `personsTable` that accepts array of `person` object
and returns HTML table of persons. Each row is single person.
Use `tag` function from previous week.

To show text node use `textNode` function:
```javascript
const textNode = (text) => document.createTextNode(text)
```

Example HTML for table (using TailwindCSS):
```html
<table class="shadow-lg bg-white">
	<thead>
		<tr>
			<th class="bg-blue-100 border text-left px-8 py-4">Name</th>
			<th class="bg-blue-100 border text-left px-8 py-4">Sex</th>
			<th class="bg-blue-100 border text-left px-8 py-4">Age</th>
			<th class="bg-blue-100 border text-left px-8 py-4">Date of birth</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="text-left px-8 py-4">Joe Doe</td>
			<td class="text-left px-8 py-4">male</td>
			<td class="text-left px-8 py-4">20</td>
			<td class="text-left px-8 py-4">2001/02/07</td>
		</tr>
	</tbody>
</table>
```

#### Compose with filtering and ordering
Write a function `view` that  renders persons table. This function should take two arguments.
One for ordering criteria and other for age filter.
It should be possible to read arguments from query parameters.

`localhost:9000` should show all persons ordered by name
`localhost:9000?ageFilter=40&orderBy=age` should show persons younger than 40 ordered by age
`localhost:9000?ageFilter=20&orderBy=name` should show persons younger than 20 order by age
`localhost:9000?orderBy=dob` should show all persons order by date of birth
etc

One example how to access query parameters:
```javascript
const params = new URLSearchParams(window.location.search)
const filter = params.get('filter')
```
Using `view` function and processing query parameters should happen in `src/index.js`
(Impure code)


#### Bonus: Use `classNames` to highlight every second row
Use `classNames` function from previous exercise to hightlight every second row in persons table.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTk2NjkwNjY1XX0=
-->