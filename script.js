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
  console.log("NbAleatoire :" + nbAleatoire + "\n");
}

init();
btn.addEventListener("click", callback);

function callback() {
  //console.log("Saisie.Value :" + saisie.value + "NbAleatoire :" + nbAleatoire);
  if (saisie.value == nbAleatoire) {
    //victoire
    var messageReussite = "🎉🎉🎉 Bravo tu as trouvé le juste prix! 🎉🎉🎉";
    messageZone.textContent = messageReussite;
  } else {
    //defaite -> fonction jonathan
    console.log("Réessaie");
  }
}
