// Implement of binary search (Divide and Conquer)

class search {

    binary_search(arr, key) {

        var low = 0, high = arr.length - 1;
        var flag = 0;

        while (low <= high) {

            // Find the mid index
            var mid = Math.floor((low + high) / 2);
            // If element is present at mid, return True
            if (arr[mid] == key) {
                console.log("Element found!");
                flag = 1;
                break;
            }
            // Else look in left or right half accordingly
            else if (arr[mid] < key)
                low = mid + 1;
            else
                high = mid - 1;
        }
        if (flag == 0)
            console.log("Element not found!");

    }
}

// Execute binary search
var s = new search();
var arr = [1, 3, 5, 7, 8, 9];
var key = 7;
s.binary_search(arr, key);  