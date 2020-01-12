class brick {
    constructor(game) {
        this.game = game;
        this.dots = [];
        this.data = [];
        this.col = 0;
        this.row = 0;

        //create data
        this.createData();
        this.createDot();
    }

    createData() {
        let baseData = [
            [
                [x, x, x, x]
            ],
            [
                [x,x],
                [x,x]
            ],
            [
                [x, x, x],
                [_, x, _]
            ],
            [
                [x, x, _],
                [_, x, x]
            ],
            [
                [_, x, x],
                [x, x, _]
            ],
            [
                [x, _],
                [x, _],
                [x, _],
                [x, x]
            ],
            [
                [_, x],
                [_, x],
                [_, x],
                [x, x]
            ]
        ];
        let r = Math.floor(Math.random()*6);
        this.data = baseData[r]
    }
    
    createDot() {
        this.dots = [];
        for (let row=0; row<this.data.length; row++){
            for (let col=0; col<this.data[0].length; col++){
                if (this.data[row][col] === 'x') {
                    let newDot =  new dot(this.game, row + this.row, col + this.col);
                    this.dots.push(newDot);
                }           
            }
        }
       
    }

    canFall() {
        let birdCanFall = true;
        this.dots.forEach(dot => {
            if (!dot.canFall()){
                birdCanFall = false;
            }
        })

        return birdCanFall;
    }

    fall() {
        if (this.canFall()) {
            this.row++;
            this.dots.forEach(dot => {
                dot.fall();
            })
        }
        else {
            this.game.createNewBrick();
            this.appendToBoard();
            this.game.board.checkFull();
        }
    }

    moveDown() {
        while (this.canFall()) {
            this.fall();
        }
    }

    rotate() {
        let newData = [];

        for (let col=0; col<this.data[0].length; col++){
            let newRow = [];
            for (let row = this.data.length -1; row>=0; row--)
            newRow.push(this.data[row][col]);
            newData.push(newRow)
         }
         // check valid newData
         let isnewData = true;
         for (let row=0; row<newData.length;row++){
             for(let col=0; col<newData[0].length; col++){
                if (newData[row][col] == x && !this.game.board.isEmptyCell(row,col)){
                    isnewData = false;
                }
             }
         }
         if (isnewData) {
         this.data = newData;
         this.createDot();
         }
        }
    appendToBoard() {
        this.dots.forEach(dot => {
            this.game.board.data[dot.row][dot.col] = x;
        })
    }
    // move left
    canMoveLeftBrick() {
        let birckCanMoveLeft = true;
        this.dots.forEach(dot => {
            if (!dot.canMoveLeft()){
                birckCanMoveLeft = false;
            }
        })

        return birckCanMoveLeft;
    }

    moveLeftBrick() {
        if (this.canMoveLeftBrick()) {
            this.col--;
            this.dots.forEach(dot => {
                dot.moveLeft();
            })
        }
    }

    //move right
    canMoveRight() {
        let birckCanMoveRight = true;
        this.dots.forEach(dot => {
            if (!dot.canMoveRight()){
                birckCanMoveRight = false;
            }
        })

        return birckCanMoveRight;
    }

    moveRight() {
       
        if (this.canMoveRight()) {
            this.col++;
            this.dots.forEach(dot => {
                dot.moveRight();
            })
        }
    }
    draw() {
         this.dots.forEach(dot => dot.draw() )
    }
}