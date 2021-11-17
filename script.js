/*
 * Prototype: Un objet servant de "modèle parent" à de nouveaux objects
 * et donnant accès à ses propriétés et méthodes.
 */

/*************************************************/
/* 1. Utiliser un objet existant comme Prototype */
/*************************************************/

// L'objet utilisateur1 existant
let utilisateur1 = {
  username: "Jean",
  email: "j@lebocal.academy",
  admin: false,
  presentation: function () {
    console.log("coucou je suis " + this.username);
  },
};

// On crée un nouvel objet utilisateur 2 en utilisant utilisateur1 comme Prototype
let utilisateur2 = Object.create(utilisateur1);

// L'objet utilisateur2 n'a aucune propriété qui lui est propre
console.log(utilisateur2);

// Pour lui attribuer un username et un email, il faut lui ajouter ces propriétés (surcharge)
utilisateur2.username = "Michel";
utilisateur2.email = "m@lebocal.academy";

// L'objet utilisateur2 possède 2 propriétés
console.log(utilisateur2);

// - utilisateur1 est un objet existant précédement ET un Prototype
// - utilisateur2 est un objet créé à partir du Prototype utilisateur 1
// - Le Prototype utilisateur1 n'a PAS de constructeur. Il n'y a pas de fonction permettant
//   de construire de nouveaux objets utilisateurs basés sur utilisateur 1

// ETAPES:
// 1. Créer un objet (LE FUTUR PROTOTYPE)
// 2. Créer un nouvel objet (A PARTIR DU PROTOTYPE)

/**********************************************/
/* 2. Créer un constructeur (et un prototype) */
/**********************************************/

// Fonction constructeur
function Utilisateur(username, email) {
  this.username = username; // Cette propriété appartiendra directement à l'objet créé (et pas au prototype)
  this.email = email; // Cette propriété appartiendra directement à l'objet créé (et pas au prototype)
}

// On obtient un Prototype créé automatiquement et accessible via Constructeur.prototype
console.log(Utilisateur.prototype);

// Pour lui ajouter des propriétés, il faut le modifier comme n'importe quel objet
Utilisateur.prototype.admin = false; // Cette propriété appartient au prototype
Utilisateur.prototype.presentation = function () {
  console.log("coucou je suis " + this.username);
}; // Cette propriété appartient au prototype

// On créer un nouvel objet utilisateur3 avec la fonction Utilisateur (constructeur)
let utilisateur3 = new Utilisateur("Paul", "p@lebocal.academy");

// On constate que l'objet utilisateur possède ses proriétés et a accès aux propriétés de son prototype
console.log(utilisateur3);
console.log(utilisateur3.admin);
console.log(utilisateur3.presentation());

// - Utilisateur est une fonction constructeur mais PAS un Prototype
// - Utilisateur.prototype est un objet et un prototype pour tous les objets créé avec la fonction Utilisateur
// - utilisateur3 est un objet créé avec le constructeur Utilisateur et à partir du Prototype Utilisateur.prototype

// ETAPES:
// 1. Créer un constructeur
// 2. Modifier le prototype créé automatiquement
// 3. Créer un nouvel objet avec le constructeur et aura pour prototype CONSTRUCTEUR.prototype
