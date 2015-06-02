(function(window) {

$('.play').click(function() {

  moveThePiece(2, 'd', 4, 'd', 'whitepawn');
  moveThePiece(8, 'g', 6, 'f', 'blackknight');
  moveThePiece(2, 'c', 4, 'c', 'whitepawn');

});

/**
     * What does moveThePiece do?
     *
     *
     * @param {Number} fromRank
     * @param {String} fromFile
     * @param {Number} toRank
     * @param {String} toFile
     * @param {String} piece
     * @return undefined
     */
    function moveThePiece(fromRank, fromFile, toRank, toFile, piece) {

        $('.rank-' + fromRank + ' > .file-' + fromFile).removeClass(piece);
        $('.rank-' + toRank + ' > .file-' + toFile).addClass(piece);
    }

  }
)(window);












// From Jorge's Chessboard (Monday's Lecture):
//     $('.play').click(function() {
//
//       // $('.rank-2 > .file-d').removeClass('whitepawn');
//       // $('.rank-4 > .file-d').removeClass('whitepawn');
//       moveThePiece(2, 'd', 4, 'd', 'whitepawn');
//
//       // $('.rank-8 > .file-g').removeClass('blacknight');
//       // $('.rank-6 > .file-f').removeClass('blacknight');
//       moveThePiece(8, 'g', 6, 'f', 'whitepawn');
//
//       moveThePiece(2, 'c', 4, 'c', 'whitepawn');
//
//     });
//
// /**
// * What does moveThePiece do?
// *
// *
// *
// * @param {Number} fromRank
// * @param {String} fromFile
// * @param {Number} toRank
// * @param {String} toFile
// * @return undefined
// **/
// // The following function is to move the piece:
// function moveThePiece(fromRank, fromFile, toRank, toFile, piece) {
//
// };
//
// $(fromFile + '>' + 'rank-2').removeClass(piece);
// $(toRank + '>' + toFile).addClass(piece);
//
