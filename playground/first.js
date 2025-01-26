const prompt = require('prompt-sync')();

a = prompt('Enter a Number: ')
if( a <= 10) 
	{	
	for(let i = 0;i <= 10; ++i){
		console.log(`${a} * ${i} = ${a * i}`)	
		} 	
		
	}
else {
	console.log('PAS AU DESSUS DE 10')
}
