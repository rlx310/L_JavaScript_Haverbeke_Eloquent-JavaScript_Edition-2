//

var arrays = [[1, 2, 3], [4, 5, [5.1, 5.2]], [6]];
console.log(arrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));
