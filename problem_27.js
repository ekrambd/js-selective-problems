//27. Str Length wihout using Length

var strLength = function(str){
    let count = 0;
    for(let ch of str){
        count++;
    }
    return count;
};

console.log(strLength("Bangladesh"));