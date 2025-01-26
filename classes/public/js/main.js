/*THEORIE 
Les Constructeurs d'objet 
 
Les classes 


Les classes ont été introduites en JavaScript avec la mise à jour de 2015.

 Une classe est un type de fonction qui permet de construire plusieurs objets avec les mêmes propriétés, offrant ainsi une structure pour éviter la création répétée d'objets ayant des caractéristiques similaires.

Imaginez que l'on souhaite créer plusieurs objets partageant les mêmes propriétés :

 

 


Mais, comme vous pouvez le constater, ces deux objets ont les mêmes propriétés mais des valeurs différentes. Grâce aux classes, il est possible de créer une structure fonctionnelle qui rassemble ces propriétés, puis de créer ces objets en une seule ligne.

 

_______________________________________________________________________________________________________________
La syntaxe d’une classe 

 

    Le nom d'une classe doit toujours suivre le mot-clé "class" et doit commencer par une majuscule.
    Le constructeur est une méthode spéciale qui permet de créer toutes les propriétés que les objets auront. Il ne peut y avoir qu'une seule méthode 
    "constructor" dans une classe.
    À l'intérieur du constructeur, on spécifie que la valeur de chaque propriété sera égale aux paramètres du constructeur.
     Par exemple, comme dans l’image, "this.nom" représente la propriété "nom" de l’objet, et le nom du paramètre est le nom qui sera attribué lors de la création de l’objet.
    Une fois que la classe est correctement définie, il faut créer des instances de cette classe, autrement dit, 
    des objets à partir de la structure de la classe. Pour cela, il faut créer une variable, lui donner un nom, et cette variable aura comme 
    valeur une nouvelle instance de la classe. À l'intérieur des parenthèses, on doit fournir les valeurs définies dans le constructeur.

 

Par exemple : Dans le constructeur, on spécifie qu'il faut un prénom. Ainsi, lors de la création d'une nouvelle personne, il faut fournir le prénom, etc. Il est impératif de suivre la même déclaration que celle présente dans le constructeur.

Dans les classes, il est également possible de créer des méthodes que toutes les instances pourront utiliser.

 

 


La méthode dans une classe est similaire à celle d’un objet : elle est une propriété de la classe qui a pour valeur une fonction. Comme illustré dans l’image, les deux instances "elias" et "ayhan", appartenant à la classe Personne, peuvent utiliser cette méthode.
 FIN THEORIE */
 
 /*Exercice 1

 

    Crée une classe Personnage avec les propriétés : âge, nom, ville.
    Fais 2 instances de cette classe.

  */
 function exo1() { 
 class Personnage {
    constructor(age , nom , ville ) {
        this.age = age ; 
        this.nom = nom ; 
        this.ville = ville ; 
    }

 }
perso1 = new Personnage(21 , "Jack" , "Paris"); 
perso2 = new Personnage(21 , "Jaqueline" , "Paris");
console.log(perso1 , perso2)  
}

/*Exercice 2

 

    Ajoute la méthode 'sePresenter' à la classe Personnage.
    Cette méthode doit afficher "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log.
    Utilise cette méthode sur les deux instances de l'exercice 1.
*/
function exo2() { 
    class Personnage {
        constructor(age , nom , ville ) {
            this.age = age ; 
            this.nom = nom ; 
            this.ville = ville; 
        }
        sePresenter() {
            console.log(`Bonjour je suis ${this.nom} , j'ai ${this.age} ans et je vie à ${this.ville}`)
        }
    }
    perso1 = new Personnage(21 , "Jack" , "Paris"); 
    perso2 = new Personnage(30 , "Jaqueline" , "Paris");
    perso1.sePresenter() ; perso2.sePresenter() 
}
/* ### lieux
let maison = {
	nom: "maison",
	contenu: [],
};  
let epicerie = {
	nom: "epicerie",
	contenu: [],
	ingredients: [],
};
let cuisine = {
	nom: "cuisine",
	contenu: [],
	ingredients: [],
};

### ingredients
let poivron = {
	nom: 'poivron',
	etat: 'entier',
	prix:  1 ,
};
let oignon = {
	nom: 'oignon',
	etat: 'entier',
	prix:  2 ,
};
let oeuf = {
	nom: 'oeuf',
	etat: 'entier',
	prix:  4 ,
};
let epice = {
	nom: 'epice',
	etat: 'moulu',
	prix:  3.25 ,
};
let paprika = {
	nom: 'paprika',
	etat: 'moulu',
	prix:  1.5 ,
};
let fromage = {
	nom: 'fromage',
	etat: 'coupé',
	prix:  1.6 ,
};

### Personne
let personnage = {
	nom: "Maxime",
	lieu: "néant",
	argent: 100,
	panier: [],
	se_deplacer(x){},
	payer(x){},
	couper(x,y){}
} */ 
function exo3() {
class Personne {
    constructor(nom , lieu , argent , panier) {
        this.nom = nom ; 
        this.lieu = lieu ; 
        this.argent = argent ; 
        this.panier = panier ; 
    }
    seDeplacer(destination) {
        console.log(`${this.nom} se dirige vers ${destination.nom}`)
    }
    payer(article) {
        this.panier.push(article.nom)
        console.log(`${this.nom} à rajouté ${article.nom} à son panier `)
    }
    
}
}
/* Exercice 4

 

    Crée une classe Objet avec les propriétés : nom, prix.
    Crée deux instances d'objets avec un nom et un prix.
    Place ces objets dans une boîte (tableau).
    Crée une classe Personnage avec les propriétés : nom(string), sac(tableau), argent(number).
    Ajoute deux méthodes : prendre(objet) et acheter(vendeur, objet).
    Crée deux instances de Personnage et fais-leur [prendre] un objet de la boîte avec leur méthode.
    Ensuite, fais acheter à l'un des deux l'objet de l'autre. 
*/
function exo4() {
    class Objet {
        constructor( nom , prix ) {
            this.nom = nom ; 
            this.prix = prix ; 
        }

    }
    class Personnage {
        constructor(nom , sac , argent ) {
            this.nom = nom ; 
            this.sac = sac ; 
            this.argent = argent ; 
        }
        prendre( objet ) {
            this.sac.push(objet.nom);
            console.log(`${this.nom} prend ${objet.nom}`)
        }
        acheter(vendeur , objet) {
                vendeur.sac.pop()
                vendeur.sac.push(objet.nom)
                this.argent -= objet.prix
                console.log(`${this.nom} a acheter ${objet.nom} chez ${vendeur.nom}`)
        }

    }
    let salamCola1 = new Objet("salamCola1" , 1); 
    let salamCola2= new Objet("salamCola2" , 1);
    let Sufyan = new Personnage("Sufyan" , [] , 20);
    let Ahmed = new Personnage("Ahmed" , [] , 30);
    let tab = [salamCola1 , salamCola2] ; 
    console.log("DEBUT",Sufyan , Ahmed ,"\nOBJETS" ,tab);  
    Sufyan.prendre(salamCola1);
    Ahmed.prendre(salamCola2);
    console.log("Prendre",Sufyan , Ahmed ,"\nOBJETS" , tab); 
    Sufyan.acheter(Ahmed , salamCola1)
    Ahmed.acheter(Sufyan , salamCola2)
    console.log("Acheter",Sufyan , Ahmed ,"\nOBJETS" , tab); 
}
/*Exercice 5
    Crée une classe Lieu avec la propriété nom(string) et personnes(array vide).
    Crée des instances de Lieu: MolenGeek, Snack et Maison.
    Crée une classe Personne avec les propriétés : nom(string), prénom(string), argent(number) et une méthode seDeplacer().
    Cette méthode permet de te déplacer dans les différents lieux en utilisant la méthode embarquer() du bus.
    Crée une instance de Personnage.
    Crée une classe Bus avec les propriétés : personnes(array vide), caisse(number) et une méthode embarquer().
    Cette méthode est appelée dans la méthode seDeplacer() de la personne. Elle vérifie si tu as assez d'argent, 
    déduit l'argent de ta personne, l'ajoute à sa caisse, et tu entres dans le bus. Le bus coûte 2.80.
    Crée une instance de Bus.
    Horaires :
        8h00 - Maison
        8h30 - Prends le bus vers MolenGeek
        8h45 - Arrive à MolenGeek
        12h45 - Sors de MolenGeek, prends le bus pour le snack
        13h30 - Sors du snack, retour à MolenGeek à pied pour digérer
        17h10 - Sors de MolenGeek, prends le bus pour rentrer chez toi.
    Affiche dans la console ton argent. */
function exo5() {
    let horaires = ["8H00" , "8H30" , "8H45" , "12h45" , "13H30" , "17H10"]
    class Lieu {
        constructor( nom , personnes) {
            this.nom = nom ; 
            this.personnes = personnes;
        }
    }
    let molen = new Lieu("Molengeek" , [])
    let snack = new Lieu("Snack" , [])
    let albayt = new Lieu("Maison" , ["Muhammad Sufyan"])
    let destinations = [molen , snack , albayt]

    class Personne {
        constructor(nom , prenom , argent ) {
            this.nom = nom ; 
            this.prenom = prenom ; 
            this.argent = argent; 
        }
        seDeplacer(destination , bus) { 
            // employer la methode embarqué du bus. 
            for(let i = 0  ; i < destinations.length; i++  ) {
                if(destinations[i].personnes.includes(this.nom + " " + this.prenom)) {
                    destinations[i].personnes.pop(); 
                }
            }
            bus.embarquer(this )
            bus.personnes.push(this.nom)
        }

    }
    let sufyan = new Personne("Muhammad", "Sufyan" , 2000) ; 

    class Bus {
        constructor(personnes, argent ) {
            this.personnes = personnes ; 
            this.argent = argent ; 

        }
        embarquer(destination, personne) {
            if(this.argent >= 2.80) {
            this.argent += 2.80 ; 
            personne.argent -= 2.80 ;
        }
            else {
                console.log("Tu n'as pas assé d'argent")
            }
        }
    }
    let leBus = new Bus( [] , 20) 
    for(let i = 0 ; i < horaires.length ; i++) { 
        let current = horaires[i]; 
        switch (horaires[i].toLowerCase()) {
            case "8h00" :  
                console.log("8h00 - Maison")
                console.log(molen , "\n" , snack , "\n" , albayt , "\n"  , sufyan  , "\n" , leBus)
                break;
            case "8h30" :  
                console.log("8h30 - Prend le bus vers Molengeek")
                sufyan.seDeplacer(molen , leBus)
                console.log(molen , "\n" , snack , "\n" , albayt , "\n"  , sufyan  , "\n" , leBus)


                break;
            case "8h45" :  
                console.log("8h45 - Arrive à Molengeek")
                break;
            case "12H45" :  
                console.log("12h45 - Sors de Molengeek , Prend le bus vers le snack")
                break;
            case "13h30" :  
                console.log("13h30 - Sors du snack , retourne à pied vers Molengeek")
                break;
            case "17h10" :
                console.log("17h10 - Sors de Molengeek , rentre à pied")
                break;  
        }
    }

    console.log(molen , "\n" , snack , "\n" , albayt , "\n"  , sufyan  , "\n" , leBus)
}
    /* Exercice Héritage

 

Vous devez créer deux classes en JavaScript : Person et Student.

 

La classe Student doit hériter des propriétés et méthodes de la classe Person en utilisant le mot-clé super.

 

La classe Person doit avoir les propriétés suivantes :

    name (nom de la personne)
    age (âge de la personne)

La classe Person doit également avoir une méthode introduce qui renvoie une chaîne de caractères de la forme :

"Je m'appelle [nom] et j'ai [âge] ans."

 

La classe Student doit hériter de la classe Person et doit avoir une propriété supplémentaire :

    school (nom de l'école où l'étudiant étudie)

La classe Student doit également avoir une méthode study qui renvoie une chaîne de caractères de la forme : 

"[nom de l'étudiant] étudie à [nom de l'école]."

 

Créez une instance de la classe Student avec des données fictives.

Utilisez les méthodes introduce et study pour afficher des informations sur l'étudiant.
*/ 
function inherit() {

class Person {
	constructor(nom , prenom) {
		this.nom = nom ; 
		this.prenom = prenom ; 
	}
	introduce() {
		console.log(`Je m'appelle ${this.nom} ${this.prenom}`) 

	}
}

class Student extends Person {
	constructor(nom , prenom , school) {
	super(nom , prenom) ; 
	this.school = school ; 
	}
	study() {
		console.log(`${this.nom + " " + this.prenom} étudie à ${this.school}`)
	}
}
let jean = new Student("Jean" , "Biguard" , "Ephec")
jean.introduce();
jean.study(); 
console.log(jean);
}

function jsonTest(file) {
    fetch(file)
        // .then(response => response.json())
        // .then(values => values.forEach( value => console.log(value))) 
    console.log(file)
}
jsonTest('people.json')