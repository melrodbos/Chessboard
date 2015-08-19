(function(window){

  var chessGame = [ //List of 5 tuples representing from.rank, fromFile, to.rank, toFile.
        // Two dimensional array:
    ['.row rank-2','.square file-d','.row rank-4','square file-d','whitepawn'],
    ['.row rank-8','.square file-g','.row rank-6','square file-f','blacknight'],
    ['.row rank-2','.square file-c','.row rank-4','square file-c','whitepawn'],
    ['.row rank-7','.square file-e','.row rank-6','square file-e','blackpawn'],
    ['.row rank-2','.square file-g','.row rank-3','square file-g','whitebishop'],
    ['.row rank-7','.square file-d','.row rank-5','square file-d','blackbishop'],
    ['.row rank-1','.square file-f','.row rank-2','square file-g','whiteknight'],
    ['.row rank-8','.square file-f','.row rank-7','square file-e','blackking'],
    ['.row rank-1','.square file-g','.row rank-3','square file-f','blackrook'],
    ['.row rank-8','.square file-e','.row rank-8','square file-g','whiteking'],
    ['.row rank-8','.square file-h','.row rank-8','square file-f','whiterook'],
    ['.row rank-1','.square file-e','.row rank-1','square file-g','blackpawn'],
    ['.row rank-1','.square file-h','.row rank-1','square file-f','whiterook'],
    ['.row rank-5','.square file-d','.row rank-4','square file-c','blackpawn']
  ];

  var reverseGame = [

    ['.row rank-4','.square file-e','.row rank-8','square file-g','whiteking'],
    ['.row rank-6','.square file-h','.row rank-8','square file-f','whiterook'],
    ['.row rank-4','.square file-e','.row rank-1','square file-g','blackpawn'],
    ['.row rank-6','.square file-h','.row rank-1','square file-f','whiterook'],
    ['.row rank-3','.square file-d','.row rank-4','square file-c','blackpawn'],
    ['.row rank-5','.square file-e','.row rank-8','square file-g','whiteking'],
    ['.row rank-2','.square file-h','.row rank-8','square file-f','whiterook'],
    ['.row rank-7','.square file-e','.row rank-1','square file-g','blackpawn'],
    ['.row rank-3','.square file-h','.row rank-1','square file-f','whiterook']
  ];

  var counter = 0;

  function move( whichMove ){
    $( whichMove[0] + ' > ' + whichMove[1] ).removeClass( whichMove[4] );
    $( whichMove[2] + ' > ' + whichMove[3] ).addClass( whichMove[4] );
  }

  function movePrev( whichMove ){
    $(whichMove[2] + '>' + whichMove[3]).removeClass(whichMove[4]);
    $(whichMove[0] + '>' + whichMove[1]).addClass(whichMove[4]);
  };

  window.chess = {
    "game": game,
    "reverseGame": reverseGame,
    "move": move,
    "counter": counter,
    "movePrev": movePrev,
  };
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
  // ['R','N','B','Q','K','B','N','R'],
  // ['P','P','P','P','P','P','P','P'],
  // [' ',' ',' ',' ',' ',' ',' ',' '],
  // [' ',' ',' ',' ',' ',' ',' ',' '],
  // [' ',' ',' ',' ',' ',' ',' ',' '],
  // [' ',' ',' ',' ',' ',' ',' ',' '],
  // ['p','p','p','p','p','p','p','p'],
  // ['r','n','b','q','k','b','n','r'] ];
//
// console.log(board.join('\n') + '\n\n');
//
// // Move King's Pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// console.log(board.join('\n'));


//IFEE to wrap the module:
// attaching the chess to the scope is a preferrable pattern:
