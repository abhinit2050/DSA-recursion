/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let res=0;
    
    if(n<0){return "Number should be an integer and greater than or equal to 0"}
   
    if(n == 0 || n==1){ return n}

    if(n>1){
        let newRes = fib(n-1) + fib(n-2);
         res += newRes
    }

    return res;

};

console.log(fib(9)); 