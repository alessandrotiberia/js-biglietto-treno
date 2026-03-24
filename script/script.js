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
//parsefloat perchè possono esserci valori come 1.5 ad esempio
let km = parseFloat(prompt("quanti km deve fare?"));

// chiediamo età
// parseint perchè accettiamo solo valori interi
let età = parseInt(prompt("inserire età"));



//integrità dei dati e coerenza dei dati.
if (isNaN(età)) {
    console.error("non hai inserito numero");

} else {

    if (età < 0) {
        console.error('Eta\' non corretta');

    } else {    

        if (km <= 0) {
            console.error('Km non corretti');

        } else {

            console.log("numero inserito correttamente");
            // biglietto sarà in base al prezzo e km che si faranno.
            let biglietto = prezzo * km;

            // applicare sconto del 20% o 40% a seconda dell'età.

            if (età < 18) {
                biglietto = biglietto * 0.8;
                console.log("sconto per minore applicato");

            } else if (età >= 65) {
                biglietto = biglietto * 0.6;
                console.log("sconto over 65 applicato");

            } else {
                console.log("nessuno sconto applicato");

            }

            // tofixed per dare numeri decimali dopo la virgola in questo caso 2.
            let prezzo_finale = biglietto.toFixed(2);

            // option + e simbolo euro
            console.log("Il prezzo del tuo biglietto è: " + prezzo_finale + " €");
        }
    }

}

