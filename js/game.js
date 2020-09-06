class Game {
    constructor(size) {
        this.size = size;
        this.nPart = (WIDTH_BOARD / size) * (HEIGHT_BOARD / size);
        this.board = new Board(WIDTH_BOARD / size, HEIGHT_BOARD / size, size);
        this.board.board.addEventListener('board-drop', this.dropPart_handler);
        this.managerParts = new ManagerParts((WIDTH_BOARD / size), (HEIGHT_BOARD / size), size);
    }
    start() {
        this.managerParts.getNew();
    }
    dropPart_handler = (e) => {
        this.managerParts.getNew();
    }
}