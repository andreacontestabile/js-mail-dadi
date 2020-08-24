// 1. Tiro un dado per il computer - Genero un valore tra 1 a 6 e lo assegno ad una variabile
dadoCPU = Math.floor(Math.random() * 6) + 1;

// 2. Tiro un dado per l'utente - Genero un altro valore tra 1 e 6 e lo assegno ad un'altra variabile
dadoUtente = Math.floor(Math.random() * 6) + 1;

// Stampo in console il valore dei due dadi
console.log("Il computer tira un dado. E' uscito un... " + dadoCPU + "!")
console.log("L'utente tira un dado. E' uscito un... " + dadoUtente + "!")

// 3. Confronto i due valori. Vince chi ottiene il valore maggiore. Stampo un messaggio per ognuna delle situazioni possibili.
if (dadoCPU > dadoUtente) {
  console.log("Mi dispiace, il computer ha vinto...");
} else if (dadoUtente > dadoCPU) {
  console.log("Congratulazioni! Hai vinto!");
} else {
  console.log("E' un pareggio!")
}
