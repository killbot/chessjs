//this is the main chessjs file module
ig.module(
    'game.chessjs'
)
.requires(
    'impact.game',
    
    'game.gameModel',
    
    'game.entities.piece',
    'game.entities.pawn',
    'game.entities.rook',
    'game.entities.knight',
    'game.entities.bishop',
    'game.entities.queen',
    'game.entities.king',
    
    'game.levels.BoardSetup'
)
.defines(function(){
Chessjs = ig.Game.extend({
    pieceSheet: null,
    backgroundSheet: null,
    myPieceSheet: new ig.AnimationSheet('media/piecessheet.png', 64, 64),
    
    init: function(){
        this.loadLevel(LevelBoardSetup);
        this.placePieces();
        //this.spawnEntity( EntityPawn, 0, 0, {});
    },
    
    update: function(){
        this.parent();
    },

    placePieces: function(){
        var currBox = { x:0,        //starting box
                        y:0,
                        step:64,
                        move: function(){
                            if (this.x ==this.step*8){
                                this.y += this.step;
                                this.x = 0;
                            }
                            else {
                                this.x += this.step;
                            }
                        }
                    };
        var side = "black";
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityQueen, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKing, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});
        currBox.move();
        for (i = 0; i<=8; i++) {
            ig.game.spawnEntity(EntityPawn, currBox.x, currBox.y, {color:side});
            currBox.move();
        }
        side = "white";
        currBox.x = 0;
        currBox.y = currBox.step*6;     //moves to the white row
        for (i = 0; i<=8; i++) {
            ig.game.spawnEntity(EntityPawn, currBox.x, currBox.y, {color:side});
            currBox.move();
        }
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKing, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityQueen, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});




        
        
        
    }
 
    
});
//Game Startup.
ig.main( '#canvas', Chessjs, 30, 512, 512, 2);

});
