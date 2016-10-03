# Jazz.js
Let's stop with the false promises. Listen ''Jazz.js''

- https://github.com/Javanile/Jazz.js
- https://www.npmjs.com/package/jazz.js

## How script works

Jazz script enable you to run sequential
``` javascript
const jj = require('jazz.js');

// run sequential task chained
jj.script([
  // first task
  function(next) {
    // at end of this process 'next' point to second task and run it 
    callAsyncProcess1(next);
  },
  // second task
  function(next) {
    // at end of this process 'next' point to thirt task and run it 
    callAsyncProcess2(next);
  },
  // thirt task
  function(next) {
    // at end of this process 'next' point to (if have) 
    callAsyncProcess3(next);
  },
]);
```

## Online examples
A short list of run sequential script:
- https://runkit.com/francescobianco/jazz-js-sample-script-1
- https://runkit.com/57f20ded751b541400b4da6b/57f20ded751b541400b4da6c
