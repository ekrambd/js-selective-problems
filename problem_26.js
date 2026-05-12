//26. Remove Falsy Value

var removeFalsy = function(arr){
    let bool = 1;
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i]) result.push(arr[i]);
    }
    return result;        
};

console.log(removeFalsy([0, 1, false, 2, "", 3, null]));