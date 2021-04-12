const panier = document.getElementById('shopping');

function evenement() {
    alert('Vous avez cliqué sur le panier');
}

panier.addEventListener('click', evenement); 

/*
(() => {
    alert('Bienvenue !')
})() */

/* En ES5 */

(function(){
    alert('Bienvenue 2ème fois !')
})()

const coworkerAges = [53, 24, 35, 22, 41, 39];
    
const sortedAges = coworkerAges.sort(function(a, b) {
    return a - b;  
});

alert(sortedAges);

/* const display */


