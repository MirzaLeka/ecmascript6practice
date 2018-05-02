


window.onload = function() {

	let one = document.getElementById(first);
	console.log(one);
let two = "#" + document.getElementById(second);
let three = "#" + document.getElementById(third);

console.log(`I have 32 
teeth`);


funky( "Hello", "blue", one);


}




function funky (text, c, id) {



$(id).css("color",c);

$(id).html(text); 

} 


class Program{

constructor(cpu, graphics, ram) {
	this.cpu = cpu;
	this.graphics = graphics;
	this.ram = ram;
}

getSpecs() {
	console.log(`My pc specs are:
	${this.cpu}, ${this.graphics}, ${this.ram}GB.`)
}


}

let lenovo = new Program("i3500u","AMD R7 M360 2GB",8);
lenovo.getSpecs();

let pc = new Program("E2180", "Nvidia N210 1GB", 2);
pc.getSpecs();


function* simpleYield() {
console.log("ES5 generators");
yield "stop!";
console.log("Functions execute in steps (checkpoints), whhen we want them to.");
yield "not yet!";
console.log("Funtions are marked with 'function*'");


}


let checkpoint = simpleYield();
console.log(checkpoint.next().value);
console.log(checkpoint.next().value);
console.log(checkpoint.next().value);

////////// and this works fine :D
/*
console.log(simpleYield().next().value);
console.log(simpleYield().next().value);
console.log(simpleYield().next().value);

THE PROBLEM WITH THIS IS BECAUSE I'M ALWAYS GETTING THE SAME VALUE (FIRST YIELD)
*/

////////// Rehearsing JS Events

let numOne = document.getElementById("inputOne");
let numTwo = document.getElementById("inputTwo");
let addSum = document.getElementById("sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
let one = parseFloat(numOne.value) || 0;
let two = parseFloat(numTwo.value) || 0;

addSum.innerHTML = one + two;

}

// Promises again

var pro = new Promise( (resolve, reject) => {
  
  if (2 > 3) {
    resolve("You are right");
  }
  else {reject("You are wrong");}
  
}  );

pro.then((msg) => {
  console.log(msg);
}, (err) => {
  console.log(err);
}    );

// Spread operator 
let meatArray = ["cevaps", "kebabs"];
let fruitArray = ["apples", "bananas", "oranges"];
let vegetablesArray = ["potato", "rice", "tomato"];

let foodArray = [...meatArray, ...fruitArray, ...vegetablesArray];
console.log(foodArray);


let d = new Date;

/* 20 String Methods */

let wordOne = "My name is Mirza!";
let wordTwo = `I'm ${d.getFullYear() - 1994} years old.`;
const selectedWord = "Homer";
const charNum = 5;

// Original strings
console.log(`Value of var wordOne is: ${wordOne}`);
console.log(`Value of var wordTwo is: ${wordTwo}`)


/* indexOf() */

// Prints index of starting letter of selectedWord. If there is no selectedWord in wordOne variable, it will output "-1"
console.log((`Index of ${selectedWord} is ${wordOne.indexOf(selectedWord)} \n`));

/* match() */

// If selectedWord is part of String inside wordOne variable, it will print selectedWord to screen else it will output "null"
console.log(`Match word ${selectedWord}: ${wordOne.match(selectedWord)}`);

/* replace() */

// Replacing word from variable word with our selectedWord variable
// Notice that I put word "Mirza" as /Mirza/. This is RegEx!
console.log(`Replacing word Mirza with word ${selectedWord}: ${wordOne.replace(/Mirza/, selectedWord)}`);

 /* chatAt() */

// Returns a character with the index of value we inserted
 console.log(`CharAt(${charNum}): ${wordOne.charAt(charNum)}`);

 /* charCodeAt() */

 // Returns and ASCII code of character specified with the value we inserted
 console.log(`CharCodeAt(${charNum}): ${wordOne.charCodeAt(charNum)}`);

/* concat() */

// Concats multiple values
console.log(`Concating wordOne and wordTwo: ${wordOne.concat(wordTwo)}`);

 /* endsWith() */

 // Does String end with this word/letter or not? If it does this will print out true, else it will output false
 console.log(`WordOne ends with ${selectedWord}: ${wordOne.endsWith(selectedWord)}`);

 /* fromCharCode() */

 // Returns char of the ASCII code (number) we insert
 console.log(`ASCII code with value 109 belongs to character ${String.fromCharCode(109)}`); // Use of String object

/* includes() */

// Returns true or false depending on whether variable includes the value or doesn't
console.log(`Variable wordOne includes name Mirza: ${wordOne.includes('Mirza')}`);

 /* lastIndexOf() */

const LIndex = "Frontend, Backend!"
console.log("LIndex variable: " + LIndex);

// Variable LIndex has two instances of word "end". This returns the index of last instance of the word end
console.log("Index of a last mention of 'end' in LIndex variable is at value: " + LIndex.lastIndexOf("end"));


 // repeat()

 // search()

 // slice()

 // split()

 // startsWith()

 // substr()

 // substring()

 // toLowerCase()

 // toUpperCase()

 // trim()




