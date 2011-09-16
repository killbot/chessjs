ig.module(
    'game.entities.knight'
)
.requires(
    'impact.entity',
    'game.entities.piece'
)
.defines(function(){
EntityKnight = EntityPiece.extend({
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        if (this.color == "black"){
            this.addAnim('standing', 1, [5], true);
        }
        else if (this.color == "white"){
            this.addAnim('standing', 1, [35], true);
        }
        
    },
    update: function(){
        this.parent();
    }
    
    
}); 
});