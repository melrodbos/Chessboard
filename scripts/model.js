//IIFE Immediately Invoked Function Expression)(http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript)
//-Other references: http://adripofjavascript.com/blog/drips/understanding-the-module-pattern-in-javascript.html

//Example:
// var val = (function(){
//     var a = 0;  // in the scope of this function
//     return function(x){
//         a += x;
//         return a;
//     };
// })();

// alert(val(10)); //10
// alert(val(11)); //21

