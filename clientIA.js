let budget_client = 20000; 
let prix_cahier = 1500;
let quantite_cahiers = 4;
let prix_stylo = 500;
let quantite_stylo = 3;

let montant_cahiers = prix_cahier * quantite_cahier;
let montant_stylos = prix_stylo * quantite_stylo;
let total = montant_cahiers + montant_stylo;


console.log("=====CAISSE =====");
console.log("Cahiers : ", montant_cahiers, "FCFA");
console.log("Stylo : ", montant_stylos, "FCFA");
console.log("Total : ", total, "FCFA");
console.log("Budget : ", budget_client, "FCFA");


if ( total <= budget) {
    console.log( "Budget suffisant");

} else {
    console.log("Budget insuffisant");
}
 console.log ("");


 for (let i = 1; i <= 5; i++); {
    console.log ("Achat numéro ", i);
}