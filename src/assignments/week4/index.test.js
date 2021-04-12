import { rgbToHex } from 'src/assignments/week4'

describe('rgbToHex()', () => {
  it('converts correctly', () => {
    expect(rgbToHex(0, 0, 0)).toEqual('#000000')
    expect(rgbToHex(127, 127, 127)).toEqual('#7f7f7f')
    expect(rgbToHex(255, 255, 255)).toEqual('#ffffff')
  })
})
