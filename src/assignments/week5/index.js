import { Either, Maybe } from 'crocks'
import map from 'crocks/pointfree/map'

// ==== Assignment 1 ==== //
export const countVowels = str =>
  str
    .split('')
    .filter(ch => /[aeiou]/.test(ch))
    .length

// ==== Assignment 2 ==== //
export const Sum = x => ({
  val: x,
  concat: other => Sum(x + other.val),
  toString: () => `Sum(${x})`,
})

export const Prod = undefined

export const All = x => ({
  val: x,
  concat: other => All(x && other.val),
  toString: () => `All(${x})`,
})

export const Any = undefined

export const Min = x => ({
  val: x,
  concat: other => Min(x <= other.val ? x : other.val),
  toString: () => `Min(${x})`,
})

export const Max = undefined

export const First = x => ({
  val: x,
  concat: _other => First(x),
  toString: () => `First(${x})`,
})

export const Last = undefined

export const Unique = undefined

// ==== Assignment 3 ==== //
export const Tuple4 = (a, b, c, d) => ({
  a, b, c, d,
  concat: other => Tuple4(
    a.concat(other.a),
    b.concat(other.b),
    c.concat(other.c),
    d.concat(other.d),
  )
})

export const Product = (name, categories, createdAt, verified) => ({
  name,
  categories,
  createdAt: new Date(createdAt).toDateString(),
  verified,
})

export const mergeStrategy = {
  // to :: Product
  //    -> Tuple4 (Last String)
  //              (Unique String)
  //              (Max Int)
  //              (Any Bool)
  to: undefined,
  // from :: Tuple4 (Last String)
  //                (Unique String)
  //                (Max Int)
  //                (Any Bool)
  //      -> Product
  from: undefined,
}

// merge :: Semigroup m
//   	 => { to: a -> m, from: m -> a }
//       -> a -> a -> a
export const merge = undefined





// ==== Assignment 4 ==== //
export const users = {
  1: {
    username: 'Juku Puku',
    addresses: [
      {
        city: 'Tartu',
        street: 'Roosi',
        house_nr: '5',
      },
      {
        city: 'Tallinn',
        street: 'Vabaduse pst',
        house_nr: '5',
      },
    ]
  },
  2: {
    username: 'Mari Kari',
    addresses: [
      {
        city: 'Võru',
        street: 'Pikk',
        house_nr: '77',
      },
      {
        street: 'Kusagil',
      },
    ]
  },
  3: {
    username: 'Teet Tiit',
  },
}


const safeProp = key => obj => obj[key] ? Maybe.Just(obj[key]) : Maybe.Nothing()

export const getUserCities = (userId, users) => {
  const user = users[userId]
  let result = []

  if (user) {
    const addresses = user.addresses

    if (addresses) {
      result = addresses.reduce((acc, address) => {
        if (address.city) {
          acc.push(address.city)
        }
        return acc
      }, result)
    }
  }

  return result
}

// safeGetUserCities :: Number, User -> Maybe [Maybe String]
export const safeGetUserCities = undefined

// ==== Assignment 5 ==== //

export const add = x => y => x + y
export const mult = x => y => x * y

export const add2 = add(2)
export const add10 = add(10)
export const multBy2 = mult(2)

export const isNumber = x => typeof x === 'number' ? true : false
const err = val => `${typeof val} is not a number`

const { Left, Right } = Either

export const compute = undefined

// ==== Assignment 6 ==== //

export const applyArray = undefined
