//18. Frequency count in Array

var freqCount = function(str){
    let map = new Map();
    for(let i = 0; i < str.length; i++)
    {
        let count = map.get(str[i]);
        if(count == null){
            map.set(str[i],1);
        }else{
            map.set(str[i],count+1);
        }
    }
    let result = {};
    map.forEach((value,key)=>{
        result[key] = value;
    });
    return result;    
};

console.log(freqCount("aabbccd"));