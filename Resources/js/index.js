


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

////////// Reversing JS Events

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


