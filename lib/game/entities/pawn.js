ig.module(
    'game.entities.pawn'
)
.requires(
    'impact.entity',
    'game.entities.piece'
)
.defines(function(){
EntityPawn = EntityPiece.extend({
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        if (this.color == "black"){
            this.addAnim('standing', 1, [25], true);
        }
        else if (this.color == "white"){
            this.addAnim('standing', 1, [55], true);
        }
    },
    update: function(){
        this.parent();
    }
    
    
}); 
});