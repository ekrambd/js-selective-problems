//19. Most Repeated Element

var mostRepeatedElement = function(nums){
    let map = new Map();
    let majorityElement = Math.floor(nums.length/2);
    for(let i = 0; i < nums.length; i++)
    {
        let count = map.get(nums[i]);
        if(count == null){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],count+1);
        }
        if(map.get(nums[i]) > majorityElement){
            return nums[i];
        }
    }    
};

console.log(mostRepeatedElement([3,2,3]));
console.log(mostRepeatedElement([2,2,1,1,1,2,2]));