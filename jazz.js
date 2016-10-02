/*\
 * 
 * 
 * 
\*/

module.exports = {

    /**
     * 
     * 
     * @param {type} stack
     * @returns {undefined}
     */
    script: function(stack)
    {
        //
        function binding(level)
        {
            //
            const init = function()
            {
                if (level < stack.length)
                {
                    const func = stack[level];

                    const bind = binding(level+1);

                    func(bind);
                }
            };
            
            init.next = init;
            
            return init;
        }

        const func = stack[0];

        const bind = binding(1);

        func(bind);
    },
    
    /**
     * 
     * 
     * 
     */
    print: function(object, cb)
    {
        //
        console.log(object);
       
        //
        if (typeof cb === 'function') {
            cb();
        }                        
    },
    
    /**
     * 
     * 
     */
    timeout: function(millis, cb) 
    {
        //
        setTimeout(cb, millis);        
    }
};