var employees = [
    {
        name: "Kiran",
        reporting_manager: "Rajesh",
        currentCTC :"10LPA",
        revisedCTC:"16LPA",
        role: "Senior Full StacK Developer"
    },
    {
        name: "Rajesh",
        reporting_manager: "Ravi",
        currentCTC :"18LPA",
        revisedCTC:"26LPA",
        role: "Architect"
    },
    {
        name: "Anil",
        reporting_manager: "Vikram",
        currentCTC :"3LPA",
        revisedCTC:"6LPA",
        role: "Junior Full StacK Developer"
    }
]
var allEmployees=[];
for(var i=0;i<employees.length;i++){
    allEmployees.push(`Hello ${employees[i].name} you have been promoted as ${employees[i].role} and your 
    revised CTC is ${employees[i].revisedCTC}. Congratulations!!!
    Best Regards
    ${employees[i].reporting_manager}`);
    // console.log(`Hello ${employees[i].name} you have been promoted as ${employees[i].role} and your 
    // revised CTC is ${employees[i].revisedCTC}. Congratulations!!!
    // Best Regards
    // ${employees[i].reporting_manager}`)
    console.log(allEmployees);
}