//21. Check Array if sorted

var checkSorted = function(arr){
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > arr[i+1]) return false;
    }
    return true;    
};
console.log(checkSorted([1, 2, 3]));
console.log(checkSorted([1, 3, 2, 4]));