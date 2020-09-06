class ManagerParts {
    constructor(x, y, size) {
        this.curPartTag = document.getElementById('cur');
        this.list = [];
        this.x = x;
        this.y = y;
        for (let i = 0; i < x * y; i++) {
            this.list.push(i);
        }
        this.parts = new Array(y);
        for (let i = 0; i < y; i++) {
            this.parts[i] = new Array(x)
            for (let j = 0; j < x; j++) {
                this.parts[i][j] = new Part(j, i, size);
            }
        }
    }
    getNew() {
        if (this.curPartTag.children.length != 0 || this.list.length == 0) return;
        var n = Math.floor(Math.random() * this.list.length - 1);
        n = n < 0 ? 0 : n;
        var nPart = this.list[n];
        this.list.splice(n, 1);
        console.log(this.parts);
        console.log(n);
        var a = Math.floor(nPart / this.x);
        var b = nPart % this.x;
        console.log(a, b);
        this.curPartTag.append(this.parts[a][b].imgTag);
    }
}