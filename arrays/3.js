/* Exercice 3
/*1    Créer une variable qui reçois un array avec 3 éléments -> coding 20, coding 21, coding 22
/*2    Afficher les éléments de l'array
/*3    Ajouter et afficher votre prenom a l'array
/*4    Remplacer et afficher un élément de l'array par autre chose
*/
function main() {
/*1*/	let array = ['coding 20' , 'coding 21' , 'coding 22']; 
	console.log('exercice 2 ')
/*2*/	for(let i = 0; i < array.length; i++) {console.log(array[i])} ; 
/*3*/	array.push('Sufyan'); console.log('exercice 3\n' + array);
/*4*/	array[0] = 'deezneufs'; console.log('exercice 4\n' + array) ; 
	}
main()

