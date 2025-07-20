//function to print n numbers using recursion
function print(n) {

    if (n <= 0) {
        return 0;
    } else {
        console.log(n);
        return print(n - 1);
    }

}

let s = print(9);
//console.log(s); 