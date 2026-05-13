//14. Sum of digits

var sum = function(num){
    let sum = 0;
    while(num > 0){
        let digit = num % 10;
        sum+=digit;
        num = Math.floor(num/10);
    }
    return sum;
};

console.log(sum(1234));