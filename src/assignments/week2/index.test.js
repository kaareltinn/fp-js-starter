import {
  negate,
  prop,
  filter,
  map,
  filterUndoneTodos,
  countTodos,
  todoItem,
  todoItems
} from 'src/assignments/week2'

describe('negate()', () => {
  it('negates simple function', () => {
    const func = () => true

    expect(negate(func)()).toEqual(false)
    expect(negate(negate(func))()).toEqual(true)
  })

  it('negates more complex function', () => {
    const func = n => n % 2 === 0

    expect(negate(func)(2)).toEqual(false)
    expect(negate(negate(func))(2)).toEqual(true)
    expect(negate(func)(3)).toEqual(true)
    expect(negate(negate(func))(3)).toEqual(false)
  })
})

describe('prop()', () => {
  it('retrieves value', () => {
    const obj = { foo: 'foo', bar: 'bar' }

    expect(prop('foo')(obj)).toEqual('foo')
    expect(prop('bar')(obj)).toEqual('bar')
    expect(prop('baz')(obj)).toEqual(undefined)
  })
})

describe('filter()', () => {
  it('filters correctly 1', () => {
    const arr1 = [1, 2, 3, 4, 5, 6]

    expect(filter(x => x)(arr1)).toEqual(arr1)
    expect(filter(x => x % 2 === 0)(arr1)).toEqual([2, 4, 6])
    expect(filter(x => x % 2 !== 0)(arr1)).toEqual([1, 3, 5])
  })

  it('filters correctly 2', () => {
    const arr1 = []

    expect(filter(x => x)(arr1)).toEqual([])
  })
})

describe('map()', () => {
  it('maps correctly 1', () => {
    const arr1 = [1, 2, 3]

    expect(map(x => x)(arr1)).toEqual(arr1)
    expect(map(x => x + 1)(arr1)).toEqual([2, 3, 4])
    expect(map(x => x * 2)(arr1)).toEqual([2, 4, 6])
    expect(map(x => x * 2)([])).toEqual([])
  })
})

describe('filterUndoneTodos()', () => {
  it('filters undone todos', () => {
    const todos = [
      {
        id: 1,
        status: 'done',
      },
      {
        id: 2,
        status: 'undone',
      },
      {
        id: 3,
        status: 'undone',
      },
      {
        id: 4,
        status: 'done',
      },
      {
        id: 5,
        status: 'undone',
      }
    ]

    expect(filterUndoneTodos(todos).map(x => x.id)).toEqual([2, 3, 5])
  })
})

describe('countTodos()', () => {
  it('returns count of todos', () => {
    const todos = [
      {
        id: 1,
        status: 'done',
      },
      {
        id: 2,
        status: 'undone',
      },
      {
        id: 3,
        status: 'undone',
      },
      {
        id: 4,
        status: 'done',
      },
      {
        id: 5,
        status: 'undone',
      }
    ]

    expect(countTodos(todos)).toEqual([3, 2, 5])
  })
})
