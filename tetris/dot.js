class dot {
    constructor(game, row, col) {
        this.game = game;
        this.size = 20;
        this.row = row;
        this.col = col;
    }
    // move Left
    hitLeft() { 
        return this.col == 0;
    }
    canMoveLeft() {
        if (this.hitLeft()) return false;
        if (!this.game.board.isEmptyCell(this.row, this.col - 1)) return false;
        return true;
    }

    moveLeft() {
        if (this.canMoveLeft())
         this.col--;
    }
    // // move Right
    hitRight() {
        return this.col == NUM_COLS - 1;
    }
    canMoveRight() {
        if (this.hitRight()) return false;
        if (!this.game.board.isEmptyCell(this.row, this.col + 1)) return false;
        return true;
    }

    moveRight() {
        if (this.canMoveRight())
         this.col++;
    }
    
    // move Bottom
    hitBottom() {
        return this.row == NUM_ROWS - 1;
    }

    canFall() {
        if (this.hitBottom()) return false;   
        if (!this.game.board.isEmptyCell(this.row + 1, this.col))  return false; 
        return true;
    }

    fall() {
        if (this.canFall())
         this.row++;
    }

    // update() {
    //     this.game.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //     this.draw();
    // }

    draw() {
        let x = this.col * this.size;
        let y = this.row * this.size;
        this.game.ctx.fillStyle = 'red';
        this.game.ctx.fillRect(x, y, this.size, this.size);
        this.game.ctx.strokeStyle = 'black';
        this.game.ctx.strokeRect(x, y, this.size, this.size)
    }

}