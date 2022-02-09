var employees = [
    {
        name: "Kiran",
        reporting_manager: "Rajesh",
        "currentCTC" :"10LPA",
        "revisedCTC":"16LPA",
        role: "Senior Full StacK Developer"
    },
    {
        name: "Rajesh",
        reporting_manager: "Ravi",
        "currentCTC" :"18LPA",
        "revisedCTC":"26LPA",
        role: "Architect"
    },
    {
        name: "Anil",
        reporting_manager: "Vikram",
        "currentCTC" :"3LPA",
        "revisedCTC":"6LPA",
        role: "Junior Full StacK Developer"
    }
]

var result=[];
for(var i=0;i<employees.length;i++)
{
    var email=`Hi ${employees[i].name}, your reporting manager is ${employees[i].reporting_manager}.
                Your current CTC is ${employees[i].currentCTC} and your revised CTC is ${employees[i].revisedCTC}.
                Your role is ${employees[i].role}`;
    result.push(email);  
}
console.log(result);