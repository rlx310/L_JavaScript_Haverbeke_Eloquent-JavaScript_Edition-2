//

function range(n1, n2, step) {
    if (step == null && n1 < n2) {
        step = 1;
    }
    else if (step == null && n1 > n2) {
        step = -1;
    }

    var result = [];
    if (step > 0) {
        for (; n1 <= n2; n1 += step) {
            result.push(n1);
        }
    }
    else if (step < 0) {
        for (; n1 >= n2; n1 += step) {
            result.push(n1);
        }
    }
    else { // Invalid if  step == 0 or NaN
        console.log("Invalid Step Param");
        return;
    }

    return result;
}

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(range(1, 10));
console.log(range(10, 1));
console.log(range(5, 2, -1));
console.log(range(2, 7, 4));

console.log(sum(range(1, 10)));

console.log(range(1, 2, 0));
console.log(range(1, 2, "pee"));