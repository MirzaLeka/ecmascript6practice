


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
console.log("go go go");
yield "stop!";
console.log("Go go go!");
yield "not yet!";
console.log("Ok, but I'll go");


}

let firstYield = simpleYield();
console.log(firstYield.next().value);
console.log(firstYield.next().value);
console.log(firstYield.next().value);
////////// and this works fine :D
/*
console.log(simpleYield().next().value);
console.log(simpleYield().next().value);
console.log(simpleYield().next().value);

THE PROBLEM WITH THIS IS BECAUSE I'M ALWAYS GETTING THE SAME VALUE (FIRST YIELD)
*/