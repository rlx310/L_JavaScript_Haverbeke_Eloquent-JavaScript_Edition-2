//

var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
console.log(listOfNumbers[1 - 1]);

var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

var mack = [];
mack.push("Mack");
mack.push("the", "knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};
console.log(descriptions.work);
console.log(descriptions["touched tree"]);

var anObject = {
    left: 1,
    right: 2
};
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

var journalx = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true
    }
];
console.log(journalx[0]);

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

var journal = [];
function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed tree"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
            Math.sqrt((table[2] + table[3]) *
                      (table[0] + table[1]) *
                      (table[1] + table[3]) *
                      (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) {
            index += 1;
        }
        if (entry.squirrel) {
            index += 2;
        }
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

for (var event in map) {
    console.log("The correlation for '" + event + "' is " + map[event]);
}

function gatherCorrelations(journal) {
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in phis)) {
                phis[event] = phi(tableFor(event, journal));
            }
        }
    }
    return phis;
}
var correlations = gatherCorrelations(JOURNAL);
console.log(correlations["pizza"]);

for (var event1 in correlations) {
    console.log(event1 + ": " + correlations[event]);
}
console.log("\n");

for (var event2 in correlations) {
    var correlation = correlations[event2];
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event2 + ": " + correlation);
    }
}

for (var i = 0; i < JOURNAL.length; i++) {
    var entry = JOURNAL[i];
    if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry)) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));


var todoList = [];
function rememberTo(task) {
    todoList.push(task);
}
function whatIsNext() {
    return todoList.shift();
}
function urgentlyRememberTo(task) {
    todoList.unshift(task);
}
rememberTo("run");
rememberTo("jump");
rememberTo("scream");
console.log(todoList);
console.log(whatIsNext());
console.log(todoList);
urgentlyRememberTo("make-up run");
console.log(todoList);

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].indexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

// var myString = "Fido";
// myString.myProperty = "value";
// console.log(mySrting.myProperty);

console.log("coconuts".slice(4, 7));
console.log("coconut".indexOf("u"));

console.log("one two three".indexOf("ee"));

console.log("   okay \n ".trim());

var string = "abc";
console.log(string.length);
console.log(string.charAt(0));
console.log(string[1]);

function noArguments() {}
noArguments(1, 2, 3);
function threeArguments(a, b, c) {}
threeArguments();

function argumentCounter() {
    console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
function addEntry2(squirrel) {
    var entry = {events: [], squirrel: squirrel};
    for (var i = 1; i < arguments.length; i++) {
        entry.events.push(arguments[i]);
    }
    journal.push(entry);
}
addEntry2(true, "work", "touched tree", "pizza", "running", "television");

function randomPointOnCircle(radius) {
    var angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

var myVar = 10;
console.log("myVar" in window);
console.log(window.myVar);
