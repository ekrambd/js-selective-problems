//30. Capatalize String

var capatalizeStr = function(str){
    let arr = str.split(" ");
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        let containWords = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        result.push(containWords);
    }
    return result.join(" ")    
};

console.log(capatalizeStr("I love bangladesh"));