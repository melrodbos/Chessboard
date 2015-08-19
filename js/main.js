(function(window) {

  $('.last').click(function() {
    for (chess.counter; chess.counter < chess.game.length; chess.counter++){
      chess.move(chess.game[chess.counter]);
    };
  });

  $('.next').click(function(){
    if (chess.counter < chess.game.length){
      chess.move(chess.game[chess.counter]);
      chess.counter = chess.counter + 1;
    };
  });

  $('.previous').click(function(){
    if (chess.counter < chess.game.length){
      chess.movePrev(chess.game[chess.counter]);
      chess.counter = chess.counter - 1;
    };
  });
})(window);


/*
     * What does moveThePiece do?
     *
     * @param {Number} fromRank
     * @param {String} fromFile
     * @param {Number} toRank
     * @param {String} toFile
     * @param {String} piece
     * @return undefined
     */
  //   function moveThePiece(fromRank, fromFile, toRank, toFile, piece) {
  //
  //       $('.rank-' + fromRank + ' > .file-' + fromFile).removeClass(piece);
  //       $('.rank-' + toRank + ' > .file-' + toFile).addClass(piece);
  //   }
  //
  // }
