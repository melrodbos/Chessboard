//IIFE Immediately Invoked Function Expression)(http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript)
//Other references: http://adripofjavascript.com/blog/drips/understanding-the-module-pattern-in-javascript.html
//http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
//http://benalman.com/news/2010/11/immediately-invoked-function-expression/
//http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

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

//Creating two dimensional arrays in JS:
// Example: 
// var items = [[1,2],[3,4],[5,6]];
// alert(items[0][0]); // 1



//IFEE to wrap the module:

