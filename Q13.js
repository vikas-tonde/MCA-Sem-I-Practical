//  Implement linear search (Brute Force)

var arr = [2, 6, 3, 8, 9, 12, 54, 4];
var key = 12;
var flag = false;
var i = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
        flag = true;
        break;
    }
}
if (flag) {
    console.log(`Key ${key} is found at position ${i + 1}`);
}
else {
    console.log(`Key ${key} is not present in an array`);
}