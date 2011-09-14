ig.module(
    'game.gameModel'
)
.requires(
    'impact.game'
)
.defines(function(){
GameModel = /*start json*/{
    turns: 0,
    playerIDs: {white:0, black:1},
    whoseTurn: 0,
    boardLayout: [
        ['brook', 'bknight', 'bbishop', 'bqueen', 'bking', 'bbishop', 'bknight', 'brook'],
        ['bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn'],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        ['wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn'],
        ['wrook', 'wknight', 'wbishop', 'wking', 'wqueen', 'wbisop', 'wknight', 'wrook']
    ]
}/*end json*/
});