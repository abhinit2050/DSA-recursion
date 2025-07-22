/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n==1){
        return true;
    } else if(n%2 != 0 || n <= 0){
       
        return false;
    } else if(Math.abs(n)>=1){
       
        let res = n/2;
       
        return isPowerOfTwo(res)
    }
};

const result = isPowerOfTwo(-16)
console.log(result);