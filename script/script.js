/*
il prezzo del biglietto è definito in base ai km (0.21 € al km),

va applicato uno sconto del 20% per i minorenni,

va applicato uno sconto del 40% per gli over 65.,

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
 per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// prezzo è fisso mentre i km possono variare. 
const prezzo = 0.21;

// facciamo scrivere utente quanti km. gli diciamo tipo number.
let km = Number(prompt("quanti km deve fare?"));

// chiediamo età
let età = Number(prompt("inserire età"));

// biglietto sarà in base al prezzo e km che si faranno.
let biglietto = prezzo * km; 

// applicare sconto del 20% o 40% a seconda dell'età.

if (età < 18) {
    biglietto = (prezzo * km) * 0.8;
    console.log("sconto per minore applicato");
    
} else if (età >= 65) { 
    biglietto = (prezzo * km) * 0.6;
    console.log("sconto over 65 applicato");
    
} else {
    console.log("nessuno sconto applicato");
    
}

// tofixed per dare numeri decimali dopo la virgola in questo caso 2.
let prezzo_finale = biglietto.toFixed(2);

// option + e simbolo euro
console.log("Il prezzo del tuo biglietto è: " + prezzo_finale + " €");