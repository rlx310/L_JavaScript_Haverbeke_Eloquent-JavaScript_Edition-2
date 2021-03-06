//

var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");

function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {
    type: "white",
    speak: speak
};
var fatRabbit = {
    type: "fat",
    speak: speak
};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(fatRabbit, ["Burp!"]);
speak.call(fatRabbit, "Fart!");
speak.call({type: "old"}, "Oh my.");
speak.apply({type: "old"}, ["You fatass!"]);


var empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);


var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};
var killerRabbit1 = Object.create(protoRabbit);
killerRabbit1.type = "killer";
killerRabbit1.speak("SKREEEE!");


function Rabbit(type) {
    this.type = type;
}
var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(killerRabbit.type);
console.log(blackRabbit.type);


Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);


console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));


Rabbit.prototype.dance = function() {
    console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();


var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";
for (var name in map) {
    console.log(name);
}
console.log("nonsense" in map);
console.log("toString" in map);
delete Object.prototype.nonsense;
console.log("nonsense" in map);

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
for (var name1 in map) {
    console.log(name1);
}
console.log(map.hiddenNonsense);
console.log(map.hasOwnProperty("hiddenNonsense"));
console.log(map.hasOwnProperty("toString"));
delete Object.prototype.hiddenNonsense;
console.log(map.hiddenNonsense);

console.log("\n");
for (var name2 in map) {
    if (map.hasOwnProperty(name2)) {
        console.log(name2);
    }
}


var map2 = Object.create(null);
map2["pizza"] = 0.069;
console.log("toString" in map2);
console.log("pizza" in map2);


//


function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}
function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}
function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function checkers5x5() {
    var rows = [];
    for (var i = 0; i < 5; i++) {
        var row = [];
        for (var j = 0; j < 5; j++) {
            if ((j + i ) % 2 == 0) {
                row.push(new TextCell("##"));
            }
            else {
                row.push(new TextCell(" "));
            }
        }
        rows.push(row);
    }
    return rows;
}
console.log(drawTable(checkers5x5()));


function UnderlinedCell(inner) {
    this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}
console.log(drawTable(dataTable(MOUNTAINS)));

var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log("Ignoring attempt to set height to", value);
    }
};
console.log(pile.height);
pile.height = 100;

Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function() {
        return this.text.length;
    }
});
var cell = new TextCell("no\nway");
console.log(cell.heightProp);
cell.heightProp = 100;
console.log(cell.heightProp);

function RTextCell(text) {
    TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

function dataTable1(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            var value = row[name];
            if (typeof value == "number") {
                return new RTextCell(String(value));
            }
            else {
                return new TextCell(String(value));
            }
        });
    });
    return [headers].concat(body);
}
console.log(drawTable(dataTable1(MOUNTAINS)));


console.log(new RTextCell("A") instanceof RTextCell);
console.log(new RTextCell("A") instanceof TextCell);
console.log(new TextCell("A") instanceof RTextCell);
console.log([1] instanceof Array);