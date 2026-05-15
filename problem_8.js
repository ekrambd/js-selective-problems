//8. Closure Lexical Memory Scope

var outer = function(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
};

const counter = outer();
counter();
counter();
counter();