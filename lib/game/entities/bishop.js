ig.module(
    'game.entities.bishop'
)
.requires(
    'impact.entity',
    'game.entities.piece'
)
.defines(function(){
EntityBishop = EntityPiece.extend({
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        if (this.color == "black"){
            this.addAnim('standing', 1, [10], true);
        }
        else if (this.color == "white"){
            this.addAnim('standing', 1, [40], true);
        }
    },
    update: function(){
        this.parent();
    }
    
    
}); 
});