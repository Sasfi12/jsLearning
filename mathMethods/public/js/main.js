//let nombre = 8.56
let nombre = 8.56; 
//Arrondir au nombre à l'entier le plus proche
console.log(Math.round(nombre));
//Arrondir à l'entier vers le haut
console.log(Math.ceil(nombre));
//Arrondir à l'entier vers le bas
console.log(Math.floor(nombre));
//Enlever toute la partie décimale
//console.log(parseInt(nombre)) //use math.trunc instead. 
console.log(Math.trunc(nombre))
//Afficher un nombre aléatoire entre 0-1
console.log(Math.random())
//Afficher un nombre aléatoire entre 0-100
console.log(Math.random() * 100)
//Afficher un nombre entier aléatoire entre 0-100
console.log(Math.round(Math.random() * 100))
//Afficher 8 puissance 2
console.log(8 ** 2); 
//Afficher racine carré de 9
console.log(Math.sqrt(9))
//Afficher la valeur absolue de -1
console.log(Math.abs(-1))
//Afficher la valeur la plus grande parmi -2, 1000, 8, 57
console.log(Math.max(-2 , 100 , 8 , 57))
//Afficher la valeur la plus petite parmi -2, 1000, 8, 57
console.log(Math.min(-2 , 100 , 8 , 57))


function prime(n) { 
    if (n >= 2 ) {
    for(let i = 2 ; i <= n / 2 ; i++) {
        if(n % i === 0) {
            return false  ;
        }

    }
    return true ; 
    

}
else {
    console.log('Not acceptable')
}
}
console.log(prime(13)) 