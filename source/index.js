const consoleLog = console.log.bind(console)

const chromeRegex = new RegExp('^\\s*?at\\s*(\\S*?)\\s') // at ExampleConsoleLog.hello (example.js:93)
const firefoxRegex = new RegExp('^\\s*(\\S*?)@\\S*\\/(\\S*)\\.') // hello@file:///~~~~~~/stacklogger/distribution/example.js:78:9

export default function log () {
  // we don't want to override logs that already specify a color
  if (arguments.length > 0 && typeof(arguments[0]) === 'string' && arguments[0].trim().includes('%c')) return void consoleLog(...arguments)
  let stackframe = (new Error()).stack.split('\n')
  // try to match chrome first
  let match = chromeRegex.exec(stackframe[2])
  let callee = match ? match[1] : null
  if (!callee) { // try firefox
    match = firefoxRegex.exec(stackframe[1])
    callee = match ? `${match[2]}.${match[1]}` : ''
  }
  let className = callee.split('.')[0]
  // make a certain className always have the same background color by computing a hash on it
  let hash = getHashCode(className) % colors.length
  consoleLog(`%c${callee}`, `color: #000; background: ${colors[hash]}`, ...arguments)
}

const getHashCode = s => s.split('').reduce((prevHash, curChar) => prevHash * 31 + curChar.charCodeAt(0), 0)

export function hookConsoleLog () {
  console.log = log
}

// colors created by enumerating HSL color wheel from 0...360 in 30 degree steps, with luminosity 75 and 90
const colors = ['#ff8080', '#ffcccc', '#ffbf80', '#ffe6cc', '#ffff80', '#ffffcc', '#bfff80', '#e6ffcc', '#80ff80', '#ccffcc', '#80ffbf', '#ccffe6', '#80ffff', '#ccffff', '#80bfff', '#cce5ff', '#8080ff', '#ccccff', '#bf80ff', '#e5ccff', '#ff80ff', '#ffccff', '#ff80bf', '#ffcce6']
