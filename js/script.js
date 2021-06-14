

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

    //console.log(k + ': ' + studente[k]);

}


//CREARE UN ARRAY DI OGGETTI DI STUDENTI

var studenti = [
    {
        nome: 'Marco',
        cognome: 'Tessitore',
        eta: '31',
    },

    {
        nome: 'Giovanni',
        cognome: 'Rossi',
        eta: '21',
    },

    {
        nome: 'Aldo',
        cognome: 'Neri',
        eta: '45',
    }

];






// CICLARE TUTTI GLI STUDENTI E STAMPARE PER OGIUNO DI ESSI NOME E COGNOME

for (var i = 0; i < studenti.length; i++) {

   // console.log('Nome: ' + studenti[i].nome);
   // console.log('Cognome: ' +  studenti[i].cognome);

}

// DARE LA POSSIBILITA ALL UTENTE DI INSERIRE CON TRE PROMPT DI AGGIUNGERE NOME COGNOME ETA DENTRO L'OGGETTO STUDENTE

var nome = prompt('Inserisci il nome: ');
var cognome = prompt('Inserisci il cognome: ');
var eta = parseInt(prompt('Inserisci l eta'));


var nuovoStudente = {
    nome: nome,
    cognome: cognome, 
    eta: eta
};
 

studenti.push(nuovoStudente);


for(var i = 0; i < studenti.length; i++) {
    for( var k in studenti[i]) {
       // console.log(k + ': ' + studente[k]);
    }
}