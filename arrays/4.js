/* Exercice 4 

 

1    Créer une variable qui reçois un array avec 3 éléments 
	-> ex: coding 20, coding 21, coding 22
2    Afficher les éléments de l'array
3    Ajouter et afficher votre prenom a l'array
4    Remplacer et afficher un élément de l'array par autre chose
5    Effacer un élément de l'array
6    Afficher le contenu le d'array
	*/
/*1 */
let array = [1 , 2 , 3]; console.log('exercice 1 :\n'+ array) 
/*2*/
console.log('exercice 2');for(let i = 0 ; i < i; i++ ){console.log(array[i])}
/*3*/
console.log('exercice 3');array.push('Sufyan');console.log(array); 
/*4*/
let randomIndex = console.log('exercice 4');
array[Math.floor(Math.random() * array.length)]= "J'ai pas d'ami" ; 
console.log(array)
/*5*/ 
console.log('exercice 5');array.pop();console.log(array);
/*6*/ 
console.log('exercice 6');console.log(array); 

