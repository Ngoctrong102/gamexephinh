class Board {
    constructor(X, Y, size) {
        this.X = X;
        this.Y = Y;
        this.board = document.querySelector('.board');
        this.board.style.height = HEIGHT_BOARD + 2 + "px";
        this.board.style.width = WIDTH_BOARD + 2 + "px";
        this.cells = new Array(Y);
        for (let i = 0; i < Y; i++) {
            this.cells[i] = new Array(X);
            for (let j = 0; j < X; j++) {
                this.cells[i][j] = new Cell(j, i, size);
                this.cells[i][j].cellTag.addEventListener('drop-part', this.dropPart_handler);
                this.board.append(this.cells[i][j].cellTag);
            }
        }
    }
    dropPart_handler = (e) => {
        this.board.dispatchEvent(boarDropPart);
        console.log(this.checkVictory());
    }
    checkVictory() {
        for (let i = 0; i < this.Y; i++) {
            for (let j = 0; j < this.X; j++) {
                if (this.cells[i][j].isTruePart == false) return false;
            }
        }
        return true;
    }
}