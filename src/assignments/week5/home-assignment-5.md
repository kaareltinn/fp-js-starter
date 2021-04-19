## Home assignment 5


#### Refactor dot-chaining using `Identity`
Rewrite `countVowels` to use `Identity` functor
```javascript
export const countVowels = str =>
  str
    .split('')
    .filter(ch => /[aeiou]/.test(ch))
    .length
```

#### Implement `Prod`, `Any`, `Max`, `Last`, `Unique`
In lecture we saw `Sum`, `All`, `Min` and `First`.
Define their "counter-parts" `Prod`, `Any`, `Max`, `Last`
We also saw that `Array` is a semigroup. Define similar semigroup `Unique` holding only unique elements (like `Set`)


#### Merging using semigroups
```javascript
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
  to: product => undefined

  // from :: Tuple4 (Last String)
  //                (Unique String)
  //                (Max Int)
  //                (Any Bool)
  //      -> Product
  from: ({ a, b, c, d }) => undefined
}

// merge :: Semigroup m
//   	 => { to: a -> m, from: m -> a }
//       -> a -> a -> a
export const merge = strategy => (x, y) => undefined

const p1 = Product('Milk (Old)', ['dairy', 'drink'], Date.parse('2021-01-01'), false)
const p2 = Product('Milk', ['dairy', 'ingredient'], Date.parse('2021-02-02'), true)

merge(strategy)(p1, p2)
// Product('Milk', ['dairy', 'drink', 'ingredient'], '02/02/2021', true)
```

#### Handling nulls with `Maybe`
Refactor `getUserCities` to `safeGetUserCities` by removing all if-statements and mutation and other not-FP techniques.
```javascript
import { Maybe } from 'crocks'

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
export const safeGetUserCities = (userId, users) => undefined
```
#### Error handling with `Either`
Define a function `compute` using `Either`

```javascript
compute([add10, multBy2, add2], 10) // Right(42)
compute([add10, multBy2, add2], '10') // Left('String is not valid argument')
compute([add10, multBy2, add2], true) // Left('Bool is not valid argument')
```

#### Write `applyArray`

Define `applyArray`
```javascript
// applyArray :: Array f => f (a -> b) -> f a -> f b
const applyArray = undefined

// Note: applyArray([f1, f2, ..., fn])([x1, x2, ..., xn]) should equal to
// [ 
//  f1(x1), f1(x2), ..., f1(xn),
//  f2(x1), f2(x2), ..., f2(xn),
//  ...........................
//  fn(x1), fn(x2), ..., fn(xn)
// ]
```









<!--stackedit_data:
eyJoaXN0b3J5IjpbOTk2MTc1MzUzXX0=
-->