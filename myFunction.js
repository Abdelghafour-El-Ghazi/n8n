// Cache an expensive function's results by storing them. You may assume
// that the function only takes primitives as arguments.
//
// The function should return a function that, when called, will check if it has
// already computed the result and return that value instead if possible.
//
// Example:
// cacheAdd = myFunction(add);
// add(1,2) = 3
// cacheAdd(1,2) = 3 --> executes add function
// cacheAdd(1,2) = 3 --> returns from cache
// cacheAdd(2,2) = 4--> executes add function
//

function add(a,b){
    return a + b
}
function myFunction(func) {
    const cache = {}
    return function(a,b) {
        /* *******

        I do both orders so that I don't need to execute the expensive function
        for same arguments just because they have different orders
        this way cacheAdd(2,1) will just return the result of cacheAdd(1,2) from the cache
        
        ****** */
       const firstOrder = a + '' + b
       const secondOrder =  b + '' +  a
       const firstKey = firstOrder + ':' +  secondOrder
       const secondKey = secondOrder  + ':' +  firstOrder
       console.log(cache)
       if(cache[firstKey] || cache[secondKey]){
           return (cache[firstKey] || cache[secondKey])
       }
       cache[firstKey] = func(a,b)
       return cache[firstKey]
    }
};
