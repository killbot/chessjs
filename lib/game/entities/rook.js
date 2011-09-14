ig.module(
    'game.entities.rook'
)
.requires(
    'impact.entity',
    'game.entities.piece'
)
.defines(function(){
EntityRook = EntityPiece.extend({
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        if (this.color == "black"){
            this.addAnim('standing', 1, [0], true);
        }
        else if (this.color == "white"){
            this.addAnim('standing', 1, [30], true);
        }
    },
    update: function(){
        this.parent();
    }
    
    
}); 
});