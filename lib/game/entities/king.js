ig.module(
    'game.entities.king'
)
.requires(
    'impact.entity',
    'game.entities.piece'
)
.defines(function(){
EntityKing = EntityPiece.extend({
    canCastle: true,
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        if (this.color == "black"){
            this.addAnim('standing', 1, [20], true);
        }
        else if (this.color == "white"){
            this.addAnim('standing', 1, [50], true);
        }
        
    },
    update: function(){
        this.parent();
    }
    
    
}); 
});