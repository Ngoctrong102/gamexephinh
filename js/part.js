class Part {
    constructor(x, y, size) {
        var imageSrc = document.getElementById('ramdom-image').getAttribute('src');
        this.imgTag = document.createElement('div');
        this.imgTag.id = `part${x}${y}`;
        this.imgTag.addEventListener('dragstart', (ev) => {
            ev.dataTransfer.setData("id", ev.target.id);
            ev.dataTransfer.setData("x", x);
            ev.dataTransfer.setData("y", y);
        });
        this.imgTag.setAttribute('draggable', true);
        Object.assign(this.imgTag.style, {
            width: size + "px",
            height: size + "px",
            backgroundImage: `url(${imageSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${-x * size}px ${-y * size}px`
        });
        this.x = x;
        this.y = y;
    }
}