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
    iBelongToPlayer: null,
    collides: ig.Entity.COLLIDES.PASSIVE,
    type: ig.Entity.TYPE.A,
    isSelected: false,
    
    
    
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.animSheet = ig.game.myPieceSheet;
        if (settings.color == "black"){
            this.iBelongToPlayer = ig.game.currentModel.playerIDs.black;
        }
        else if( settings.color == "white"){
            this.iBelongToPlayer = ig.game.currentModel.playerIDs.white;
        }
        //if (ig.game.iAmPlayerColor == "black"){
        //    this.flipPiece();
        //}
        //individual animation and sprite frames defined in specific entities.
    },
    update: function(){
        if (this.isSelected){
            //this.pos.x = ig.input.mouse.x-32;
            //this.pos.y = ig.input.mouse.y-32;
        }
        this.parent();
        //this.update();
    },
    draw: function(){
        if (this.isSelected){
            this.parent();
            ig.system.context.beginPath();
            ig.system.context.fillStyle = "rgba(0, 0, 255, 0.5)";
            ig.system.context.arc(  (this.pos.x+32)*ig.system.scale,
                                    (this.pos.y+32)*ig.system.scale,
                                    32, 0, Math.PI*2
                                );
            ig.system.context.closePath();
            ig.system.context.fill();   
        }
        else{
            this.parent();
        }
    },
    check: function(){
        this.parent();
    },
    select: function(){
        //makes the current piece the active piece.
        this.isSelected = true;
        ig.game.selectedPiece = this;
    },
    deselect: function(){
        this.isSelected = false;
        ig.game.selectedPiece = null;
    },
    flipPiece: function(){
            this.anims.standing.flip.x = true;
            this.anims.standing.flip.y = true;

        //this.anims.standing.flip.x = true;
        //this.anims.standing.flip.y = true;
    }
 
    
    
});
});

