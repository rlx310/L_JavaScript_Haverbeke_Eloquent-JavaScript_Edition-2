//

console.log(1);
console.log(!false);

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
luigisDebt -= 45;
console.log(luigisDebt);

var one = 1, two = 2;
console.log(one + two);

// alert("Good morning!");

var x = 30;
console.log("the value of x is", x);

console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

// confirm("Shall we, then?);
// prompt("Tell me everything you know.", "...");

var theNumber = 2;

console.log("Your number is the square root of " + theNumber * theNumber);

theNumber = 3;
if (!isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
}

theNumber = "x";
if (!isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
}
else {
    console.log("Hey. Why didn't you give me a number?");
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
    result = result  * 2;
    counter = counter + 1;
}
console.log(result);

// do {
//     var yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);


for (number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

result = 1;
for (counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

for (current = 20; ;current++) {
    if (current % 7 == 0) {
        break;
    }
}
console.log(current);

for (number = 0; number <= 12; number += 2) {
    console.log(number);
}

weather = "sunny";
switch (weather) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
        break;
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

// Single line comment

/*
    Multi-line
    comment
 */

