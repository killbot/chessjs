ig.module(
    'game.entities.piece'
)
.requires(
    'impact.entity',
    'impact.game'
)
.defines(function(){
EntityPiece = ig.Entity.extend({
    size: {x:64, y:64},
    moveDistance: 1,
    movedirection: [5, 6, 7],
    animSheet: null,
    color: "black",
    collides: ig.Entity.COLLIDES.NEVER,
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.animSheet = ig.game.myPieceSheet;
        //individual animation and sprite frames defined in specific entities.
    },
    update: function(){
        //this.update();
    }
 
    
    
});
});

