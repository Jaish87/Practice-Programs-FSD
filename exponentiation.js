//Task: Explore **= operator.
// **= opertaor is called as exponentiation assignment operator. 
// x**=y means x=x**y where ** means power of 
//if x=5 y=2 x**=y =>power of x is y. 5 ** 2=>25

var x=5;
var y=2;
var z="2b";
var m="20"
var n="2";

console.log(x**=y);
console.log(x**=z);
console.log(z**=x);
console.log(z**=m);
console.log(m**=n);