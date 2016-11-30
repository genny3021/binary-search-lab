
  'use strict';

var expect = require('expect');

var myApp = require('../app/binary-search.js');



Array.prototype.toTwenty = function(){	
   
}
Array.prototype.toForty = function(){
	
}
Array.prototype.toOneThousand = function(){
	
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
        
		}else if (this[min_index] === element){
			searchElementIndex = min_index;
			break;
		}
		else{
        guess = Math.floor((min_index + max_index) / 2);
 
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


describe('Binary Search to traverse an ordered list, effectively', function() {
  describe('Populate the arrays with valid content', function() {
    
    it('should create an array from 1 to 20, with intervals of 1', function() {
      expect(myApp.oneToTwenty()[0]).toBe(1);
      expect(myApp.oneToTwenty()[19]).toBe(20);
      expect(myApp.oneToTwenty().length).toBe(20);
      for(var i = 0; i < myApp.oneToTwenty().length - 1;i++) {
        expect(myApp.oneToTwenty()[i + 1] - myApp.oneToTwenty()[i]).toBe(1);
      }
    });

    it('should create an array from 2 to 40, with intervals of 2', function() {
      expect(myApp.twoToForty()[0]).toBe(2);
      expect(myApp.twoToForty()[19]).toBe(40);
      expect(myApp.twoToForty().length).toBe(20);
      for(var i = 0; i < myApp.twoToForty().length - 1;i++) {
        expect(myApp.twoToForty()[i + 1] - myApp.twoToForty()[i]).toBe(2);
      }
    });

    it('should create an array from 10 to 10000, with intervals of 10', function() {
      expect(myApp.tenToOneThousand()[0]).toBe(10);
      expect(myApp.tenToOneThousand()[99]).toBe(1000);
      expect(myApp.tenToOneThousand().length).toBe(100);
      for(var i = 0; i < myApp.tenToOneThousand().length - 1;i++) {
        expect(myApp.tenToOneThousand()[i + 1] - myApp.tenToOneThousand()[i]).toBe(10);
      }
    });
  });

  describe('Get the index of the item with an expected number of loops in array [1, 2 . . . 20]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = myApp.oneToTwenty().search(16);
      expect(search.count).toBeLessThan(5);
      expect(search.index).toBe(15);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = myApp.oneToTwenty().search(33);
      expect(search.count).toBeLessThan(Object.keys(search).length);
      expect(search.index).toBe(-1);
    });
  });

  
  it('should not contain any form of `indexOf` in the search function', function() {
    expect(Array.prototype.search.toString().indexOf('indexOf')).toBe(-1);      
  });
  
  describe('Get the index of the item with an expected number of loops in array [2, 4 . . . 40]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = myApp.twoToForty().search(16);
      expect(search.count).toBeLessThan(5);
      expect(search.index).toBe(7);
    });

    it('should return {count: 0, index: 9} for 20', function() {
      var search  = myApp.twoToForty().search(20);
      expect(search.count).toBe(0);
      expect(search.index).toBe(9);
    });


    it('should return {count: 0, index: 19} for 40', function() {
      var search  = myApp.twoToForty().search(40);
      expect(search.count).toBe(0);
      expect(search.index).toBe(19);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = myApp.twoToForty().search(33);
      expect(search.count).toBeLessThan(Object.keys(search).length);
      expect(search.index).toBe(-1);
    });
  });

  describe('Get the index of the item with an expected number of loops in array [10, 20 . . . 1000]', function() {

    it('should return {count: /* <= 3 */, index: 3} for 40', function() {
      var search  = myApp.tenToOneThousand().search(40);
      expect(search.count).toBeLessThan(4);
      expect(search.index).toBe(3);
    });

    it('should return {count: /* <= 5*/, index: 87} for 800', function() {
      var search  = myApp.tenToOneThousand().search(880);
      expect(search.count).toBeLessThan(6);
      expect(search.index).toBe(87);
    });

    it('should return {count: < /* array length */, index: -1} for 10000 ', function () {
      var search = myApp.tenToOneThousand().search(10000);
      expect(search.count).toBeLessThan(Object.keys(search).length);
      expect(search.index).toBe(-1);
    });

  });
});

/*
* Block the indexOf Array function
*/
Array.prototype.indexOf = function () {
  throw new Error('You are not allowed to use the indexOf function');
};
var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();
