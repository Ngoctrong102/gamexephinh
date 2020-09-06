class Cell {
    constructor(x, y, size) {
        this.cellTag = document.createElement('div');
        this.cellTag.addEventListener('dragover', this.dragover_handler);
        this.cellTag.addEventListener('dragleave', this.dragleave_handler);
        this.cellTag.addEventListener('drop', this.drop_handler);
        this.isTruePart = false;
        Object.assign(this.cellTag.style, {
            width: size + "px",
            height: size + "px",
            boxSizing: "border-box",
            border: "1px rgba(128, 128, 128, 0.212) solid"
        });
        this.x = x;
        this.y = y;
    }
    dragover_handler = (e) => {
        e.preventDefault();
        e.currentTarget.style.border = "green 1px solid";
    }
    dragleave_handler = (e) => {
        e.preventDefault();
        e.currentTarget.style.border = "1px rgba(128, 128, 128, 0.212) solid";
    }
    drop_handler = (e) => {
        if (this.cellTag.children.length != 0) return false;
        this.cellTag.style.border = "none";
        const id = e.dataTransfer.getData("id");
        var xPart = e.dataTransfer.getData("x");
        var yPart = e.dataTransfer.getData("y");
        if (xPart == this.x && yPart == this.y) {
            this.isTruePart = true;
        } else {
            this.isTruePart = false;
        }
        e.target.appendChild(document.getElementById(id));
        e.target.dispatchEvent(dropPart);
    }
}