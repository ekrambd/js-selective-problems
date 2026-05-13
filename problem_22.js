//22. Find missing Number

var findMissingNumber = function(nums){
    let actualSum = 0;
    for(let i = 0; i < nums.length; i++)
    {
        actualSum+=nums[i];
    }
    let windowSum = 0;
    for(let i = 0; i <= nums.length; i++)
    {
        windowSum+=i;
    }
    return windowSum-actualSum;           
};

console.log(findMissingNumber([3,0,1]));
console.log(findMissingNumber([0,1]));
console.log(findMissingNumber([9,6,4,2,3,5,7,0,1]));