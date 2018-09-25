
// Example 1: Default parameters

function log (name = "Mirza", age = 24) {
	
	console.log(`My name is ${name} and I'm ${age} years old.`);
	
}

log(); // using default params I can call function with empty params and this will work fine

// Example 2: Spread operator

let myArr = [1,2,3]; // spread operator actually spreads each item of array into individual item

function sum (a, b, c) {
	
	console.log(a+b+c);
	
}

sum(...myArr); // spreading array elements into 3 separate numbers

var newArr = [...myArr, 4, 5, 6]; // if we'd put myArr without spread operator, then we'd just nest that array inside this new array 
// and it would look like this: newArr = [ [1, 2, 3], 4, 5, 6];
// but since with spread operator we can split array items into idividual item, it will look like this [1,2,3,4,5,6]


// Example 3: ES6 object literals

var name = "Mirza";
var age = 24;

/* Old Way */

	var user = {
		name: name,
		age: age,
		doingRightNow: function () {
			console.log("Coding JS");
		}
	};
	
/* New Way */

	var user2 = {
		name, 
		age,
		doingRightNow() {
			console.log("Coding JS");
			console.log(`My name is ${this.name}`); // using this keyword to grab the entire object (user2) and call it's property name (this.name == user2.name)
		}
	}
	
//	console.log(this.doingRightNow()); // last this was inside obj so it was reffering to that object. This new this is out of all scopes, so it's 
	// connected with the whole document or should I say to window object. So it will work like user2.doingRightNow();

