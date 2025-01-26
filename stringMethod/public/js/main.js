let phrase = "Bonjour tout le monde         " ;
//Vous devez chercher des méthodes string qui permettent de faire ceci


//    Affichez la longueur de la phrase.
console.log(phrase.length) //pass
//    Retirez les espaces à la fin de la phrase à l'aide d'une méthode.
let trimmed = phrase.trimEnd(); // pass
console.log(trimmed) // pass
//    Réaffichez la longueur de la phrase après avoir retiré les espaces.
console.log(phrase.split(' ').join('').length) ; // pass 
//    Affichez uniquement la dernière lettre de la phrase.
console.log(trimmed.charAt(trimmed.length - 1)); //pass 
//    Retirez "Bonjour" de la phrase.
console.log(trimmed.replace('Bonjour ' , '')) //pass 
//    Replacez "Bonjour" au début de la phrase grâce à une méthode.
console.log(trimmed.replace('Bonjour ' , ' ').replace(' ' , 'Bonjour ')) // replace ne remplace qu'une seul fois , replaceAll remplace à chaque cas ou c'est possible.  
//    Supprimez tout de la phrase sauf "Bonjour" à l'aide d'une méthode.
console.log(trimmed.slice(0, 8)) //PASS
//    Remplacez dans la phrase le mot "Bonjour" par le mot "string".
console.log(trimmed.replace('Bonjour ' , 'string ')) //OKé
//    Bonus: Générez un chiffre aléatoire.
console.log(parseInt(Math.random() * 100)); //COOL
//    Mettez en majuscules la 5ème et la 7ème lettre de la variable phrase, tout en conservant le reste en minuscules.
console.log(trimmed.slice(0 , 4) + trimmed[4].toLocaleUpperCase() + trimmed.slice(5 , 8) + trimmed[8].toLocaleUpperCase() + trimmed.slice(9 , trimmed.length))
//    Trouvez l'index de la 2ème occurrence de la lettre "O" dans le mot "Bonjour".
console.log(trimmed.slice(0 , -10).lastIndexOf('o'));//ALED , but passed for now. 
//    Définissez une variable nom avec votre nom et mettez la première et la dernière lettre en majuscule grâce à des méthodes. //PASS 
let prenom = 'sufyan'; 
prenom = prenom[0].toLocaleUpperCase() + prenom.slice( 1  , prenom.length - 1).toLocaleLowerCase() + prenom.slice(prenom.length - 1 ).toLocaleUpperCase() ; 
console.log(`Salut ${prenom}`)

