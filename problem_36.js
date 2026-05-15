//36. Chunk Array Size

var chunkArraySize = function(arr,size){
    let chunk = [];
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        chunk.push(arr[i]);
        if(chunk.length == size || i == arr.length - 1){
            result.push(chunk);
            chunk = [];
        }
    }
    return result;            
};

console.log(chunkArraySize([1,2,3,4,5,6,7], 2));