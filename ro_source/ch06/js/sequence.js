//

function logFive(sequence) {
    for (var i = 0; i < 5; i++) {
        if (!sequence.next()) {
            break;
        }
        console.log(sequence.current());
    }
}

function ArraySeq(array) {
    this.pos = -1;
    this.array = array;
}
ArraySeq.prototype.next = function() {
    if (this.pos >= this.array.length - 1) {
        return false;
    }
    this.pos++;
    return true;
};
ArraySeq.prototype.current = function() {
    return this.array[this.pos];
};

function RangeSeq(from, to) {
    this.pos = from - 1;
    this.to = to;
}
RangeSeq.prototype.next = function() {
    if (this.pos >= this.to) {
        return false;
    }
    this.pos++;
    return true;
};
RangeSeq.prototype.current = function() {
    return this.pos;
};


logFive(new ArraySeq([1, 2]));
logFive(new ArraySeq([1, 2, 3, 4, 5, 6]));
logFive(new RangeSeq(100, 1000));
console.log(new RangeSeq(100, 1000));

//////

function logFive2(sequence) {
    for (var i = 0; i < 5 && sequence != null; i++) {
        console.log(sequence.head());
        sequence = sequence.rest();
    }
}

function ArraySeq2(array, offset) {
    this.array = array;
    this.offset = offset;
}
ArraySeq2.prototype.rest = function() {
    return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function() {
    return this.array[this.offset];
};
ArraySeq2.make = function(array, offset) {
    if(offset == null) {
        offset = 0;
    }
    if (offset >= array.length) {
        return null;
    }
    else {
        return new ArraySeq2(array, offset);
    }
};

function RangeSeq2(from, to) {
    this.from = from;
    this.to = to;
}
RangeSeq2.prototype.rest = function() {
    return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function() {
    return this.from;
};
RangeSeq2.make = function(from, to) {
    if (from > to) {
        return null;
    }
    else {
        return new RangeSeq2(from, to);
    }
};


logFive2(ArraySeq2.make([1, 2]));
logFive2(ArraySeq2.make([1, 2, 3, 4, 5, 6]));
logFive2(RangeSeq2.make(100, 1000));
console.log(RangeSeq2.make(100, 1000));