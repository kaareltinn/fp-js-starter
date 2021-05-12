import { interval } from 'rxjs'
import { startWith, tap, scan } from 'rxjs/operators';

const getElem = (id) => document.getElementById(id)
const setValue = (val) => getElem('timer').innerText = val.toString()

const getTimeString = timeInSeconds =>
  new Date(timeInSeconds * 1000).toISOString().substr(11, 8)

const counter = interval(1000)
  .pipe(
    startWith(10000),
    scan((acc, _cur) => acc - 1),
    tap(val => setValue(getTimeString(val)))
  )

export const initialize = () => {
  counter.subscribe()
}
