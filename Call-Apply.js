var obj1={
    color:"red",
    getColor:function(a,b,c){
        return this.color;
    }
}
console.log(obj1.getColor());
var obj2={
    color:"yellow",
    getColor:function(){
        return this.color;
    }
}
var price=[100,50,20];
//console.log(obj1.getColor.call(obj2));
console.log(obj1.getColor.apply(obj2,price));

