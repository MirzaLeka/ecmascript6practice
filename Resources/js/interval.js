var t = setInterval(move, 500);
var pos = 10;

function move() {
  
  
  if (pos == 400) {
    clearInterval(t);
  }
else {
   pos+=10; 
}


 $(".inner").css({
   left: pos
 });
  

  
}