/*Exercice 1 : Déclarations de variables 

 

    Déclarez deux variables en utilisant les deux mots-clés de déclaration de variables différents (let et const).
    Attribuez-leur les valeurs de votre choix.*/ 

 let premiereVariable = "Salut"
 const deuxiemeVariable = 45

/*  Exercice 2 : Réassignation de variables

    Créez une variable appelée "nbr" et attribuez-lui la valeur 5.
    Réassignez la variable "nbr" pour lui donner la valeur 10. 
    Affichez la valeur de "nbr" dans la console.
*/
var nbr = 5 
nbr = 50 
console.log(nbr)

/*

    Exercice 3 : Types de variables

    Déclarez une variable appelée prenom et attribuez-lui votre prénom en tant que chaîne de caractères.
    Déclarez une variable appelée age et attribuez-lui votre âge en tant que nombre.
    Déclarez une variable appelée estEtudiant et attribuez-lui une valeur booléenne indiquant si vous êtes étudiant ou non. 
*/

var prenom = "Sufyan" 
var age = 21 
var estEtudiant = true 

/*
    Exercice 4 : Utilisation de const
    
    Créez une variable constante appelée pi et attribuez-lui la valeur de 3.14159.
    Essayez de réassigner une nouvelle valeur à pi et observez ce qui se passe. 
*/
const pi = 3.14159 
// pi = 3.14159    // will provoke an error. 
console.log(pi)


/*
Déclarez deux variables dont le contenu sont 4 (int) et "6" (string)
Utilisez l'opérateur ">" entre les deux variables

number1 > number2
Utilisez l'opérateur " < " entre les deux variables

number1 < number2
Utilisez l'opérateur "==" entre les deux variables

number1 == number2
Utilisez l'opérateur " !=" entre les deux variables

number != number2
Utilisez l'opérateur "===" entre les deux variables

number === number2
Utilisez l'opérateur " !==" entre les deux variables

number !== number2 

*/
let petit = 1   //Hésitez pas à changé cette valeur pour réobserver les nouveaux resultats.
let grand = 2   //Hésitez pas à changé cette valeur pour réobserver les nouveaux resultats.
console.log(petit + " Est inférieur à                      "+ grand + "\n", petit < grand)   
console.log(petit + " Est supérieur à                      "+ grand + "\n", petit > grand)
console.log(petit + " Est égale en string ou en int à      "+ grand + "\n", petit == grand)
console.log(petit + " Est différent en string ou en int à  "+ grand + "\n", petit != grand)
console.log(petit + " Est du méme type et valeur           "+ grand + "\n", petit === grand)
console.log(petit + " n'est pas du méme type et valeur     "+ grand + "\n", petit !== grand)

var dict = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]; 

console.log(dict)   