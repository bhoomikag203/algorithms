function binary_search(n,elem, array) {
	var low = 0, high = n - 1, pos = -1;
	var mid;
	while(low <= high && pos == -1) {
		mid = ( low + high ) / 2;
		if (array[mid] == elem) {	
			console.log("element is found at position " + mid );
			pos = mid;
		} else {
			console.log("searching 20 in array with low ="+ low +" and high = "+ high + " mid = " + mid)
			if (elem < array[mid]) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}	
	}
	return pos;
}

var array = [10, 20, 30, 40, 50, 60, 70];
var elem = 50;
var low, mid, high;
var n = array.length;

var position = binary_search(n, elem, array);
console.log("array = " + array);
if(position >= 0) {
console.log(elem + " is found in " + (position + 1) + "th position");
} else {
	console.log("element is not found");
}