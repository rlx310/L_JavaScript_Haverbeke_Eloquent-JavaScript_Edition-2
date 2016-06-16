//

function countChar(str) {
    var counted = 0;
    for (var i = 0; i < string.length; i++) {
        if (str.charAt(i) == ch)
            counted += 1;
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));