/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

// salvo la variabile in un bottone 
const bottone = document.getElementById ('bottone');
console.log('bottone');

//creo l'evento per il bottone con il click
bottone.addEventListener('click', function (){

    //creo la variabile
    let userMail = document.getElementById('mail').value;

    const userInvitati = [
        "andra.salas@gmail.com",
        "vittoria.neroni@gmail.com",
        "enrico.capari@gmail.com",
        "juliana.ottoni@gmail.com"
    ]
    //inizio il ciclo
    for ( let i = 0; i< userInvitati.length; i++) {
        console.log(userInvitati[i]);
        
    }

})


















/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/
