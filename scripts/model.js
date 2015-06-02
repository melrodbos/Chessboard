(function(window) {

  var game = [ //list of 5-tuples representing fromRank, fromFile, toRank, toFile. 
         {
             fromRank: '.rank-2',
             fromFile: '.file-d',
             toRank: '.rank-4',
             toFile: '.file-d',
             piece: 'whitepawn',
         }

     ];

})(window);




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
// From MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Creating_a_two-dimensional_array):

// var board = [
//   ['R','N','B','Q','K','B','N','R'],
//   ['P','P','P','P','P','P','P','P'],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   ['p','p','p','p','p','p','p','p'],
//   ['r','n','b','q','k','b','n','r'] ];
//
// console.log(board.join('\n') + '\n\n');
//
// // Move King's Pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// console.log(board.join('\n'));


//IFEE to wrap the module:
// attaching the chess to the scope is a preferrable pattern:
