## Home assignment 4
In this home assignment we are going to build upon the example we created in the lecture.
Main goal is to have working small application that could be used to create RGB and HEX color values
using three sliders. One for red, one for green, one for blue.
In some of the exercises you can be more creative and steps brought out in the exercise
descriptions are more like suggestions or guidance how to approach problem.

Final application should look similar to picture below:
[picture](https://drive.google.com/file/d/17C9Hs-uSZkl1-hMXzfcbtVUziyfka8sn/view?usp=sharing)

#### Requirements:
- Slider for red, green and blue color values.
- Color display to show color according to sliders settings.
- Two text displays to show HEX and RGB string values.
- Color display and text displays should react on slider changes reactively.

#### `rgbToHex` function
Rewrite rgbToHex function using functional manner. Do not use temporary variables, mutation, if statements, return statements. Use either dot chaining or composing. Use declarative style.

```javascript
const rgbToHex = (r,g,b) => {
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
```

#### Add blue and green color sliders to the application
- Update initial state
- Render slider elements
- Add new actions if needed and change `update` function to  update state accordingly
- Add action dispatching when slider value changes
- To test your work use console.log in `main` function to see if updates happen

####  Add color display
- Use element `background-color` to display color according to slider value.
- Displat should be relatively big in order to distinguish color.
- Use snabbdom style attribute to set style of the element. [https://github.com/snabbdom/snabbdom#the-style-module](https://github.com/snabbdom/snabbdom#the-style-module)

Example:
```javascript
div({
  class: { foo: true },
  style: { 'background-color': 'red' },
}, "I'm red!")
```

#### Displaying HEX and RGB values
- Display HEX value in the format of `#<HEX_VALUE>`, e.g `#7f7f7f`
- Display RGB value in the format of `RGB(<RED_VALUE>, <GREEN_VALUE>, <BLUE_VALUE>)`, e.g `RGB(127, 127, 127)`
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI5MzE2OTE2Ml19
-->