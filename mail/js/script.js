// 1. Chiedo all'utente il suo indirizzo email (e salvo il risultato in una variabile)
var userEmail = prompt("Inserisci il tuo indirizzo email");
// 2. Controllo che l'indirizzo sia nella lista di quelli autorizzati
  // 2.1. Creo un array contenente gli indirizzi autorizzati
var listaEmail = ["andrea@gmail.com", "luca@gmail.com", "paola@gmail.com", "sara@gmail.com", "gianni@gmail.com", "valeria@gmail.com", "claudio@gmail.com"];
  // 2.2. Tengo traccia di una variabile per verificare le presenza dell'indirizzo nell'array
var emailAutorizzata = false;
for (var i = 0; i < listaEmail.length; i++) {
  if (userEmail == listaEmail[i]) {
// 3. Stampo un messaggio in base all'esito del controllo
    emailAutorizzata = 1;
    console.log("L'indirizzo è autorizzato ad accedere. Benvenuto!")
  }
}

if (emailAutorizzata == false) {
  console.log("Purtroppo l'indirizzo non è autorizzato. Riprova con un altro indirizzo.");
}
