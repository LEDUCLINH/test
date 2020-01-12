
class game {
    constructor() {
        this.canvas = null;
        this.ctx = null;

        this.init();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);

        // create dot
       

        //  create board
        this.board = new board(this);
        this.brick = new brick(this)
       
        //get key board
        this.listenKeyBoard();
        //start game loop
        this.loop();
        // start the game
        this.startGame();
    }

    listenKeyBoard() {
        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowLeft': this.brick.moveLeftBrick(); break;
                case 'ArrowRight': this.brick.moveRight(); break;
                case 'ArrowUp': this.brick.rotate(); break;
                case 'ArrowDown': this.brick.moveDown(); break;
                default: break;
            }
        })
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 30);
    }

    startGame() {
        setInterval(() => {
            this.brick.fall();
        }, 500)
    }
    createNewBrick() {
        this.brick = new brick(this);
    }
    update() {

    }

    draw() {
       this.ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
       this.board.draw();
       this.brick.draw();
    }
}
var g = new game();