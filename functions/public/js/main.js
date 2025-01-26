/*Exercice 1

Créez une fonction qui prend deux paramètres, les additionne, et affiche le résultat avec console.log. (Additionner)
*/
function add(a , b ) {
    return a + b ; 
}
console.log(add(1  ,  2))
/*
Exercice 2

Créez une fonction qui prend deux paramètres, soustrait le deuxième au premier, et affiche le résultat avec console.log. (Soustraction)
*/
function sub(a , b ) {
    return a - b ; 
}
console.log(sub(1 , 2))
/*
Exercice 3

Créez une fonction qui prend deux paramètres, les multiplie, et affiche le résultat avec console.log. (Multiplication)
 */
function mul(a , b ) {
    return a * b 
}
console.log(mul(2 , 5))
/*
Exercice 4

Créez une fonction qui prend deux paramètres, divise le premier par le deuxième, et affiche le résultat avec console.log. (Division)
 */
function div(a , b ) {
    return a / b 
}
console.log(div(10 , 5))
/*
Exercice 5

Créez une fonction qui prend deux paramètres, retourne le reste de la division du premier par le deuxième, et affiche le résultat avec console.log. (Modulo)
 */
function modulo(a , b ) {
    return a % b 
}
console.log(modulo(11 , 2))
/*
Exercice 6

Créez une fonction qui prend un paramètre, retourne le carré de ce nombre, et affiche le résultat avec console.log. (Racine carrée)
*/
function sqrt(a) {
    return Math.sqrt(a) 
}
console.log(sqrt(9))
 /*
Exercice 7

Créez une fonction qui prend deux paramètres, retourne le premier nombre à l'exposant du deuxième, et affiche le résultat avec console.log. (Exposant)
*/
function pouvoir(a , b ) {
    return a ** b  
}
console.log(pouvoir(9 , 2))
 /*
Exercice 8

Créez une fonction [capitalize] qui transforme n'importe quelle chaîne de caractères en mettant la première lettre en majuscule et le reste en minuscules;
*/
function capitalize(a) {


    return a.split('')[0].toUpperCase() + a.slice(1 , a.length).toLowerCase()
}
console.log(capitalize("saLut ToUt LE mOnDE"))
 /*
Exercice 9

Créez une fonction [calcul] ayant 3 paramètres : nbr1, operator, nbr2. 
Vous devez pouvoir entrer un nombre, choisir entre + - * ou /, entrer un second nombre, et obtenir une réponse. 
Utilisez un switch.
*/
function calcul(nbr1 , operator , nbr2) {
    switch (operator) {
        case "+":
            console.log(`${nbr1} + ${nbr2} = ${nbr1 + nbr2}`)
            break;
        case "-":
            console.log(`${nbr1} - ${nbr2} = ${nbr1 - nbr2}`)
            break;
        case "*":
            console.log(`${nbr1} * ${nbr2} = ${nbr1 * nbr2}`)
            break;
        case "/":
            console.log(`${nbr1} / ${nbr2} = ${nbr1 / nbr2}`)
            break;
        case "%":
            console.log(`${nbr1} % ${nbr2} = ${nbr1 % nbr2}`)
            break;
        case "**":
            console.log(`${nbr1} ** ${nbr2} = ${nbr1 ** nbr2}`)
            break;    
    
        default:
            console.log('Opérateur invalide')
            break;
    }
}
 /*
Exercice 10

Créez une fonction [reverseNumber] qui retourne une série de nombres à l'envers (exemple : si j'entre 851, elle me retourne 158)
*/
function reverseNumber(num) {
    s = parseInt(num.toString().split('').reverse().join('') )
    return s ; 
}
console.log(reverseNumber(851))
/*
Exercice 11

Créez une fonction [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2. 
Elle répond "Le num x est divisible par 2 : x:2 = z" 
dans le cas où c'est divisible, sinon "Ce nombre n'est pas divisible par 2".
*/
function divPar2(num) {
    switch (num % 2 == 0) {
        case true: 
            console.log('ce nombre est divisible par 2')
            break; 
        case false: 
            console.log("Ce nombre n'est pas divisible par 2 ")
            break; 
        default: 
            console.log("Ceci n'est pas un nombre. ")
    }  
}
divPar2(44)
/*
Exercice 12

Créez une fonction [logIn] qui demande à l'utilisateur un mot de passe et vérifie s'il a bien entré "mdp". Si oui, 
faites une alerte "Vous êtes connecté". Si non, redemandez le mot de passe jusqu'à ce que l'utilisateur entre "mdp".
*/
function logIn(mdp) {
    let answer ; 
    while(mdp != answer) {
        answer = prompt("Entrez votre mot de passe")
    
    if(mdp == answer) {
        alert("Bravo votre mot de passe est bien correct... change le en vrai t'es con ou quoi ? ")
        break; 
    }
    else {
        alert("ALERTE , mot de passe incorrect... t'es con ou quoi ?")
        }
    }
}
 /*
Exercice Bonus 

Créez un tableau [codingSchoolX] vide. Créez une fonction qui permet d'ajouter quelqu'un au tableau. Créez une fonction qui permet de retirer quelqu'un du tableau.
*/
let codingSchoolX = []
function addToList(list , elem) {
    list.push(elem) ; 
    return list ; 
}
function removeToList(list , elem) {
    if (list.includes(elem)) {
       let nerai = list.indexOf(elem);
       list.splice(nerai , 1) ;  
       return list ;
    }
    else if(elem == undefined) {
        return 'oii, gimme an elem ye stupid ' ; 
    }
    else {
        return 'This elem was already not in da list brotha' ; 
    }
}
function bonusMain() {
    console.log(addToList(codingSchoolX , "Sufyan") ) ;
    console.log(addToList(codingSchoolX , "Sufyan") ) ;
    console.log(addToList(codingSchoolX , "Sufyan") ) ;
    console.log(addToList(codingSchoolX , "Sufyan") ) ;
    console.log(addToList(codingSchoolX , "Sufyan") ) ;
    console.log(removeToList(codingSchoolX , "Sufyan") ) ; 
    
}
bonusMain(); 