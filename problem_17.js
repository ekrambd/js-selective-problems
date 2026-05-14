//17. Some method

var checkNegative = function(nums){
    let result = nums.some((num)=>num < 0);
    return result;
};

console.log(checkNegative([1, 5, -1, 4]));
console.log(checkNegative([1, 5, 2, 4]));