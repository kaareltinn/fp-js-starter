import {
  All,
  First,
  Min,
  Sum,
  Unique,
  getUserCities,
  safeGetUserCities,
  users,
  add2,
  add10,
  multBy2,
  compute,
  applyArray,
} from 'src/assignments/week5'

describe('Sum', () => {
  it('behaves correctly', () => {
    expect(Sum(0).concat(Sum(0)).toString()).toEqual('Sum(0)')
    expect(Sum(1).concat(Sum(2)).toString()).toEqual('Sum(3)')
    expect(Sum(2).concat(Sum(1)).toString()).toEqual('Sum(3)')
    expect(Sum(11).concat(Sum(-1)).toString()).toEqual('Sum(10)')
    expect(Sum(20).concat(Sum(22)).toString()).toEqual('Sum(42)')
  })
})

describe('Prod', () => {
  it('behaves correctly', () => {
    expect(Prod(0).concat(Prod(0)).toString()).toEqual('Prod(0)')
    expect(Prod(1).concat(Prod(2)).toString()).toEqual('Prod(2)')
    expect(Prod(2).concat(Prod(1)).toString()).toEqual('Prod(2)')
    expect(Prod(11).concat(Prod(-1)).toString()).toEqual('Prod(-11)')
    expect(Prod(2).concat(Prod(21)).toString()).toEqual('Prod(42)')
  })
})

describe('All', () => {
  it('behaves correctly', () => {
    expect(All(true).concat(All(true)).toString()).toEqual('All(true)')
    expect(All(false).concat(All(true)).toString()).toEqual('All(false)')
    expect(All(true).concat(All(false)).toString()).toEqual('All(false)')
    expect(All(1).concat(All(2)).toString()).toEqual('All(2)')
    expect(All(0).concat(All(2)).toString()).toEqual('All(0)')
    expect(All("").concat(All("foo")).toString()).toEqual('All()')
    expect(All("bar").concat(All("foo")).toString()).toEqual('All(foo)')
    expect(All(null).concat(All(undefined)).toString()).toEqual('All(null)')
  })
})

describe('Min', () => {
  it('behaves correctly', () => {
    expect(Min(0).concat(Min(0)).toString()).toEqual('Min(0)')
    expect(Min(1).concat(Min(2)).toString()).toEqual('Min(1)')
    expect(Min(2).concat(Min(1)).toString()).toEqual('Min(1)')
  })
})

describe('First', () => {
  it('behaves correctly', () => {
    expect(First(0).concat(First(0)).toString()).toEqual('First(0)')
    expect(First(1).concat(First(2)).toString()).toEqual('First(1)')
    expect(First(2).concat(First(1)).toString()).toEqual('First(2)')
  })
})

describe('Unique', () => {
  it('behaves correctly', () => {
    expect(Unique([1,1]).toString()).toEqual('Unique(1)')
    expect(Unique([1]).concat(Unique([1])).toString()).toEqual('Unique(1)')
    expect(Unique([1, 2]).concat(Unique([1])).toString()).toEqual('Unique(1,2)')
  })
})

describe('compute', () => {
  it('behaves correctly', () => {
    expect(compute([add10, multBy2, add2], 10).toString()).toEqual('Right 42')
    expect(compute([add10, multBy2, add2], '10').toString()).toEqual('Left "string is not a number"')
    expect(compute([add10, multBy2, add2], true).toString()).toEqual('Left "boolean is not a number"')
  })
})

describe('getUserCities()', () => {
  it('behaves correctly', () => {
    expect(getUserCities(1, users)).toEqual(['Tartu', 'Tallinn'])
    expect(getUserCities(2, users)).toEqual(['Võru'])
    expect(getUserCities(3, users)).toEqual([])
  })
})

describe('safeGetUserCities()', () => {
  it('behaves correctly', () => {
    expect(safeGetUserCities(1, users).toString()).toEqual('Just [ Just "Tartu", Just "Tallinn" ]')
    expect(safeGetUserCities(2, users).toString()).toEqual('Just [ Just "Võru", Nothing ]')
    expect(safeGetUserCities(3, users).toString()).toEqual('Nothing')
  })
})

describe('applyArray()', () => {
  it('behaves correctly', () => {
    expect(applyArray([x => x, add2, multBy2])([1, 2, 3, 4, 5])).toEqual([
      1, 2, 3, 4, 5,
      3, 4, 5, 6, 7,
      2, 4, 6, 8, 10
    ])
  })
})
