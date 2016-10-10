import log, { hookConsoleLog } from '../source'

class ExampleLog {
  constructor () {
    this.obj = {hello: 'world', anotherKey: [0, 1]}
    this.arr = [1, 3, 5, 7, 9]
  }
  hello () {
    log('Logging some text with log()', this.obj, this.arr)
  }
}

class ExampleConsoleLog {
  _hello () {
    console.log('Called with console.log')
  }
}

let e1 = new ExampleLog()
let e2 = new ExampleConsoleLog()

e1.hello()
console.log('standard console.log without the hook')
hookConsoleLog()
console.log('console.log hooked now')
e2._hello()

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
// function hslToRgb (h, s, l) {
//   var r, g, b

//   if (s == 0) {
//     r = g = b = l // achromatic
//   } else {
//     var hue2rgb = function hue2rgb (p, q, t) {
//       if (t < 0) t += 1
//       if (t > 1) t -= 1
//       if (t < 1 / 6) return p + (q - p) * 6 * t
//       if (t < 1 / 2) return q
//       if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
//       return p
//     }

//     var q = l < 0.5 ? l * (1 + s) : l + s - l * s
//     var p = 2 * l - q
//     r = hue2rgb(p, q, h + 1 / 3)
//     g = hue2rgb(p, q, h)
//     b = hue2rgb(p, q, h - 1 / 3)
//   }

//   return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
// }

// let colors = []
// for (let h = 0; h < 360; h += 30) {
//   colors.push(hslToRgb(h / 360, 1, 0.75))
//   colors.push(hslToRgb(h / 360, 1, 0.90))
// }
// console.log(`const colors = [${colors.map(x => "'#" + x.map(c => ('0' + c.toString(16)).slice(-2)).join('') + "'").join(',')}]`)
