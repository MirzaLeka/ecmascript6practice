
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

// same could be done in ES5 using prototype: 

// newArr = array.prototype.push.apply(newArr,myArr);


// Example 3: Rest operator 

	function funky( ...n) {
		
		// Using REST operator, we converted all arguments that came after name into an array | put the REST of the params into array
		console.log(n); 
		// it's quite different than logging out arguments object because what we have above is number of arguments transformed into array 
		
		// outpout:
		// [1]
		// [1,2]
		// [1,2,3]
			
	}
	
		funky(1);
		funky(1,2);
		funky(1,2,3);

// Example 4: ES6 object literals

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

	
	let getItems = (action, ...rest) => {
		
	action(rest.map( n => rest[n-1] ** rest[n-1] ));
		
	}
	
	getItems(console.log, 1, 2, 3, 4);
	
	// self invoked functions 
	// https://blog.mgechev.com/2012/08/29/self-invoking-functions-in-javascript-or-immediately-invoked-function-expression/
	
	
	/* set of jquery 
	array.forEach((val, i) => {
		$(`.class:eq(${i})`).text(val).click(() => {  
			$(this).toggleClass("class2");
		});
	}); */
	
	// Pay attention to these 2 examples
	
		var ninja = {
		name: "Ryu",
		chop(x) {
			var _this = this; // requires this line 
		window.setInterval(function () {
			if (x > 0) {
				console.log(_this.name + " chopped the wood"); // now we're using _this.name to get this of an object name and that scope that we lost
			}
		}, 500);
			
		}
	};
	
	ninja.chop(5);
	
	// we can't use this without _this, because it's out of scope, but with arrow function we can do that
	
		var ninja = {
		name: "Ryu",
		chop(x) {
		window.setInterval(() => {
			if (x > 0) {
				console.log(this.name + " chopped the wood"); // and this will work fine! 
			}
		}, 500);
			
		}
	};
	
	ninja.chop(5); 
	
	
	
	
	
	
	
	
	
