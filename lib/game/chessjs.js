//this is the main chessjs file module
ig.module(
    'game.chessjs'
)
.requires(
    'impact.game'
)
.defines(function(){
Chessjs = ig.Game.extend({
    
    init: function(){
        
    },
    
    update: function(){
        this.parent();
    }

 
    
});
//Game Startup.
ig.main( '#canvas', Chessjs, 30, 384, 600, 2);

});
