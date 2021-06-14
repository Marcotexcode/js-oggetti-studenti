

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.




// CREARE OGGETTO STUDENTE CON PROPRIETA

var studente = {
    
    nome: 'Marco',
    cognome: 'Tessitore',
    eta: '31',

};


//STAMPARE A SCHERMO TUTTE LE PROPRIETA

for (var k in studente) {
    console.log(k + ': ' + studente[k]);
}

