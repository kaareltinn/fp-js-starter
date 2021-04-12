import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from 'snabbdom'

import hh from 'hyperscript-helpers'

const { div } = hh(h)

const identity = x => x

export const classes = (names) =>
  names
    .split(' ')
    .filter(identity)
    .reduce((acc, name) => ({ ...acc, [name]: true }), {})

export const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
])

const main = (store, oldVNode) => {
  const { dispatch, getState, subscribe } = store

  const unsubscribe = subscribe(() => {
    const newVNode = view(dispatch, getState())
    patch(oldVNode, newVNode)
    unsubscribe()
    main(store, newVNode)
  })
}

export const startApp = (store, root) => {
  main(store, root)
  store.dispatch({})
}

export const createStore = (update, initialState) => {
  let listeners = []
  let currentState = update(initialState, {})

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = update(currentState, action)

      listeners.forEach((listener) => {
        listener()
      })
    },
    subscribe: (newListener) => {
      listeners.push(newListener)

      const unsubscribe = () => {
        listeners = listeners.filter(l => l !== newListener)
      }

      return unsubscribe
    }
  }
}

// ## START FROM HERE ##

// Refactor to function style
// * No temporary variables
// * No mutation
// * No if-statements or other control flow statements
// * No return statement
// * Use declarative style
export const rgbToHex = (r,g,b) => {
	r = r.toString(16)
	g = g.toString(16)
	b = b.toString(16)

	if  (r.length ==  1)
		r =  "0"  + r
	if  (g.length ==  1)
		g =  "0"  + g
	if  (b.length ==  1)
		b =  "0"  + b

	return  "#"  + r + g + b
}

const initialState = undefined // TODO: Define initial state

const actions = {
  // TODO: Add you actions
}

const update = (state = initialState, action) => {
  // TODO: Add state updating logic
}

const view = (dispatch, model) => undefined // TODO: Add view function

