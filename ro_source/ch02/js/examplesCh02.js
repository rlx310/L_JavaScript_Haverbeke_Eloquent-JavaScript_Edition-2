//

var caught = 5 * 5;
console.log(caught);

var ten = 10;
console.log(ten * ten);

var mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

var one = 1, two = 2;
console.log(one + two);

alert("Good morning!");

var x = 30;
console.log("The value of x is", x);

console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

confirm("Shall we, then?");
prompt("Tell me everything you know.",  "...");


var theNumber = Number(prompt("Pick a number", ""));

if (!isNaN(theNumber)) {
    alert("Your number is the square root of " + theNumber * theNumber);
}
else {
    alert("Hey. Why didn't you give me a number?");
}


var num = Number(prompt("Pick a number", 0));

if (num < 10) {
    alert("Small");
}
else if (num < 100) {
    alert("Medium");
}
else {
    alert("Large");
}


console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

var number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

do {
    var yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


for (var i = 0; i <= 12; i = i + 2) {
    console.log(i);
}

var result1 = 1;
for (var counter1 = 0; counter1 < 10; counter1 = counter1 + 1) {
    result1 = result1 * 2;
}
console.log(result1);

for (var current = 20; ;current++) {
    if (current % 7 == 0)
        break;
}
console.log(current);


switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

// single line comment in JS

/*
    Multi line comment
    in JS
 */

