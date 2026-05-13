//6. Reverse Integer

var reverseInteger = function(num){
    let reverse = 0;
    while(num > 0){
        let digit = num % 10; //last digit
        reverse = reverse * 10 + digit; // do reverse
        num = Math.floor(num/10); //remove num from last element
    }
    return reverse;
};

console.log(reverseInteger(123));