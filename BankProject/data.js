
var customers=[];
var allCustomers=[];
var id=1000;
//var keys=["customersName","password","confirmpassword","mobile","emailid"];
//console.log(keys);
function registerCustomer(){
    event.preventDefault();
    var customerName=document.getElementById("customerName").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    var mobile=document.getElementById("mobile").value;
    var emailid=document.getElementById("emailid").value;
    console.log(customerName+" "+password+" "+confirmpassword+" "+
    mobile+" "+emailid);
    var customer={
        customerName:customerName,
        password:password,
        mobile:mobile,
        emailid:emailid,
        balance:0,
        customerId:generateId()
    }
    if(password==confirmpassword){
        allCustomers.push(customer);
       console.log(allCustomers);
      localStorage.setItem( "allCustomers",JSON.stringify(allCustomers));

    }
    else{
        document.getElementById("pw").innerHTML="Password did not match";
    }
    
    
    
    //
  
    document.getElementById("customerName").value=" ";
    document.getElementById("password").value=" ";
    document.getElementById("confirmpassword").value=" ";
    document.getElementById("mobile").value=" ";
    document.getElementById("emailid").value=" ";   


}
// function getBalance(){
//     var customerDetails=JSON.parse(localStorage.getItem("allCustomers"));
//     console.log(customerDetails);
//     if(customerDetails==null){
//         return 0;
//     }
//     else{
//         for(var i=0;i<customerDetails.length;i++){
            
//             return 0;
//         }
//     }

// }

function generateId(){
    var customerDetails=JSON.parse(localStorage.getItem("allCustomers"));
    console.log(customerDetails);
    if(customerDetails==null){
        return id;
    }
    else{
        for(var i=0;i<customerDetails.length;i++){
            id=id+1;
            return id;
        }
    }
        //    localStorage.setItem("balance",JSON.stringify(0));
        //    localStorage.setItem("customerId", JSON.stringify(id));
    
}
function login(){
    event.preventDefault();
    var customerDetails=JSON.parse(localStorage.getItem("allCustomers"));
    console.log(customerDetails);
    var emailid=document.getElementById("emailId").value;
    var password=document.getElementById("password").value;
    console.log(customerDetails.length);
    for(var i=0;i<customerDetails.length;i++){
        
        // if(customerDetails[i].emailid!=emailid && customerDetails[i].password!=password){
        //    continue;
        //   // var mydiv = document.getElementById("myDiv");
        //    //var aTag = document.createElement('a');
        //   // aTag.setAttribute('href',"HomePage.html");
        //   // aTag.innerText = "link text";
        //   // mydiv.appendChild(aTag);
        // }
        // else{
        //     event.preventDefault();
        //     console.log(customerDetails[i].emailid +" "+customerDetails[i].password);
        //     localStorage.setItem("emailid", JSON.stringify(emailid));
        //     localStorage.setItem("customerId", JSON.stringify(customerDetails[i].customerId));
            
        //    console.log("Success");
        //    //break;
        //    location.replace("HomePage.html");
        // }

        if(customerDetails[i].emailid==emailid && customerDetails[i].password==password){
            event.preventDefault();
            console.log(customerDetails[i].emailid +" "+customerDetails[i].password);
            localStorage.setItem("emailid", JSON.stringify(emailid));
            localStorage.setItem("customerId", JSON.stringify(customerDetails[i].customerId));
            console.log("Success");
            location.replace("HomePage.html");
        }
        else if(customerDetails[i].emailid!=emailid && customerDetails[i].password!=password){
            continue;
        }
        else if(customerDetails[i].emailid!=emailid || customerDetails[i].password!=password){
            alert("Incorrect Emailid or password");
            break;
         }
    }
      
}

 
function withdraw(){
    event.preventDefault();
    var customerDetails=JSON.parse(localStorage.getItem("allCustomers"));
    var customerId=JSON.parse(localStorage.getItem("customerId"));
    var wamount=parseInt(document.getElementById("wAmount").value);
    for(var i=0;i<customerDetails.length;i++){
       
        if(customerDetails[i].customerId==customerId){
            if(customerDetails[i].balance==0){
                document.getElementById("withdraw").innerHTML="Zero Balance";
              //  console.log("zero balance");
            }
            else{
                customerDetails[i].balance=parseInt(customerDetails[i].balance)-wamount;
                localStorage.setItem('allCustomers',JSON.stringify(customerDetails));
                document.getElementById("withdraw").innerHTML="Balance is  "+customerDetails[i].balance;
                
            }
           
        }
    }

}

function deposit(){
    event.preventDefault();
    var customerDetails=JSON.parse(localStorage.getItem("allCustomers"));
    var customerId=JSON.parse(localStorage.getItem("customerId"));
    var damount=parseInt(document.getElementById("dAmount").value);
    //console.log(typeof damount);
    for(var i=0;i<customerDetails.length;i++){
           
        if(customerDetails[i].customerId==customerId){
               
                customerDetails[i].balance=parseInt(customerDetails[i].balance)+damount;
                localStorage.setItem('allCustomers',JSON.stringify(customerDetails));
                document.getElementById("deposit").innerHTML="Balance is  "+customerDetails[i].balance;

        }
        
    }

}

function transfer(){
    event.preventDefault();
    var bal;
    var customerDetails=JSON.parse(localStorage.getItem("allCustomers"));
    var customerId=JSON.parse(localStorage.getItem("customerId"));
    var customerIdTransfer=document.getElementById("customerid").value;
    var tamount=parseInt(document.getElementById("tAmount").value);
    //console.log(typeof damount);
    for(var i=0;i<customerDetails.length;i++){
           
        if(customerDetails[i].customerId==customerIdTransfer){
               
                customerDetails[i].balance=parseInt(customerDetails[i].balance)+tamount;
                localStorage.setItem('allCustomers',JSON.stringify(customerDetails));
            

        }
        if(customerDetails[i].customerId==customerId){
               
            customerDetails[i].balance=parseInt(customerDetails[i].balance)-tamount;
            bal=customerDetails[i].balance;
            localStorage.setItem('allCustomers',JSON.stringify(customerDetails));
          

    }     
        
    }
    document.getElementById("transfer").innerHTML=tamount+"Rs."+"Transferred. Your Current Balance is  "+bal;
}
