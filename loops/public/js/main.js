/*Exercice 1 

 

    Déclarer une variable qui se nomme 'multiplicateur' valant 5
    Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.
*/
function exo1() {
    for (let i = 0; i < 10; i++) {
        console.log(`5 * ${i} = ${i * 5}  `)
    }
}
/* 
Exercice 2 

 

    La même chose sauf qu'on incrémente par deux
    Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 2 = 5 etc.
*/
function exo2() {
    for (let i = 0; i <= 10; i += 2) {
        console.log(`5 * ${i} = ${i * 5}  `)
    }
}
/* 
Exercice 3 

 

    Faire une boucle décendante pour les nombres pairs de 20 à 0
           // Ex: 20-18-16, ect.
*/
function exo3() {
    for (let i = 20; i >= 0; i -= 2) {
        console.log(`${i}`);
    }
}
/* 
Exercice 4 

 

    Créer un tableau avec les prénoms des gens de la classe
    Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme ‘longPrenoms’

 
*/
function exo4() {
    let prenoms = ["Imam", "George", "Ali", "Ahmed", "Layla", "Ranah", "Samir", "Marco", "Abdelali", "Mohammed", "Marwane", "Ibrahim", "Bilal", "Abdelhai", "Sufyan"]
    let prenomLong = []
    for (let i = 0; i < prenoms.length; i++) {
        if (prenoms[i].length > 5) {
            prenomLong.push(prenoms[i]);
        }
    }
    console.log(prenomLong)
}
/* 
Exercice 5 

 

    Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
           let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
    Créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

*/
function exo5() {
    let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
    let grandeSommes = []
    for (let i = 0; i < sommes.length; i++) {
        if (sommes[i] > 60) {
            grandeSommes.push(sommes[i])
            sommes.splice(i, 1)
            i--
        }
    }

}
exo5()
/* 
Exercice 6
 

    Voici un tableau : 

let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

    Triez le contenu du tableau donnees en verifiant le type de chaque donnée
    Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
    Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.

 
*/
function exo6() {
    let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
    let typeString = [], typeNumber = [], typeObject = [], typeAutre = [];
    donnees.forEach(function (data) {
        if (typeof data == 'string') {
            typeString.push(data);
        }
        else if (typeof data == 'number') {
            typeNumber.push(data)
        }
        else if (typeof data == 'object') {
            typeObject.push(data)
        }
        else if (typeof data != 'string' && typeof data != 'number' && typeof data != 'object') {
            typeAutre.push(data)
        }
    }
    )
    console.log(typeString, "\n", typeNumber, "\n", typeObject, "\n", typeAutre)

}
/*
Exercice 7 
 

   Créez un tableau avec les prénoms de toute la classe, et mettez leur première lettre en majuscule, la dernière lettre aussi, et le reste en minuscule

 
*/
function exo7() {
    let prenoms = ["Imam", "George", "Ali", "Ahmed", "Layla", "Ranah", "Samir", "Marco", "Abdelali", "Mohammed", "Marwane", "Ibrahim", "Bilal", "Abdelhai", "Sufyan"]
    for (let i = 0; i < prenoms.length; i++) {
        console.log(prenoms[i].slice(0, 1).toUpperCase() + prenoms[i].slice(1, prenoms[i].length - 1).toLowerCase() + prenoms[i].slice(-1).toUpperCase())
    }
}

/*
Exercice 8
 

    Créez une variable avec cette valeur = “Bonjour à tous”
    Vous devez faire en sorte d'avoir ce resultat à la fin : BoNjOuR A ToUs

*/
function exo8() {
    let valeur = "Bonjour à tous";
    let storageSmall = []
    let storageBig = []
    let final = ''

    for (let i = 0; i < valeur.length; i++) {
        if (i % 2 == 1) {
            storageSmall.push(valeur[i]);
        }
        else {
            storageBig.push(valeur[i]);
        }
    }
    for (let i = 0; i < valeur.length; i++) {

        if (storageBig[i] == undefined || storageSmall[i] == undefined) {
            break;
        }
        else {
            final += storageBig[i].toLocaleUpperCase() + storageSmall[i].toLocaleLowerCase();
        }
    }
    console.log(final)
}
/* 
Exercice 9 

(si vous le réussisez vous êtes des monstres)

 
Voici le tableau :

let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 
1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 
673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 
1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 
1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 
1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 
1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 
1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 
1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 
1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 
1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 
1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 
1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 
1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 
1827, 1801, 1208, 1839, 1596, 1925];

    Trouve la combinaison de deux nombres dont le résultat est “2020”.
    Trouve la combinaison de trois nombres dont le résultat est “2020”. */
function exo9() {
    let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872,
        1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934,
        673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046,
        1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699,
        1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941,
        1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161,
        1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990,
        1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903,
        1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176,
        1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987,
        1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093,
        1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792,
        1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683,
        1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585,
        1827, 1801, 1208, 1839, 1596, 1925]
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < i; j++) {
            if (tab[i] + tab[j] == 2020) {
                console.log(`${tab[i]} + ${tab[j]} est égale à ${tab[i] + tab[j]}`)
            }
            for (let k = 0; k < j; k++) {
                if (tab[i] + tab[j] + tab[k] == 2020) {
                    console.log( `${tab[i]} + ${tab[j]} + ${tab[k]} est égale à ${tab[i] + tab[j] + tab[k]}`)

                }
                for (let l = 0; l < k; l++) {
                    if (tab[i] + tab[j] + tab[k] + tab[l] == 2020) {
                        console.log( `${tab[i]} + ${tab[j]} + ${tab[k]} + ${tab[l]} est égale à ${tab[i] + tab[j] + tab[k] + tab[l]}`)
                    }

                    for (let m = 0; m < l; m++) {
                        if (tab[i] + tab[j] + tab[k] + tab[l] + tab[m] == 2020) {
                            console.log( `${tab[i]} + ${tab[j]} + ${tab[k]} + ${tab[l]} + ${tab[m]} est égale à ${tab[i] + tab[j] + tab[k] + tab[l] + tab[m]}`)
                        }
                    }
                }
            }
        }
    }
}
exo9()
/*Exercice bonus 
Utilisiez une boucle pour avoir ce résultat. ; 
i 
i i 
i i i 
i i i i 
i i i i i 
i i i i i i 
i i i i i i i 
i i i i i i i i 
i i i i i i i i i 
*/
function bon1() {
    let i = 0;
    while (i < 10) {
        console.log(`i `.repeat(i))
        i++
    }
}
/*Exercice Bonus Bis 

 

    Vous allez créer un tableau avec 10 prénoms
    Vous allez créer un tableau avec 10 chiffres d'entre 0 et 20
    Vous devez combiner ces deux tableaux :

console.log(`${lepremiereprenom} a eu ${lepremierchiffre}/20 en Math`
 */
function bon2() {
    let prenoms10 = ["Sufyan", "Ahmed", "Clement", "Chaise", "Jack", "Hiroyuki", "Hirohito", "Hanzaisha", "Heiwahadaikiraidesu", "うんこさん"];
    let vingtNotes = [20, 19, 18, 15, 5, 3, 9, 4, 12, 14];
    for (let i = 0; i < prenoms10.length; i++) {
        console.log(`${prenoms10[i]} a eu ${vingtNotes[i]}/20 en Math`)
    }
}
    /* ### **Exercice supp 1 : Comptage des voyelles**

Déclarez une variable `phrase` contenant une chaîne de caractères de votre choix (par exemple : "Bonjour, je suis développeur web").
Créez une boucle qui compte combien de voyelles (`a`, `e`, `i`, `o`, `u`) sont présentes dans la chaîne et affichez le résultat dans la console. */ 

function supp1() {
    let phrase = "Bonjour, je suis développeur web" ; 
    let voyelles = [`a`, `e`, `i`, `o`, `u` ,`y` , `è`] ; 
    let nombres = 0 ; 
    for(let i = 0 ; i < phrase.length ; i++) {
        if(voyelles.includes(phrase[i])) {
            nombres++

        }
    }
    console.log(nombres)
}

/*### **Exercice supp 2 : Tableau pair et impair**

Créez un tableau avec les nombres de 1 à 20.
À l'aide d'une boucle, triez les nombres dans deux nouveaux tableaux : `nombresPairs` et `nombresImpairs`.
Affichez les deux tableaux dans la console. */
function supp2() {
    const tableau = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
    let nombresPairs = [] , nombresImpairs = [] ; 
    for(let i = 0 ; i < tableau.length ; i++) {
        if (tableau[i] % 2 == 0) {
            nombresPairs.push(tableau[i]) ; 

        } else {
            nombresImpairs.push(tableau[i]); 
        }
    }
    console.log(nombresPairs , "\n" , nombresImpairs)
}

/* ### **Exercice supp 3 : Inversion de chaîne**

Déclarez une variable `mot` contenant un mot ou une phrase.
Utilisez une boucle pour inverser les caractères du mot (exemple : "bonjour" devient "ruojnob").
Affichez le mot inversé dans la console. */ 
function supp3() {
    let mot = "僕はうんこです"
    let inverter = []
    let result = ''
    for(let i = mot.length ; i >= 0 ; i-- ) {
        inverter.push(mot[i])
    }
    for(let i = 1 ; i < mot.length + 1; i++ ) {
        result += inverter[i] 
    }
    console.log(result)
    
}
/* ### **Exercice supp 4 : Somme des multiples de 3 et 5**

Utilisez une boucle pour parcourir les nombres de 1 à 50.
Si un nombre est un multiple de 3 ou de 5, ajoutez-le à une variable `sommeTotale`.
Affichez `sommeTotale` à la fin.*/ 
function supp4() {
    sommeTotal = []; 
    for(let i = 1 ; i <= 50 ; i++  ) {
        if(i % 3 == 0 || i % 5 == 0 ) {
            sommeTotal.push(i) 
        }
    } 
    console.log(sommeTotal)
}
/* ### **Exercice supp 5 : Compter les mots**

Créez une variable `texte` contenant une phrase.
Utilisez une boucle pour compter combien de mots sont présents dans la phrase (indice : les mots sont séparés par des espaces `" "`).
Affichez le résultat. */ 
function supp5() {
    let count = 0;
    let text = "ceci est ma phrase."; 
    text = text.split(' ')
    for(let i = 0 ; i < text.length ; i++) {
        if(text[i] !== " " && text[i] !== ".") {
            count++
        }
    }
    console.log(count)
}
/*### **Exercice supp 6 : Remplir un tableau avec des carrés**

Créez un tableau vide appelé `carres`.
Utilisez une boucle pour ajouter dans ce tableau les carrés des nombres de 1 à 10. Par exemple, `1, 4, 9, 16, ...`.
Affichez le tableau final dans la console. */
function supp6() {
    let carres = []
    for(let i = 1 ; i <= 10 ; i++) {
        carres.push(i ** 2)
    }
    console.log(carres)
}
/*### **Exercice supp 7 : Remplir une table de multiplication dynamique**

Déclarez une variable `multiplicateur` que l'utilisateur peut changer.
Créez une table de multiplication complète (1 à 10) pour ce multiplicateur et affichez-la dans la console */
function supp7() {
    let multiplicateur = prompt('Choisis le multiplicateur... ')
    for(let i = 1 ; i <= 10 ; i++ ) { 
        console.log(`${multiplicateur} * ${i} = ${multiplicateur * i }`)
    }
}
/*### **Exercice supp 8 : Suite de Fibonacci**
Créez un tableau vide appelé fibonacci. Ajoutez-y les 10 premiers nombres de la suite de Fibonacci 
(où chaque nombre est la somme des deux précédents : 0, 1, 1, 2, 3, 5, ...). Affichez le tableau dans la console. */
function supp8() {
    let a , b , result;
    a = 0 ; b = 1 ;  
    for(let i = 1 ; i <= 100 ; i++) {
        result = a + b; 
        a = b;  
        b = result;
        console.log(result)
    }   
}
supp8(); 