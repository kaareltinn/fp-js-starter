import { prop } from 'ramda'
import {
  calculateAge,
  classNames,
  filterByAge,
  persons,
  orderBy,
  orderByDate,
} from 'src/assignments/week3'

describe('classNames', () => {
  it('returns class name', () => {
    expect(classNames({})).toEqual('')
    expect(classNames({ foo: true, bar: true })).toEqual('foo bar')
    expect(classNames({ foo: false, bar: true })).toEqual('bar')
    expect(classNames({ foo: false, bar: false })).toEqual('')

    expect(classNames('foo', { foo: false, bar: true })).toEqual('foo bar')
    expect(classNames({ foo: false, bar: true }, 'foo')).toEqual('bar foo')
    expect(classNames('foo zen', { foo: false, bar: true })).toEqual('foo zen bar')
    expect(classNames('foo', { foo: false, bar: true }, 'zen')).toEqual('foo bar zen')
    expect(classNames('foo', {}, 'zen')).toEqual('foo zen')
    expect(classNames('foo bar', {}, 'zen')).toEqual('foo bar zen')
    expect(classNames('foo bar', { foo: false }, 'zen')).toEqual('foo bar zen')
  })
})

describe('calculateAge', () => {
  it('returns correct ages', () => {
    expect(calculateAge(persons[0])).toEqual(20)
    expect(calculateAge(persons[1])).toEqual(28)
    expect(calculateAge(persons[2])).toEqual(42)
    expect(calculateAge(persons[3])).toEqual(57)
    expect(calculateAge(persons[4])).toEqual(26)
  })
})

describe('orderByDate()', () => {
  it('orders correctly', () => {
    expect(orderByDate(persons).map(prop('name'))).toEqual([
      'Jane Doe',
      'Doe Doe',
      'Moe Doe',
      'Mary Doe',
      'Joe Doe'
    ])
  })
})

describe('filterByAge()', () => {
  it('orders correctly', () => {
    expect(filterByAge(30)(persons).map(prop('name'))).toEqual(
      expect.arrayContaining([
        'Moe Doe',
        'Mary Doe',
        'Joe Doe'
      ])
    )
  })
})

describe('orderBy', () => {
  it('orders correctly by dob', () => {
    expect(orderBy('dob')(persons).map(prop('name'))).toEqual([
      'Jane Doe',
      'Doe Doe',
      'Moe Doe',
      'Mary Doe',
      'Joe Doe'
    ])
  })

  it('orders correctly by age', () => {
    expect(orderBy('age')(persons).map(prop('name'))).toEqual([
      'Joe Doe',
      'Mary Doe',
      'Moe Doe',
      'Doe Doe',
      'Jane Doe',
    ])
  })

  it('orders correctly by name', () => {
    expect(orderBy('name')(persons).map(prop('name'))).toEqual([
      'Doe Doe',
      'Jane Doe',
      'Joe Doe',
      'Mary Doe',
      'Moe Doe',
    ])
  })
})
