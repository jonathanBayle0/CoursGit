function generateur() {
  const nb = Math.floor(Math.random() * 100);
  return nb;
}

var btn = document.querySelector("button");
var saisie = document.querySelector("input");
var messageZone = document.querySelector(".message");

var nbAleatoire;

function init() {
  nbAleatoire = generateur();
  console.log("NbAleatoire :" + nbAleatoire);
}

init();
btn.addEventListener("click", verification);

function verification() {
  if (saisie.value == nbAleatoire) {
    //victoire
    var messageReussite = "🎉🎉🎉 Bravo tu as trouvé le juste prix! 🎉🎉🎉";
    messageZone.textContent = messageReussite;
  } else {
    //defaite
    console.log("Réessaie");
  }
}
