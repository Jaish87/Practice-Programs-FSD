function f(){
    var names=["sai","kiran","rajesh","anil"];
    for(var index=0;index<names.length;index++){
        if(names[index]=="sai"){
        console.log("available");
        break;
        }
        else{
            console.log("not available");
        }
        }
}
f();