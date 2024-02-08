function convertEuroToYen() {
    const euroAmount = document.getElementById("euroAmount").value; // récupère la valeur du champs saisie par l'utilisateur en euro
    const exchangeRate = 158.63; //taux de change Euro en Yen

    const yenAmount = euroAmount * exchangeRate; // ligne de calcul 
    const resultElement = document.getElementById("result"); // récupere l'élèment HTML avec l'id result ou le resulat de la conversion sera affiché
    resultElement.innerHTML = `${euroAmount} Euro équivaut à ${yenAmount.toFixed(2)} Yen`; // Met a jour le contenu du html result avec du texte indiquand le montant en euro et son équivalent en yens avec 2 décimales 
}
// Date de départ au Japon (17 juin 2024 à 00:00:00)
const departureDate = new Date("2024-06-17T00:00:00").getTime();// Cela crée un objet Date représentant la date de départ au Japon et obtient le timestamp correspondant.

// Met à jour le compte à rebours toutes les secondes
const countdownElement = document.getElementById("countdown"); // Cela récupère l'élément HTML avec l'ID "countdown", où le compte à rebours sera affiché.

// Cela crée une fonction qui sera exécutée toutes les 1000 millisecondes (1 seconde). Elle met à jour le compte à rebours en calculant le temps restant jusqu'à la date de départ.
setInterval(function() {
    const now = new Date().getTime(); // Cela obtient le timestamp actuel.
    const distance = departureDate - now; // Cela calcule la différence entre la date de départ et le temps actuel pour obtenir le temps restant.

    if (distance > 0) { // Si le temps restant est positif, il calcule le nombre de jours, heures, minutes et secondes restants, puis met à jour le contenu de l'élément "countdown" avec cette information.
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
    } else { // Si le temps restant est inférieur ou égal à zéro, cela signifie que le voyage a commencé, et le texte "Voyage !" est affiché à la place du compte à rebours.


        countdownElement.innerHTML = "Voyage !";
    }
}, 1000);
// fin du code 