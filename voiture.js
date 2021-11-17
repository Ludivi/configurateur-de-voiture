function budget() {
  const musik = 1200;
  const moteur120 = 1400;
  const moteur140 = 1500;
  const moteur200 = 2000;
  const prixP = 15257;

  let option = prompt(
    "Quelle est votre option : musik, moteur120, moteur140, moteur200"
  );

  let budget = prixP;
  function addition(musik, moteur120, moteur140, moteur200, prixP) {
    let resultat = musik || moteur120 || moteur140 || moteur200 + prixP;
    return resultat;

    function bouclefonction(musik, moteur120, moteur140, moteur200, prixP) {
      function verifcommande(choixclient, prixP) {
        if ((option = musik)) {
          budget = budget + musik;
          alert(
            "Le choix du pack Musik revient a 1200€ ttc en plus du prix de revient de la voiture" +
              budget
          );
          alert("Le budget total de la commande est de" + prixP + option);
        } else if ((option = moteur120)) {
          budget = budget + moteur120;
          alert(
            "Le choix du moteur 140ch revient à 1400€ ttc en plus du prix de revient de la voiture" +
              budget
          );
          alert("Le total de la commande est de" + prixP + option);
        } else if ((option = moteur140)) {
          budget = budget + moteur140;
          alert(
            "Le choix du moteur 200ch revient à 1500€ ttc en plus du prix de revient de la voiture" +
              budget
          );
          alert("Le total de la commande est de" + prixP + option);
        } else if ((option = moteur200)) {
          budget = budget + moteur200;
          alert(
            "Le choix du moteur 200ch revient à 2000€ ttc en plus du prix de revient de la voiture" +
              budget
          );
          alert("Le total de la commande est de" + budget);
        } else {
          alert(
            "A bientôt pour l'achat de votre nouvelle voiture dans notre concession"
          );
        }
      }
      addition(musik || moteur120 || moteur140 || moteur200 + prixP);
      bouclefonction(musik || moteur120 || moteur140 || moteur200 + prixP);

      alert("musik, moteur120, moteur140, moteur200 + prixP");
    }
  }
  function verifcommande(musik, moteur120, moteur140, moteur200, prixP) {}
}

budget();

/**
 * Création du configurateur de voiture
 

// Création de la fonction qui retourne le crédit
function demandeCreditFunction() {
    //Quel Crédit
    let choixCredit;
  
    choixCredit = "Quel est votre budget ? ";
    return choixCredit;
  }
  // Création de la fonction qui retourne le choix du type de voiture
  function choixTypeVoitureFunction() {
    //Quel type de voiture
    let choixTypeVoiture;
  
    choixTypeVoiture =
      "Quel type de voiture voulez-vous choisir ? \n" +
      "Berline ? \n Coupé ? \n Break ?";
  
    return choixTypeVoiture;
  }
  
  // Création de la fonction qui retourne l'action à effectuer
  function choixActionFunction() {
    let choixAction =
      "Que voulez vous faire ? \n 1/ Ajouter une option \n 2/ Retirer une option \n 3/ Voir le prix de la voiture \n 4/ Sortir ";
    return choixAction;
  }
  
  // Création de la fonction qui retourne les différentes options d'achat
  function choixFunction(
    packSport,
    packMusik,
    packMoteur120,
    packMoteur140,
    budget
  ) {
    //Quel type de voiture
    let choix;
  
    choixVoitureDebut =
      "Quel options voulez-vous rajouter ? \n 1/ Pack Sport; " +
      packSport +
      " euros \n 2/ Pack MusiK ; " +
      packMusik +
      " euros \n 3/ Pack Moteur 120 : " +
      packMoteur120 +
      " euros \n 4/ Pack Moteur 140 :" +
      packMoteur140 +
      " euros \n -------------------- ";
  
    return choixVoitureDebut;
  }
  
  // Création de la fonction qui retourne la valeur du panier
  function affichagePanierFunction(panier, budget) {
    if (!panier) {
      panier = 0;
    }
  
    let budgetRestant = budget - panier;
    let affichagePanier =
      "Le prix de votre panier est de: \n " +
      panier +
      " euros \n Votre budget restant est de : " +
      budgetRestant +
      " euros";
    return affichagePanier;
  }
  
  // Création de la fonction principal
  function configurateur() {
    //Choix ajouter/ retirer option/Voir le prix total/Consulter les options
    let choixOption;
    const packSport = 1000;
    const packMusik = 500;
    const packMoteur120 = 1200;
    const packMoteur140 = 1400;
    let coutPanier = 0;
    let choixAction;
    //Création du prompt pour le crédit et création du prompt pour le choixVoiture
    let choixBudget = prompt(demandeCreditFunction());
    let choixVoiture = prompt(choixTypeVoitureFunction());
    alert("Vous avez choisis un type: " + choixVoiture);
    while (choixAction != "4" && coutPanier <= choixBudget) {
      let choixAction = prompt(choixActionFunction());
      if (choixVoiture == "Berline") {
        // Création de la condition !
        if (choixAction == "1") {
          choixOption = prompt(
            choixFunction(
              packSport,
              packMusik,
              packMoteur120,
              packMoteur140,
              choixBudget
            )
          );
  
          if (choixOption == "1") {
            coutPanier = coutPanier + packSport;
            alert(
              "Vous avez choisi le packSport !" +
                packSport +
                " sont ajouté à votre panier"
            );
          } else if (choixOption == "2") {
            coutPanier = coutPanier + packMusik;
            alert("Vous avez choisi le packMusik !");
          } else if (choixOption == "3") {
            coutPanier = coutPanier + packMoteur140;
            alert("Vous avez choisi le Moteur 120 CV !");
          } else if (choixOption == "4") {
            coutPanier = coutPanier + packMoteur140;
            alert("Vous avez choisi le Moteur 140 CV !");
          }
        } else if (choixAction == "2") {
          alert("Arrive bientôt");
        } else if (choixAction == "3") {
          alert(affichagePanierFunction(coutPanier, choixBudget));
        } else {
          if (choixAction == "4") {
            alert("Au revoir");
            return;
          }
          alert("Veuillez choisir");
        }
      } else if (choixVoiture == "Coupé") {
        choixOption = prompt(
          choixFunction(
            packSport,
            packMusik,
            packMoteur120,
            packMoteur140,
            choixBudget
          )
        );
  
        if (choixOption == "1") {
          coutPanier = coutPanier + packSport;
          alert(
            "Vous avez choisi le packSport !" +
              coutPanier +
              " sont ajouté à votre panier"
          );
        } else if (choixOption == "2") {
          coutPanier = coutPanier + packMusik;
          alert("Vous avez choisi le packMusik !");
        } else if (choixOption == "3") {
          coutPanier = coutPanier + packMoteur140;
          alert("Vous avez choisi le Moteur 120 CV !");
        } else if (choixOption == "4") {
          coutPanier = coutPanier + packMoteur140;
          alert("Vous avez choisi le Moteur 140 CV !");
        }
      } else if (choixVoiture == "Break") {
        choixOption = prompt(
          choixFunction(
            packSport,
            packMusik,
            packMoteur120,
            packMoteur140,
            choixBudget
          )
        );
  
        if (choixOption == "1") {
          coutPanier = coutPanier + packSport;
          alert(
            "Vous avez choisi le packSport !" +
              coutPanier +
              " sont ajouté à votre panier"
          );
        } else if (choixOption == "2") {
          coutPanier = coutPanier + packMusik;
          alert("Vous avez choisi le packMusik !");
        } else if (choixOption == "3") {
          coutPanier = coutPanier + packMoteur140;
          alert("Vous avez choisi le Moteur 120 CV !");
        } else if (choixOption == "4") {
          coutPanier = coutPanier + packMoteur140;
          alert("Vous avez choisi le Moteur 140 CV !");
        }
      } else {
        alert("Veuillez choisir le type de véhicule");
      }
    }
    if (coutPanier > choixBudget) {
      alert("Budget dépassé !");
      return;
    }
  }
  
  // Appel de la fonction
  configurateur();
  */
