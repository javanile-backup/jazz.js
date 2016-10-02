
const jazz = require('../../jazz');

jazz.script([
    bind => jazz.print   ("Start wait 2000ms", bind.next),  
    next => jazz.timeout (2000, next),
    next => jazz.print   ("!!! now wait 4000ms", next),  
    next => jazz.timeout (4000, next),
    next => jazz.print   ("ending", next)
]);
