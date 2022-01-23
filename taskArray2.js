function f(){
    var count=0;
    var names=["sai","kiran","rajesh","anil","sai"];
    for(var index=0;index<names.length;index++){
        if(names[index]=="sai"){
        count++;
        } 
        }

        if(count>1){
            console.log("duplicate");
        }  
        else{
            console.log("not available");
        }
}
f();