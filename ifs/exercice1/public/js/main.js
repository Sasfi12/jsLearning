/* a Vérification de l'égalité :

  1  Utilisez console.log() pour vérifier l'égalité entre 1 et "1".
  2  Utilisez console.log() pour vérifier l'égalité STRICTE entre 1 et "1".*/
/*1*/console.log("Egalité entre 1 et '1'"); console.log(1 == '1')
/*2*/console.log("Egalité stricte entre 1 et '1'"); console.log(1 === '1')
/* b Vérification de la longueur d'un prénom :

/*1    Créez un programme qui demande le prénom d'une personne.
/*2    Si la longueur du prénom est inférieure à 5 caractères, affichez une alerte avec le message "Ton nom est trop court". */
/*1*/let prenom = prompt('Quel est ton prénom ? ')
/*2*/if ((prenom.length) < 5) {
  alert('ton prenom est trop court')
}
/* c Addition et Vérification de la réponse :

  1  Affichez une addition à l'utilisateur.
  2  Demandez-lui de résoudre l'addition.
  3  Si la réponse est correcte, félicitez-le. Sinon, dites-lui que la réponse est incorrecte. */
/*1*/
let a = alert('Quel est la réponse de 5 + 5 ?');
/*2*/
let reponse = prompt('Votre suggestion  ?');
/*3*/if (reponse == 10) { alert('bravo mon choux...') } else { console.log("ta réponse n'est pas correcte") }
/* d Multiplication et Vérification de la réponse :

1    Affichez une multiplication à l'utilisateur.
2    Demandez-lui de résoudre la multiplication.
3    Si la réponse est correcte, félicitez-le en indiquant la bonne réponse. Sinon, dites-lui à combien d'unités il était de la bonne réponse.*/

/*1*/ alert('voici une multiplication 5 * 5 ')
/*2*/ let réponse = prompt('Donnez votre réponse... ')
/*3*/ if (réponse == 25) { alert('bravo ! la bonne réponse était en effet 25 !') 

            } else 
                { if (réponse > 25) { alert('votre réponse est de ' + (réponse - 25) + ' unité(s) loin du résultat correct') 

                  } else if (réponse < 25) {alert('votre réponse est de ' + (25 - réponse) + ' loin de la réponse') } };  
                       
/* e 
  1  Ajout d'éléments dans un tableau :
  2  Créez un programme qui permet d'ajouter des éléments dans un tableau via des prompts.
  3  Quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau.
*/
/*1*/ let tableauVide = [1]; 
/*2*/
let answer 
while(true) {
  if(answer != "stop"){
    answer = prompt('entre ta réponse ')
    tableauVide.push(answer)
    alert(tableauVide)
    if(tableauVide.length == 3) {
      alert(tableauVide + 'HAS THREE ELEMENTS')
    }
  }
  else {
    break; 
  } 
  

}

/* f Classification des chiffres dans des bacs :

1    Créez un programme qui permet à l'utilisateur de mettre des chiffres dans des bacs.
2    Si le chiffre est plus grand ou égal à 12, il va dans le bac "grandNombres". Sinon, il va dans le bac "petitNombres". 
3    Affichez ensuite une seule alerte avec le contenu des deux bacs. */
/* Je crée une liste */ 
grandNombres = []
petitNombres = []
réponse = prompt('entrez votre réponse... écrit STOP pour stop. ui') 
while(true) {
/*1*/ 
  if( réponse >= 12  ) {
    grandNombres.push(réponse);
    réponse = prompt('entrez votre réponse... écrit STOP pour stop. ui')
  } 
  else if(réponse < 12) {
    petitNombres.push(réponse);
    réponse = prompt('entrez votre réponse... écrit STOP pour stop. ui')
  }
  else if(réponse == 'STOP'.toLocaleLowerCase()) {
    alerte('invalide')
    réponse = prompt('entrez votre réponse... écrit STOP pour stop. ui')
  }
alert('vos nombres supérieurs ou égale a 12 ' + grandNombres +"\nvos nombres inférieur a 12 " + petitNombres  )  
}

/* g Exercice Inventé :

    Inventez un exercice en utilisant les concepts appris en JavaScript jusqu'à présent, en incluant des conditions. */

