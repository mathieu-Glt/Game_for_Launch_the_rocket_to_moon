'use strict';

console.log("script main activé");


/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const IMG_PATH = 'images/';
const START = 9;

let timer;
let count;
let filename;
/*****************************************************/
/***************** FONCTIONS *************************/
/*****************************************************/ 
// Gestionnaire d'évènement au clic sur le bouton de mise à feu
function onClickFiringButton()
{
    console.log("firing button started");
    // Une fois que la mise à feu est lancée, on désactive le bouton de mise à feu
    firingButton.removeEventListener("click", onClickFiringButton)
    firingButton.classList.add("disabled")
    // Programmation du décollage de la fusée à la fin du compte à rebours (appel fonction)
    scheduleTakeOff()
    // Affichage initial du compte à rebours (appel fonction)
    countDown()
    // Lancement du compte à rebours
    timer = window.setInterval(countDown, 1000)
    // On change la source de l'image de la fusée
    updateRocketImage("rocket2.gif")

}

/**
 * Programme le décollage de la fusée à la fin du compte à rebours
 */
function scheduleTakeOff()
{
    console.log("scheduleTakeOff started");
    // Programmation du décollage pour dans x secondes
    window.setTimeout(()=>{
    // On change la source de l'image de la fusée(appel fonction)
    updateRocketImage("rocket3.gif")
    // On fait décoller la fusée en lui donnant la classe 'tookOff', la transition CSS fera le reste
    rocket.classList.add("tookOff")

    }, count * 1000)

}

function countDown() {
    // Affichage sur le panneau du compte à rebours
    billboard.textContent = count;
    // On décrémente le compteur
    count--
    // Si le compteur arrive à -1, on stoppe le chronomètre
    if(count === -1) {
        window.clearInterval(timer)
    }

}

/**
 * Met à jour l'image de la fusée
 */
function updateRocketImage(filename)
{
    //on modifie l'attribut src de l'image
    rocket.src = IMG_PATH + filename
    
    // rocket.setAttribute("src", IMG_PATH + filename)
}


/*****************************************************/
/*****************CODE PRINCIPAL *********************/
/*****************************************************/ 
//Initialisation des variables globales
count = 10;

// Sélection des différents éléments du DOM sur lesqsuels nous allons agir
const rocket = document.getElementById("rocket");
// console.log("🚀 ~ rocket:", rocket)
const billboard = document.querySelector("#billboard span");
// console.log("🚀 ~ billboard:", billboard)
const firingButton = document.getElementById("firing-button");
// console.log("🚀 ~ firingButton:", firingButton)


// Installation du gestionnaire d'évènement au clic sur le bouton de mise à feu
firingButton.addEventListener("click", onClickFiringButton)



/**
 * Bonus: Choisir la taille de l'étoile
 */

function choisirTaille() {
    let taille = getRandomInteger(1,3);
    switch (taille) {
        case 1 : 
            return "tiny";
            break;
        case 2 :
            return "normal";
            break;
        case 3 :
            return "big";
            break;
    }
}

/**
 * Bonus: Choisir la position x pour les étoiles
 */
 
function choisirX() {
    const x = getRandomInteger(1, window.innerWidth - 3);
    return x;
}

/**
 * Bonus: Choisir la position y pour les étoiles
 */

function choisirY() {
    const y = getRandomInteger(1, window.innerHeight - 3);
    return y;
}


// Ajouter des étoiles

const numberOfStars = 300;
let stars=[];

for (let i = 0; i <= numberOfStars; i++) {
        stars[i]=document.createElement("div");
        document.body.appendChild(stars[i]);
        stars[i].classList.add("star");
        stars[i].classList.add(choisirTaille());
        stars[i].style.left = choisirX() + "px";
        stars[i].style.top = choisirY() + "px";
    }