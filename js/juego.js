var canvas;
var ctx;
var FPS = 50;

var canvasWidth = 400;
var canvasHeight = 640;

var boardWidth = 10;
var boardHeight = 20;

var marginTop = 4;

var tabWidth = 40;
var tabHeight = 40;

// TABLERO, TENDRÁ DIMENSIONES (12X17) PERO SÓLO SE VERÁ (10X16) PARA EVITAR QUE SE "DESBORDE"
var board = [
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

var boardCopy = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

var red = '#fd103c';
var purple = '#b902fd';
var orange = '#ff7309';
var yellow = '#ffde00';
var green = '#66fd00';
var cyan = '#00e6fe';
var blue = '#1801ff';


// TODAS LAS 7 PIEZAS DEL TETRIS
var graphicToken = [
    [
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ]
    ],
    
    [
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ],
    
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0]
        ],
    
        [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
        ]
    ],
    
    
    [
        [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
        ]
    ]
];

function reset(){
    for(py=0;py<21;py++){
        for(px=0;px<12;px++){
            board[py][px]=boardCopy[py][px];
        }
    }
};

var tetrisPiece;

var objectPiece = function(){
    this.x = 0;
    this.y = 0;

    this.angle = 0;
    this.type = 0;

    this.delay = 50;
    this.frame = 0;

    this.newPiece = function(){
        this.type = Math.floor(Math.random()*7);
        this.y = 0;
        this.x = 4;
    };

    this.gameOver = function(){
        var lose = false;
        
        for(px=1;px<boardWidth+1;px++){
            if(board[2][px]>0){
                lose = true;
            }
        }

        return lose;
    };

    this.cleanBoard = function(){
        var fullRow;

        for(py = marginTop; py<boardHeight; py++){
            fullRow = true;

            for(px = 1; px<boardWidth+1; px++) {
                if(board[py][px]==0){
                    fullRow = false;
                }
            }

            if(fullRow==true){
                for(px = 1; px<boardWidth+1; px++){
                    board[py][px]=0;
                }
            }
        }
    };

    this.downFall = function(){
        if(this.frame < this.delay){
            this.frame ++;
        } else {

            if(this.collision(this.angle, this.y+1, this.x)==false){

            this.y++;

            }

            else {
                this.objectFit();
                this.cleanBoard();
                this.newPiece();

                if(this.gameOver()==true){
                    reset();
                }
            }

            this.frame = 0;
        }
    };

    this.objectFit = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
                if(graphicToken[this.type][this.angle][py][px]>0){
                    board[this.y+py][this.x+px] = graphicToken[this.type][this.angle][py][px]
                }
            }
        }
    };

    this.collision = function(newAngle, yNew, xNew){
        var crash = false;

        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
                if(graphicToken[this.type][newAngle][py][px]>0){
                    if(board[yNew+py][xNew+px]>0){
                        crash = true;
                    }
                }
            }
        }

        return crash;
    };

    this.draw = function(){
        for(py=0;py<4;py++){
                for(px=0;px<4;px++){

                    if(graphicToken[this.type][this.angle][py][px]!=0){

                            if(graphicToken[this.type][this.angle][py][px]==1)
                            ctx.fillStyle = yellow;
                        
                            if(graphicToken[this.type][this.angle][py][px]==2)
                            ctx.fillStyle = cyan;

                            if(graphicToken[this.type][this.angle][py][px]==3)
                            ctx.fillStyle = green;

                            if(graphicToken[this.type][this.angle][py][px]==4)
                            ctx.fillStyle = red;

                            if(graphicToken[this.type][this.angle][py][px]==5)
                            ctx.fillStyle = orange;

                            if(graphicToken[this.type][this.angle][py][px]==6)
                            ctx.fillStyle = blue;

                            if(graphicToken[this.type][this.angle][py][px]==7)
                            ctx.fillStyle = purple;

                    ctx.fillRect((this.x + px - 1)*tabWidth, (this.y + py - marginTop)*tabHeight, tabWidth, tabHeight)
                }
            }
        }
    };

    this.rotate = function(){

        var newAngle = this.angle; 

        if(newAngle <3){
            newAngle++;
        } else {
            newAngle=0;
        }

        if(this.collision(newAngle,this.y,this.x)==false){
            this.angle = newAngle;
        }
    };

    this.down = function(){

        if(this.collision(this.angle,this.y+1,this.x)==false){
            this.y++;
        }
    };

    this.left = function(){

        if(this.collision(this.angle,this.y,this.x-1)==false){
            this.x--;
        }
    };

    this.right = function(){

        if(this.collision(this.angle,this.y,this.x+1)==false){
            this.x++;
        }
    };

    this.newPiece();


};

function drawBoard(){
    for(py=marginTop;py<boardHeight;py++){
        for(px=1;px<boardWidth+1;px++){

            if(board[py][px]!=0){

                    if(board[py][px]==1)
                    ctx.fillStyle = yellow;
                
                    if(board[py][px]==2)
                    ctx.fillStyle = cyan;

                    if(board[py][px]==3)
                    ctx.fillStyle = green;

                    if(board[py][px]==4)
                    ctx.fillStyle = red;

                    if(board[py][px]==5)
                    ctx.fillStyle = orange;

                    if(board[py][px]==6)
                    ctx.fillStyle = blue;

                    if(board[py][px]==7)
                    ctx.fillStyle = purple;

            ctx.fillRect((px-1)*tabWidth, (py-marginTop)*tabHeight, tabWidth, tabHeight)
        }
    }
}

}



function startKeyboard(){
    document.addEventListener('keydown', function(key){
        if(key.keyCode === 38){
            tetrisPiece.rotate();
        }

        if(key.keyCode === 40){
            tetrisPiece.down();
        }

        if(key.keyCode === 37){
            tetrisPiece.left();
        }

        if(key.keyCode === 39){
            tetrisPiece.right();
        }
    })
}

function start(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.style.width = canvasWidth;
    canvas.style.height = canvasHeight;

    tetrisPiece = new objectPiece();
    
    startKeyboard();

    setInterval(function(){
        main();
    },1000/FPS);
}

function eraseCanvas(){
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

function main(){
    eraseCanvas();
    drawBoard();
    tetrisPiece.downFall();
    tetrisPiece.draw();
};