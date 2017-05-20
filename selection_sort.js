function selection_sort(array) {
  var min;
  for(var j = 0; j <= array.length - 1; j++) {
    min = j;
    for(var i = j + 1; i <= array.length - 1; i++) {
      if(array[min] > array[i]) {
        min = i;
      }
    }

    var temp = array[min];
    array[min] = array[j];
    array[j] = temp;
    console.log(array)
  }
  return array;
}

var array = [23, 345, 44, 42, 3];
var sorted_array = selection_sort(array);

console.log("Array " + array);
console.log("Sorted array " + sorted_array);


// Test cases

function assert(array_one, array_two) {
  console.log("\nAsserting arrays [" + array_one + "] [" + array_two + "]")
  if(array_one.length != array_two.length) {
    console.error("FAILED - array lengths are not matching");
    return;
  }
  for(var i = 0; i < array_one.length - 1; i++) {
    if(array_one[i] != array_two[i]) {
      console.error("FAILED - element mismatch in the array");
      return;
    }
  }
  console.log("SUCCESS!");
}

assert(selection_sort([4, 8, 1 , 77, 2]), [1, 2, 4, 8, 77]);
assert(selection_sort([443, 3, 48, 66, 30]), [3, 30, 48, 66, 443]);
assert(selection_sort([5, 71, 90 ,0 , -1, 1000, 45]), [-1, 0, 5, 45, 71, 90, 1000]);
