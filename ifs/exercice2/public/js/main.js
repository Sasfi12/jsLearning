// let nombreUn ;
// let nombreDeux; 
// let nombreTrois;
//Exo 1
/*

    1. Les réponses boléenes part 1
    A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
    Vérifiez si les valeures sont égales et renvoyez la réponse dans une alerte
    L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et le nombre y sont-ils égaux ? : réponse

 */ 
// nombreUn = prompt("Entre le nombreUn")
// nombreDeux = prompt("Entre le nombreDeux") 
// if(nombreUn == nombreDeux){   
// 	alert('ILS ONT LA MEME VALEUR' + '\n i love sql');		
// 	} else {
// 		alert("ILS N'ONT PAS LA MEME VALEUR" + '\ni love sql'); 
// 	}
//Exo 2
/*


    2. Les réponses boléenes part 2
    A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
    Vérifiez si la première valeures est plus petite que la seconde renvoyez la réponse dans une alerte
    L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et-il plus petit que le nombre y ? : réponse

 */
// nombreUn = prompt("Entre le nombreUn");
// nombreDeux = prompt("Entre le nombreDeux"); 
// if(nombreUn < nombreDeux) {
//     alert(`${nombreUn} est-il plus petit que ${nombreDeux} ? : cela me semble ${nombreUn < nombreDeux}`)
// } 
// else {
//     alert(`${nombreUn} est-il plus petit que ${nombreDeux} ? : cela me semble ${nombreUn < nombreDeux}`)
// }
/*
    3. Les réponses boléenes part 3
    A l'aide de trois promptes récupérez 3 nombres et stockez les dans des variables
    Additionner les deux premières valeures et comparer les avec la troiseme à l'aide de l'opérateur de comparaison ">"
    L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : reponse booléenne

*/
// nombreUn  = prompt('Entrez un 1er nombre');
// nombreDeux = prompt('Entrez un 2eme nombre');
// nombreTrois = prompt('Entrez un 3eme nombre');
// let res = nombreUn + nombreDeux ; 
// let comp = res > nombreTrois ; 
// alert(`La somme du nombre x + le nombre y (${res}) est-elle plus grande que le nombre z(${nombreTrois}) ? : ${comp}`)




// let phraseUser; 
// let charaAmount; 

/*

    4.
    Créer un programme qui récupère la phrase de l'utilisateur,l'utilisateur doit également pouvoir estimer le nombre de caractères compris dans la phrase, 
	ensuit retourne a l'utilisateur 
	si oui ou non son estimation était correct si ce n'était pas correct annonce lui que sa réponse est fausse et à combien d'unité éloignée de la vrai 
	réponse, exemple si la chaine de caractères fait 100 caractères et que l'utilisateur répond 85 alors renvoyez lui "Incorrect tu étais à 15 unités de la bonne réponse !"

 */
/*
phraseUser = prompt('Enter your sentence ');
charaAmount = phraseUser.length; 
characters = 0 ; 
for(let i = 1; i < phraseUser.length; i++ ) {
    if(i == ' ') {
        continue ; 
    }
    else {

    
    characters++ ; 
    }
} 

let userGuess = prompt('How much letter did your sentence contain ? ');
if( userGuess > characters ) {
    alert(`Your number is ${userGuess - characters} below the answer`)
}
else if ( userGuess < characters) {
    alert(`Your number is ${userGuess + characters} above the answer`)
}
else if (userGuess == characters) {
    alert(`CONGRATULATION , This is the exact ammount. `)
}
alert(`this sentence had ${characters} characters   `)
*/ // TO CORRECT LATER 
/*

    5.
    Créer un programme ou tu vérifies que l'utilisateur à bien rentrer son prénom dans le prompt
    Si l'utilisateur ne rentre rien alors renvoyez un prompt avec comme texte "Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?
    Sinon, Bonjour, prénom
    A savoir ! Il est normal que la question n'est reposé qu'une seule fois 

*/
let userName = prompt('Entrez votre prenom. '); 
/* 

    6.
    Trouver une méthode qui permet de répondre par l'affirmative et la negative
    Lancer cette méthode en proposant à l'utilisateur de s'abonner
    Si l'utilisateur confirme alors renvoyez lui un prompt pour lui demander quelle 
	formule elle veut prendre Luxe ou Normal, selon ce qu'elle répond renvoyer une alert pour la féliciter de s'etre abonné
    Si c'est Luxe renvoyez lui : Félicitation vous avez choisis la formule Luxe !
    Si c'est normal renvoyez lui : Merci pour votre abonnement.
    Si l'utilisateur ne répond rien demandez lui si elle est certaine avec la meme methode que vous avez trouvé par l'affirmative ou la negative
    Si Elle répond par l'affirmation alors dite lui que c'est dommage et souhaiter lui une bonne journée
    Si elle répond par la négative reproposez lui de choisir entre les formules Luxe ou Normal


*/ 
/*

    7.
    Dans cet exercice il faudra préparer un mini quizz
    Créer 2 variables contenant chacun un prompt posant une questions
    Créer 2 variables contenant la réponses a chacune de ces questions
    Si l'utilisateur ne répond a aucune réponse de manière correct alors affichez une alert pour lui dire qu'il à échoué
    Si l'utilisateur répond correctement à une des deux questions alors dit lui qu'il y est presque et renvoyez lui comme information a quel question il a eu tord
    Si l'utilisateur répond correctement à toutes les questions, félicitez le

 */

/*

    8. Conditions sur les nombres

    Lancez un prompt pour qu'un utilisateur entre son age (pour une réservation au cinéma). Suivant l'age entré, vous devez afficher une alerte (une seule) avec un des messages suivant :
    Si la personne est majeur (18 ou plus) => affiche "vous êtes majeur, vous pouvez réserver"
    Si la personne est mineur (moins que 18) => "vous êtes mineur, l’accès est réservé aux grands"

    Ajoutons quelques conditions supplémentaires :
    Si la personne n'est pas née (moins de 0) => "vous n’êtes même pas nés, n’essayez pas de tricher"
    Si la personne est trop vieille (plus de 100) => "vous êtes encore vivant ? Évitez de voir ce film pour le rester."
    Si la personne passe tout juste (pile 18) => "pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant."

    Avancé :
    Même chose sauf que l'utilisateur entre son année de naissance. Votre calcul pour obtenir l'age doit être fait en fonction de l'année actuelle (qui change chaque année).

 */ 

/*9. Opérateurs Logique

Vous allez lancer plusieurs prompt et les stocker dans différentes variables. Puis faire des vérifications plus poussées et afficher une alerte avec les phrases mentionnées plus loin.
Lancer 3 prompts pour demander:

    "est-ce que vous êtes riche ?"
    "voulez-vous partir en vacance ?"
    "est-ce que vous avez un chat ?"

Les 3 valeurs doivent être stockées dans 3 variables sachant que si on répond "oui" c'est considéré comme positif. (Stocker true/false dans les variables est une bonne façon de réaliser cet exercice.)

!!Attention!! les points suivant ne doivent pas être fait en même temps.
si la personne ne veut pas partir en vacance => affichez "pas de problème, ne partez pas en vacance" (utilisez l'opérateur "!")
Si la personne n'est pas riche ou qu'elle a un chat => "Même si vous le voulez, vous ne pouvez pas partir." (utiliser l'opérateur "!" ainsi que l'opérateur "||")
Si la personne est riche et n'a pas de chat => "Vous pourriez partir en vacance si vous le voulez" (utiliser "&&" et "!")
Si la personne est riche et n'a pas de chat et veut partir en vacance => "Tout est parfait, partez en vacance !" (utilisez "&&" et "!")
Même chose que le point précédent, mais seulement avec "||" et "!"
Si la personne n'est pas riche ou qu'elle a un chat ou qu'elle ne veut pas partir, et que tout ce qu'elle dit est faux... (n'oubliez pas d'utiliser des parenthèses) */

 	
	
