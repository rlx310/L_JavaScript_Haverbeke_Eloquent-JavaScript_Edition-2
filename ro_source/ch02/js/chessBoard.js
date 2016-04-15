//

var sizeX = 8;
var sizeY = 8;

var board = "";

for (var y = 0; y < sizeY; y++) {
    for (var x = 0; x < sizeX; x++) {
        if ((x + y) % 2 === 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);