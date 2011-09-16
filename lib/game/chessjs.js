//this is the main chessjs file module
ig.module(
    'game.chessjs'
)
.requires(
    'impact.game',
    
    'game.gameModel',
    
    'game.entities.piece',
    'game.entities.pawn',
    'game.entities.rook',
    'game.entities.knight',
    'game.entities.bishop',
    'game.entities.queen',
    'game.entities.king',
    'game.entities.mousePointer',
    
    'game.levels.BoardSetup'
)
.defines(function(){
Chessjs = ig.Game.extend({
    pieceSheet: null,
    backgroundSheet: null,
    selectedPiece: null,
    iAmPlayerNumber: 0,
    iAmPlayerColor: null,
    myPieceSheet: new ig.AnimationSheet('media/piecessheet.png', 64, 64),
    currentModel: {turns: 0,
                    playerIDs: {white:0, black:9},
                    whoseTurn:0,
                    boardLayout: [  [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0]
                                 ]
    },
    
    
    init: function(){
        this.loadLevel(LevelBoardSetup);
        //this.placePieces();
        this.loadSetup(this.iAmPlayerNumber);

        //localStorage.setItem("chessjs", "this is a chess string");
        //this.spawnEntity( EntityPawn, 0, 0, {});
        //this.saveSetup();
        ig.input.initMouse();
        ig.input.bind(ig.KEY.MOUSE1, 'leftClick');
        ig.input.bind(ig.KEY.MOUSE2, 'rightClick');
        ig.input.bind(ig.KEY.ESC, 'escape');
        this.spawnEntity(EntityMousePointer, 0, 0);

    },
    
    update: function(){
        this.parent();
    },

    loadSetup: function(whoIsViewing){
        //This reads the board setup from a gameModel object as a json object.
        //for the moment this is GameModel in the gameModel.js module.
        var modelString = localStorage.getItem("chessjsSavedModel");
        if (modelString != null){  //saved game exists in html5 localStorage
            var loadedModel = JSON.parse(modelString);
            //if (loadedModel.playerIDs.white == this.iAmPlayerNumber){
            //    //do not flip
            //}
            //else if (loadedModel.playerIDs.black == this.iAmPlayerNumber0){
            //    //flip
            //    for (i=0; i<loadedModel.boardLayout.length; i++){
            //        loadedModel.boardLayout[i].reverse();
            //    }
            //    loadedModel.boardLayout.reverse();
            //}
            //else{
            //    alert("Player ID not recognized");
            //}
            this.currentModel = loadedModel;
        }
        else {
            this.currentModel = GameModel;  //THIS is what you would change
                                            //for loading from database remotely.
        }
        if (this.currentModel.playerIDs.white == this.iAmPlayerNumber){
            this.iAmPlayerColor = "white";
        }
        else if (this.currentModel.playerIDs.black == this.iAmPlayerNumber){
            this.iAmPlayerColor = "black";
        }
        else {
            alert("player ID not recognized: "+this.iAmPlayerNumber);
        }
        var currBox = { x:0,            //starting box
                        y:0,
                        step:64,        //dimensions of box
                        move: function(){
                            if (this.x == this.step*7){
                                this.y += this.step;
                                this.x = 0;
                            }
                            else {
                                this.x += this.step;
                            }
                        }
                    };
        for (j=0; j<this.currentModel.boardLayout.length; j++){          //y values
            for (i=0; i<this.currentModel.boardLayout[j].length; i++){   //x values
                switch(this.currentModel.boardLayout[j][i]){
                    case "bpawn":
                        ig.game.spawnEntity(EntityPawn, currBox.x, currBox.y, {color:"black", name:"bpawn"});
                        break;
                    case "wpawn":
                        ig.game.spawnEntity(EntityPawn, currBox.x, currBox.y, {color:"white", name:"bpawn"});
                        break
                    case "brook":
                        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:"black"});
                        break
                    case "bbishop":
                        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:"black"});
                        break
                    case "bknight":
                        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:"black"});
                        break
                    case "bking":
                        ig.game.spawnEntity(EntityKing, currBox.x, currBox.y, {color:"black"});
                        break
                    case "bqueen":
                        ig.game.spawnEntity(EntityQueen, currBox.x, currBox.y, {color:"black"});
                        break
                    case "wrook":
                        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:"white"});
                        break
                    case "wbishop":
                        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:"white"});
                        break;
                    case "wknight":
                        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:"white"});
                        break;
                    case "wking":
                        ig.game.spawnEntity(EntityKing, currBox.x, currBox.y, {color:"white"});
                        break;
                    case "wqueen":
                        ig.game.spawnEntity(EntityQueen, currBox.x, currBox.y, {color:"white"});
                        break;
                    default:
                }
                currBox.move();
            }
        }
        if (this.iAmPlayerColor == "black"){
            ig.system.context.translate(ig.system.width*ig.system.scale,
                                    ig.system.height*ig.system.scale);
            ig.system.context.rotate(Math.PI);
            var piecesArray = this.getEntitiesByType(EntityPiece);
            for (m=0; m<piecesArray.length; m++){
            //for (eachEntity in piecesArray){
                piecesArray[m].flipPiece();
            }
            //alert("length of pieces array: "+piecesArray.length);
        }
    },
    
    saveSetup: function(){
        //saves the board setup to a gameModel object then converts to json
        //and textifies it.  Currenly this will write to html5 local storage
        //but can be made to POST to a remote database/listener.
        var saveString = JSON.stringify(this.currentModel);
        localStorage.setItem("chessjsSavedModel", saveString);
        
    },

    placePieces: function(){
        var currBox = { x:0,        //starting box
                        y:0,
                        step:64,
                        move: function(){
                            if (this.x ==this.step*8){
                                this.y += this.step;
                                this.x = 0;
                            }
                            else {
                                this.x += this.step;
                            }
                        }
                    };
        var side = "black";
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityQueen, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKing, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});
        currBox.move();
        for (i = 0; i<=8; i++) {
            ig.game.spawnEntity(EntityPawn, currBox.x, currBox.y, {color:side});
            currBox.move();
        }
        side = "white";
        currBox.x = 0;
        currBox.y = currBox.step*6;     //moves to the white row
        for (i = 0; i<=8; i++) {
            ig.game.spawnEntity(EntityPawn, currBox.x, currBox.y, {color:side});
            currBox.move();
        }
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKing, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityQueen, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityBishop, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityKnight, currBox.x, currBox.y, {color:side});
        currBox.move();
        ig.game.spawnEntity(EntityRook, currBox.x, currBox.y, {color:side});
        
    }
 
});
//Game Startup.
ig.main( '#canvas', Chessjs, 30, 512, 512, 2);

});
