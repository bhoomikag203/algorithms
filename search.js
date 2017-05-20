function linear_search(elem, array) {

   for(i = 0; i<= array.length; i++) {
   		if(array[i] == elem) return i;
   }

   return -1;
	
}

var array = [23, 345, 44, 42, 3];
var elem = 322;

console.log(elem + " is found in " + linear_search(elem, array) + "th position");
