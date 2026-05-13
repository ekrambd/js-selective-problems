//12. Flatten Array

var flatternArr = function(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(Array.isArray(arr[i])){
            result = result.concat(flatternArr(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;    
};

console.log(flatternArr([1,2,[3,4],5]));