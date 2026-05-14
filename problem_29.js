//29. Array union

let union = function(arr1,arr2){
    let set = new Set(arr1);
    let result = Array.from(set);
    for(let i = 0; i < arr2.length; i++)
    {   
        if(!set.has(arr2[i])){
            result.push(arr2[i]);
            set.add(arr2[i]);
        }
    }
    return result;    
};

console.log(union([1,2,3],[2,4]));