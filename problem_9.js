//9. Prime Number

var isPrime = function(n){
    for(let i = 2; i*i <= n; i++)
    {
        if(n % i == 0) return false;
    }
    return true;        
};

console.log(isPrime(7));
console.log(isPrime(10));