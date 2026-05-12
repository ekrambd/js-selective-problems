//32. Remove Element in place

var removeElement = function(nums,value){
    let count = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] !== value) count++;
    }
    return count;       
};

console.log(removeElement([3,2,2,3],3));