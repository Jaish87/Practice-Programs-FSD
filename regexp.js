var str="2Jaz@zAg";

var pattern=/(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W])(?=.{8,})/;

console.log(pattern.test(str));