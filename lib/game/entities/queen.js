ig.module(
    'game.entities.queen'
)
.requires(
    'impact.entity',
    'game.entities.piece'
)
.defines(function(){
EntityQueen = EntityPiece.extend({
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        if (this.color == "black"){
            this.addAnim('standing', 1, [15], true);
        }
        else if (this.color == "white"){
            this.addAnim('standing', 1, [45], true);
        }
    },
    update: function(){
        this.parent();
    }
    
    
}); 
});