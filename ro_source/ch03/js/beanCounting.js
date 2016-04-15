//

function countBs(s) {
    var counter = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === "B") {
            counter++;
        }
    }
    return counter;
}

function countChar(s, c) {
    var counter = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === c) {
            counter++
        }
    }
    return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));