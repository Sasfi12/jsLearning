// EXO 1
function exo1() {
const Semaine = ['lundi' , 'mardi' , 'mercredi' , 'jeudi' , 'vendredi' , 'samedi' , 'dimanche'] ;
let jourSemaine = prompt('Entre un jour de la semaine. ') ;
if (Semaine.includes(jourSemaine.toLocaleLowerCase())) {
    switch(jourSemaine.toLocaleLowerCase()) {
        case 'lundi': 
            alert(`On est ${jourSemaine} Tu as cours à MolenGeek et tu as du sport en soirée.`);
            break;
        case 'mardi': 
            alert(`On est ${jourSemaine} Tu as cours à MolenGeek et tu as du sport en soirée.`);
            break;
        case 'mercredi': 
            alert(`On est ${jourSemaine} Tu as cours à MolenGeek et tu as du sport en soirée.`);
            break;
        case 'jeudi': 
            alert(`On est ${jourSemaine} Tu as cours à MolenGeek et tu as du sport en soirée.`);
            break;
        case 'vendredi': 
            alert(`On est ${jourSemaine} Tu as cours à MolenGeek et tu as du sport en soirée.`);
            break;
        case 'samedi': 
            alert(`On est ${jourSemaine} Tu as cours à DODO et tu as du sport en DODO.`);
            break;
        case 'dimanche': 
            alert(`On est ${jourSemaine} Tu as cours à DODO et tu as du sport en DODO.`);
            break;
    }
}
else {
    alert("CECI N'EST PAS UN JOUR DE LA SEMAINE...")
}
} 
//EXO 2 
function exo2() {
    const meteo = ['pluit' , 'soleil' , 'neige']; 
    let currentMeteo = prompt(`Quel méteo fait-il aujourd'hui ?  :  \n${meteo} `)
    if (meteo.includes(currentMeteo.toLocaleLowerCase())) {
        switch (currentMeteo.toLocaleLowerCase()) {
            case 'pluit': 
                alert('Il pleut , je met un truc de pluit')
                break;
            case 'soleil': 
                alert('Il soleil , je met un truc de soleil')
                break;
            case 'neige': 
                alert('Il neige , je met un truc de neige')
                break;
        } 
    }
    else {
        alert("Cette météo n'est pas prises en compte. ");
    }
}

// EXO 3 

function exo3() {
    let varUser = prompt('Quel est ton chiffre ?'); 
    switch(varUser % 2) {
        case  0: 
            alert('Le nombre est un multiple de 2');
            break;
        case  1: 
            alert("Le nombre n'est pas un multiple de 2");
            break;
        default: 
            alert('no'); 
            break; 
    }
}

// EXO 4
function exo4() {
    let nbr1 , operateur ,nbr2; 
    nbr1 = +prompt('Enter the first number'); 
    nbr2 = +prompt('Enter the second number'); 
    operateur = prompt('Choose your opération.');
    switch(operateur) {
        case '+': 
            alert(`${nbr1} + ${nbr2}  = ${nbr1 + nbr2} `);
            break;
        case '-': 
            alert(`${nbr1} - ${nbr2}  = ${nbr1 - nbr2} `);
            break;
        case '*': 
            alert(`${nbr1} * ${nbr2}  = ${nbr1 * nbr2} `);
            break;
        case '/': 
            alert(`${nbr1} / ${nbr2}  = ${nbr1 / nbr2} `);
            break; 
        case '**': 
            alert(`${nbr1} ** ${nbr2}  = ${nbr1 ** nbr2} `);
            break;
        case '%': 
            alert(`${nbr1} % ${nbr2}  = ${nbr1 % nbr2} `);
            break;
        default: 
            alert('Entre un opérateur valide'); 
    }
} 