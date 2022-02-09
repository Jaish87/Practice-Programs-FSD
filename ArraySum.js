// var date=new Date();
// console.log(date.getDate() + "/" +date.getMonth()+1 +"/" +date.getFullYear() +" "+ date.getHours() + ":" +date.getMinutes() +":"+date.getSeconds());

var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));