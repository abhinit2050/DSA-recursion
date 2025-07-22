function calculateFactorial(n){

    if(n==1 || n==0){
        return 1;
    } else if(n>1){
        return n * calculateFactorial(n-1)
    } else {
        return "Invalid input: n must be a non-negative integer.";
    }
}

const res = calculateFactorial(0)
console.log(res); 