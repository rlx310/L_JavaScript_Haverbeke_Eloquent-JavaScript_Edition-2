//

var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    var current = array[i];
    console.log(current);
}

function logEach(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
logEach(array);

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}
// forEach(["Wampeter", "Foma", "Granfalloon"], alert);

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
    sum += number;
});
console.log(sum);

function greaterThan(n) {
    return function(m) {return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function noisy(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    }
}
noisy(Boolean)(0);


function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) {
        body(i);
    }
}

repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});


function noisy1(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
