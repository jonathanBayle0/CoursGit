function generateur() {
  const nb = Math.floor(Math.random() * 100);
  return nb;
}

const form = document.querySelector("form");
const saisie = document.querySelector("input");
const messageZone = document.querySelector(".message")
const reste_btn = document.querySelector(".reset-btn")

var nbAleatoire;

function init() {
  messageZone.textContent = "Devinez le nombre entre 0 et 100";
  nbAleatoire = generateur();
  console.log("NbAleatoire :" + nbAleatoire);
}

init();

reste_btn.addEventListener("click", init)
form.addEventListener("submit", verification);

function verification(e) {
  e.preventDefault()
  if (saisie.value == nbAleatoire) {
    //victoire
    var messageReussite = "🎉🎉🎉 Bravo tu as trouvé le juste prix! 🎉🎉🎉";
    messageZone.textContent = messageReussite;
  } else {
    //defaite
    badGuess(saisie.value)
  }
}

const failMessages = ["🥶 Tu gèles 🥶", "😱 Tu refroidis 😱", "😱 Tu chauffes 😱", "🥵 Tu brûles 🥵"]

/** 
 * Affiche un message en fonction de
 * la difference entre la valeur a trouver
 * et la valeur choisie
*/  
function badGuess(guess) {
  let difference = Math.abs(nbAleatoire - guess)

  let cas = 0
  
  // Choix du message en fonction de la difference
  if (difference > 50)  cas = 0
  else if (difference > 25) cas = 1
  else if (difference > 10) cas = 2
  else  cas = 3
  
  // Mise a jour du message
  messageZone.textContent = failMessages[cas]
}

