ig.module(
    'game.entities.mousePointer'
)
.requires(
    'impact.entity'
)
.defines(function(){
EntityMousePointer = ig.Entity.extend({
    //mousePointer entity is made to handle mouseovers and mouseclicks 
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.NEVER,
    animSheet: null,
    hasPiece: false,
    size: {x:1, y:1},
    
    
    init: function(x, y, settings){
        this.animSheet = ig.game.myPieceSheet;
        this.parent(x, y, settings);
        this.pos.x = ig.input.mouse.x;
        this.pos.y = ig.input.mouse.y;
        if (ig.game.iAmPlayerColor == "black"){
            this.flipMouse();
        }
        //alert("init mousepointer");
    },
    update: function(){
        this.pos.x = ig.input.mouse.x;
        this.pos.y = ig.input.mouse.y;
        if (ig.game.iAmPlayerColor == "black"){
            this.flipMouse();
        }

        if (this.hasPiece){
            if (ig.input.pressed('rightClick')){
                this.hasPiece = false;
                ig.game.selectedPiece.deselect();
            }
        }
        this.parent();
    },
    draw: function(){
        if (this.hasPiece){
            ig.system.context.beginPath();
            ig.system.context.fillStyle = "rgba(0, 255, 0, 0.5)";
            ig.system.context.arc(  (this.pos.x) * ig.system.scale,
                                    (this.pos.y) * ig.system.scale,
                                    32, 0, Math.PI*2
                                );
            ig.system.context.closePath();
            ig.system.context.fill();
        }
        else {
            this.parent();
        }
    },
    check: function( piece ){
        if (!this.hasPiece && (piece.iBelongToPlayer == ig.game.iAmPlayerNumber)){
            if (ig.input.pressed('leftClick')){
                ig.game.selectedPiece = piece;
                ig.game.selectedPiece.select();
                this.hasPiece = true;
                //ig.game.selectedPiece.pos.x = ig.input.mouse.x-32;
                //ig.game.selectedPiece.pos.y = ig.input.mouse.y-32;
                //this.anims = ig.copy(ig.game.selectedPiece.anims);
                //this.currAnim = ig.copy(ig.game.selectedPiece.currAnim);
                //alert("clicky");
            }
        }
    },
    flipMouse: function(){
        this.pos.x = ig.system.width - this.pos.x;
        this.pos.y = ig.system.height - this.pos.y;
    }
    
    
    
}); 
});