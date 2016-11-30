module.exports = {

binarysearch: function(num_array, number) {
    
 
    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1;
},
oneToTwenty: function(){
	
    var array_results = [];
	
for (var b=1; b <= 20; b++){ //loop through the number sequence from 1 to 20
			
				array_results.push(b);
		
	}
	
	return array_results;
},
twoToForty: function(){
	
    var array_results = [];
	
for (var b=2; b <= 40; b = b+2){ //loop through the number sequence from 1 to 20
			
				array_results.push(b);
		
	}
	
	return array_results;
},
tenToOneThousand: function(){
	
    var array_numbers=[];
	for (var i=10; i <= 1000; i = i+10){
		array_numbers.push(i);
	}
	return array_numbers;
}


}
/*
function twoToForty(){
	
    var array_numbers=[];
	for (var i=2; i <= 40; i = i+2){
		array_numbers.push(i);
	}
	return array_numbers;
}
Array.prototype.search = function(d){
	var min_index = 0;
    var max_index = this.length - 1;
    var guess;		
	var searchElementIndex = -1; 
	
	var element = d;
	var results = {};
	var count = 0;
 
 
    while (min_index <= max_index) {
		if (this[max_index] === element) {
            searchElementIndex = max_index;
			break;
        
		}else{
			guess = Math.floor((min_index + max_index) / 2);
		console.log(guess);
		console.log(this[guess]);
        if (this[guess] === element) {
            searchElementIndex = guess;
			break;
        }
        else {
			
            if (this[guess] < element) {
                min_index = guess + 1;
            }
            else { //this[guess] > element
                max_index = guess - 1;
            }			
			
        }
		count++;
		}
        
    }
	
	results["count"] = count;
	results["index"] = searchElementIndex;
	
    return results;
}

var search = twoToForty().search(40);
      console.log(search);
      console.log(search.count);
      console.log(search.index);
	  
*/