const prompt = require('prompt-sync')();

let testObj = {"python": "AI", "java script": "Web", "unity":"Game"};
console.log('What would you prefer to study ?') 
for(let i = 0 ; i > testObj.lenght ; i++) {console.log(testObj.value)}
let takenAnswer = prompt(" What is your answer ?  "); 
let isUsedin = testObj[takenAnswer];
console.log(isUsedin);
