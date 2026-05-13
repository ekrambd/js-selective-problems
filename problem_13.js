//13. Largest Number in Flatten Array

var findLargest = function(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(Array.isArray(arr[i])){
            max = Math.max(max,findLargest(arr[i]));
        }else{
            max = Math.max(max,arr[i]);
        }
    }
    return max;    
};

console.log(findLargest([1,2,[3,4,7],5]));