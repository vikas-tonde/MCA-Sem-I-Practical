//Implement of Hashing- linear probing

function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
} HashTable.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw 'hash table is full'
    var hashedIndex = this.hash(key);
    while (this.keys[hashedIndex] != null) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
    console.log(this.keys, this.values);
}
HashTable.prototype.get = function (key) {
    var hashedIndex = this.hash(key); while (this.keys[hashedIndex] != key) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex]
}
HashTable.prototype.hash = function (key) {
    if (!Number.isInteger(key)) throw 'must be int';
    return key % this.size;
}
HashTable.prototype.initArray = function (size) {
    var array = []; for (var i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}
HashTable.prototype.showDistro = function () {
    for (const key in this.keys) {
        if (this.keys[key] !== undefined) {
            console.log(key, ' : ', this.values[key]);
        }
    }
}
var exampletable = new HashTable(10);
exampletable.put(38, 38);
exampletable.put(19, 19); 
exampletable.put(8, 8);
exampletable.put(79, 79);
exampletable.put(10, 10);
exampletable.showDistro();