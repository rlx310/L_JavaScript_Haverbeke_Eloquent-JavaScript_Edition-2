//

var arrays = [[1, 2, 3], [4, 5], [6]];
var superArrays = [[1, 2, 3], [4, 5, [6, 7, [8]]], 9];
console.log(arrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));
console.log(superArrays.reduce(function(flat, current) {
    return flat.concat(current);
}));


console.log([].concat.apply([], arrays));
console.log([].concat.apply([], superArrays));


function flatten1(array) {
    return array.reduce(function(flat, current) {
        return flat.concat(Array.isArray(current) ? flatten1(current) : current);
    }, []);
}
console.log(flatten1(arrays));
console.log(flatten1(superArrays));


function flatten2(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flatten2(array[i]));
        }
        else {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(flatten2(arrays));
console.log(flatten2(superArrays));