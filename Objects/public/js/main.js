/*1. Exo 1

- Créez un objet avec vos valeurs

- 'Nom', 'prénom', 'age', 'taille'

- Affichez votre age via un console.log() */
function exo1() {
    let perso = {
        nom: "Sufyan",
        age: 21 ,
        taille: "176" ,  
        Presention() {
            console.log(`Bonjour je m'appele ${this.nom}, j'ai ${this.age} et je fait ${this.taille} cm`)
        }
    }

    perso.Presention()
}
/*2. Exo 2

- Créez un second et un 3eme personnage (le 3eme personnage doit avoir des valeurs null) */
function exo2() {
    let perso1 = {
        nom: "Sufyan",
        age: 21 ,
        taille: "176" ,  
        Presention() {
            console.log(`Bonjour je m'appele ${this.nom}, j'ai ${this.age} ans et je fait ${this.taille} cm`)
        }
    }

    let perso2 = {
        nom: "Hiroshima",
        age: 1945 ,
        taille: "10000" ,  
        Presention() {
            console.log(`Bonjour je m'appele ${this.nom}, j'ai ${this.age} ans et je fait ${this.taille} cm`)
        }
    }
    let perso3 = {
        nom: null,
        age: null ,
        taille: null ,  
        Presention() {
            console.log(`Bonjour je m'appele ${this.nom}, j'ai ${this.age} ans et je fait ${this.taille} cm`)
        }
    }
    perso3.Presention()
}
/*3. Exo 3

- Remplir les propriétés du 3eme personnage avec les infos suivantes.

- Son nom doit valoir le nom du personnage1

- Son âge doit valoir celui du personnage2

- Et sa taille doit être remplie avec la valeur de la taille du personnage2 */
function exo3() {
    let perso1 = {
        nom: "Sufyan",
        age: 21 ,
        taille: "176" ,  
        Presention() {
            console.log(`Bonjour je m'appele ${this.nom}, j'ai ${this.age} ans et je fait ${this.taille} cm`)
        }
    }

    let perso2 = {
        nom: "Hiroshima",
        age: 1945 ,
        taille: "10000" ,  
        Presention() {
            console.log(`Bonjour je m'appele ${this.nom}, j'ai ${this.age} ans et je fait ${this.taille} cm`)
        }
    }
    let perso3 = {
        nom: perso1.nom,
        age: perso2.age ,
        taille: perso2.taille ,  
        Presention() {
            console.log(`Bonjour je m'appele ${this.nom}, j'ai ${this.age} ans et je fait ${this.taille} cm`)
        }
    }
    perso3.Presention(); 
}

/*4. Exo 4

- Créez un personnage avec un nom et un prénom et donnez-lui une méthode 'sePresenter' qui fera un console.log "Bonjour, je m'appelle " avec son nom puis son prénom. */
function exo4(){
    let raconteSaVie = {
        nom: "Jean",
        prenom: "Delamolefesse", 
        Presention() {
            console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`)
        }
    }
    raconteSaVie.Presention()
}
/*5. Exo 5

- Créer un objet avec un nom et une méthode

- La méthode de votre objet lance un prompt permettant de changer son âge

- Utilisez la fonction alert qui renvoie le nom de la personne ainsi que l'âge de la personne. 
*/
function exo5() {
    let objet = {
        nom: 'Jack' ,
        age: 20,
        changeNom() {
            console.log(`${this.nom} à ${this.age} ans`);
            let choix = prompt('Entrez votre choix...');
            this.age = parseInt(choix); 
            console.log(`${this.nom} à ${this.age} ans`);
        }
    }
    
    objet.changeNom();
     
}
/*6. Exo 6

Créer deux personnages du nom de François et Sergio

Donnez-leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du supermarché, par exemple huile, tomate,pain, etc..

Rajouter à François la méthode dérobé(), qui prend deux aliments (les deux derniers de la liste) du panier de Sergio et les met dans son panier. 
*/

function exo6() {
    let francois = {
        nom: 'francois' ,
        panier : ['cola'] , 
        derober() {
            for(let i = 0 ; i < 3 ; i++) {
            this.panier.push(sergio.panier.at(sergio.panier.length - 1 ))   
            sergio.panier.pop()
                }
            }
            
        }
        

    
    let sergio = {
        nom: 'sergio' ,
        panier: ['huile' , 'ail' , 'gingeambre']

    }
    console.log(francois.panier)
    console.log(sergio.panier)
    francois.derober()
    console.log(francois.panier)
    console.log(sergio.panier)
}
/*7.Exo 7

Créer un objet "vieille_dame" avec une propriété "âge" assez élevée, 
une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), 
une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne
une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors, 
elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors, elle dira "bonjour" + le nom du vieil_homme.
Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".
Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame. 
*/
function exo7() {
    let vieilleDame = {
        nom : {
            prenom: "Jeanne",
            nomFamille: "Dujardin"
        } ,
        moral : "mal" , 
        objet : "ak47" ,
        parler() {
            if(this.moral == "bien") {
                console.log(`${this.nom.prenom} ${this.nom.nomFamille} dit Bonjour à ${vieilHomme.nom.prenom} ${vieilHomme.nom.nomFamille}, son morale est ${this.moral}`)
            } else if(this.moral == "mal") {
                console.log(`${this.nom.prenom} ${this.nom.nomFamille} sort son ${this.objet}, son morale est ${this.moral}`)
            }
        } 
    }
    let vieilHomme = {
        nom : {
            prenom : "Jean", 
            nomFamille : "Delaforet"
        },
        adoucir() {
            if(vieilleDame.moral == "mal") {
                console.log(`${vieilHomme.nom.prenom} ${vieilHomme.nom.nomFamille} adoucis ${vieilleDame.nom.prenom} ${vieilleDame.nom.nomFamille}`)
                vieilleDame.moral = "bien";
            }
            else {
                console.log(`${vieilleDame.nom.prenom } ${vieilleDame.nom.nomFamille} est deja de bonne hummeur !`);
            }
        }

    }
    vieilleDame.parler();
    vieilHomme.adoucir();
    vieilleDame.parler();
}
