//


(function() {
    function canYouSpotTheProblem1() {

        for (counter = 0; counter < 10; counter++) {
            console.log("Happy happy");
        }
    }

    canYouSpotTheProblem1();
})();
// NO ERROR

// (function() {
//     function canYouSpotTheProblem2() {
//         "use strict";
//         for (counter = 0; counter < 10; counter++) {
//             console.log("Happy happy");
//         }
//     }
//
//     canYouSpotTheProblem2();
// })();
// // ReferenceError: counter is not defined


(function() {

    function Person(name) {
        this.name = name;
    }

    var ferdinand = Person("Ferdinand");
    console.log(name);
})();
// NO ERROR

// (function() {
//     "use strict";
//     function Person(name) {
//         this.name = name;
//     }
//
//     var ferdinand = Person("Ferdinand");
//     console.log(name);
// })();
// // TypeError: Cannot set property 'name' of undefined


function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

function testVector() {
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);

    if (p1.x !== 10) return "fail: x property";
    if (p1.y !== 20) return "fail: y property";
    if (p2.x !== -10) return "fail: negative x property";
    if (p3.x !== 0) return "fail: x from plus";
    if (p3.y !== 25) return "fail: y from plus";

    return "everything ok";
}
console.log(testVector());


// function numberToString1(n, base) {
//     var result = "", sign = "";
//     if (n < 0) {
//         sign = "-";
//         n = -n;
//     }
//     do {
//         result = String(n % base) + result;
//         n /= base;
//         console.log(result);
//     } while (n > 0);
//     return sign + result;
// }
// console.log(numberToString1(13, 10));

function numberToString2(n, base) {
    var result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n = Math.floor(n / base);
        console.log(result);
    } while (n > 0);
    return sign + result;
}
console.log(numberToString2(13, 10));


// function promptNumber(question) {
//     var result = Number(prompt(question, ""));
//
//     if (isNaN(result)) {
//         return null;
//     }
//     else {
//         return result;
//     }
// }
// // console.log(promptNumber("How many trees do you see?"));


// function promptDirection(question) {
//     var result = prompt(question, "");
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "right") return "R";
//     throw new Error("Invalid direction: " + result);
// }
// function look() {
//     if (promptDirection("Which way?") == "L") {
//         return "a house";
//     }
//     else {
//         return "two angry bears";
//     }
// }
//
// try {
//     console.log("you see", look());
// }
// catch (error) {
//     console.log("Something went wrong: " + error)
// }


(function() {
    var context = null;

    function withContext1(newContext, body) {
        var oldContext = context;
        context = newContext;
        var result = body();
        context = oldContext;
        return result;
    }
    function withContext2(newContext, body) {
        var oldContext = context;
        context = newContext;
        try {
            return body();
        }
        finally {
            context = oldContext;
        }
    }
    try {
        withContext2(5, function() {
            if (context < 10) {
                throw new Error("Not enough context!");
            }
        });
    }
    catch (e) {
        console.log("Ignoring "  + e);
    }
    console.log(context);
})();