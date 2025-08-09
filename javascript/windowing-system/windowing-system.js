// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
};

export function Position(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

export class ProgramWindow {
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(size){
        size.width = size.width < 1 ? 1 : (this.position.x + size.width > this.screenSize.width - this.position.x ? this.screenSize.width - this.position.x : size.width);
        size.height = size.height < 1 ? 1 : (this.position.y + size.height > this.screenSize.height - this.position.y ? this.screenSize.height - this.position.y : size.height);

        this.size = size;
    }

    move(position){
        position.x = position.x < 0 ? 0 : (position.x + this.size.width > this.screenSize.width ? this.screenSize.width - this.size.width : position.x);
        position.y = position.y < 0 ? 0 : (position.y + this.size.height > this.screenSize.height ? this.screenSize.height - this.size.height : position.y);

        this.position = position;
    }
}

export function changeWindow(programwindow){
    programwindow.resize(new Size(400, 300));
    programwindow.move(new Position(100, 150));

    return programwindow;
}