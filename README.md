# stacklogger
## Overview
**Colored** JavaScript logging library that prepends the caller's `className.functionName` to the message. This helps tremendously when having many `console.log`s during your debugging phase, as you can see which class and function this message originated from.
It works best in the chrome dev tools:

![stacklogger console output chrome](https://raw.githubusercontent.com/MrToph/stacklogger/master/README/stacklogger-console-chrome.png "Chrome output")

Firefox also works, but with their JS engine there is no way (I know of) to reliably get the class name, so the filename is used instead (which should be fine because you keep your code modularized anyway :wink:).

![stacklogger console output firefox](https://raw.githubusercontent.com/MrToph/stacklogger/master/README/stacklogger-console-firefox.png "Firefox output")

## Usage
The output above is produced by the following code.
### Calling log directly
The library exports a `log` function that works exactly like `console.log`
```javascript
import log from 'stacklogger'

class ExampleLog {
  constructor () {
    this.obj = {hello: 'world', anotherKey: [0, 1]}
    this.arr = [1, 3, 5, 7, 9]
  }
  hello () {
    log('Logging some text with log()', this.obj, this.arr)
  }
}

let e1 = new ExampleLog()
e1.hello()
```

### Hooking console.log
If you already wrote your application using `console.log`, you can simply call `hookConsoleLog()` once at the start of your application, and all `console.log` calls will be redirected to the stacklogger's `log` function.
```javascript
import { hookConsoleLog } from 'stacklogger'
class ExampleConsoleLog {
  hello () {
    console.log('Called with console.log')
  }
}
console.log('standard console.log without the hook')
hookConsoleLog()
console.log('console.log hooked now')
let e2 = new ExampleConsoleLog()
e2.hello()
```