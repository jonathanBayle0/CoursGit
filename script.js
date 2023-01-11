const operande = 12;
let operande2 = 45;

let result = operande2 + operande ;
console.log("resultat de " + operande + " + " + operande2 + " = " + result);

let aPerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musique', 'Jeux videos'],
};

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

aPerson.sayHello();
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Dimanche";
    break;
  case 1:
    day = "Lundi";
    break;
  case 2:
     day = "Mardi";
    break;
  case 3:
    day = "Mercredi";
    break;
  case 4:
    day = "Jeudi";
    break;
  case 5:
    day = "Vendredi";
    break;
  case 6:
    day = "Samedi";
}
console.log("Aujourd'hui nous sommes " + day);
