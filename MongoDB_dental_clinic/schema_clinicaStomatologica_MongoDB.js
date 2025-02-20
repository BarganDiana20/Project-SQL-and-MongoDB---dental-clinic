//===============================================================================
//               Case study:  clinica_stomatologica in MongoDB
//	  Part 1: Map the relational schema (create the database collections)
//===============================================================================

show collections

//==================================================================================
//   (1) collection "pacienti_istoricMed_consultatii" inglobeaza 3 tabele relationale:
//      - "pacienti"
//		- "istoricmedical"(vector)
//		- "consultatii" (vector)
//==================================================================================

db.pacienti_istoricMed_consultatii.remove({}) 
//pacient 1
db.pacienti_istoricMed_consultatii.insertOne({ _id: 1, 
   nume: 'Popescu', prenume: 'Ana',
   CNP: '2901505228010', data_nasterii: '1990-05-15',
   adresa: 'Str. Florilor nr.10, Iasi',
   telefon: '0721232387',
   istoric_medical: [
            { id_istoric: 1,
              detalii: 'Abces dentar in trecut. Nicio interventie chirurgicala anterioara'}],
   consultatii: [
            { id_consultatie: 1, 
              id_programare : 1,
              diagnostic: 'Abces dentar'}] });
//pacient 2
db.pacienti_istoricMed_consultatii.insertOne({ _id: 2, 
   nume: 'Georgescu', prenume: 'Mihai',
   CNP: '2880318229754', data_nasterii: '1988-03-18',
   adresa: 'Str. Mihai Viteazul nr.30, Iasi',
   telefon: '0787455632',
   istoric_medical: [
            { id_istoric: 3,
              detalii: 'Gingivita in trecut. Nicio interventie chirurgicala anterioara'}],
   consultatii: [
            { id_consultatie: 3, 
              id_programare : 3,
              diagnostic: 'Gingivita'}] });
//pacient 3
db.pacienti_istoricMed_consultatii.insertOne({ _id: 3, 
   nume: 'Ionescu', prenume: 'Ion',
   CNP: '1920608229800', data_nasterii: '1992-06-08',
   adresa: 'Str. Musatini nr.25, Iasi',
   telefon: '0721232388',
   istoric_medical: [
            { id_istoric: 2,
              detalii: 'Tratament ortodontic anterior'}],
   consultatii: [
            { id_consultatie: 2, 
              id_programare : 2,
              diagnostic: 'Carie dentara avansata'}] });
//pacient 4
db.pacienti_istoricMed_consultatii.insertOne({ _id: 4, 
   nume: 'Ungureanu', prenume: 'Maria',
   CNP: '6090712228173', data_nasterii: '2009-07-12',
   adresa: 'Str. Tabacului nr.13, Iasi',
   telefon: '0787455639',
   istoric_medical: [
            { id_istoric: 4,
              detalii: 'Nicio interventie chirurgicala anterioara'}],
   consultatii: [
            { id_consultatie: 4, 
              id_programare : 4,
              diagnostic: 'Necesita aparat dentar'}] });
//pacient 5
db.pacienti_istoricMed_consultatii.insertOne({ _id: 5, 
   nume: 'Popa', prenume: 'Constantin',
   CNP: '1234567890123', data_nasterii: '1990-05-15',
   adresa: 'Str. Primaverii nr. 10, Bucuresti',
   telefon: '0721123456',
   istoric_medical: [
            { id_istoric: 5,
              detalii: 'Tratament carie dentara'}],
   consultatii: [
            { id_consultatie: 5, 
              id_programare : 9,
              diagnostic: 'Carie dentara'}] });
//pacient 6
db.pacienti_istoricMed_consultatii.insertOne({ _id: 6, 
   nume: 'Ionescu', prenume: 'Vasile',
   CNP: '2345678901234', data_nasterii: '1985-10-20',
   adresa: 'Str. Mihai Eminescu nr. 5, Cluj-Napoca',
   telefon: '0732456789',
   istoric_medical: [
            { id_istoric: 6,
              detalii: 'Consultatie ortodontica'}],
   consultatii: [
            { id_consultatie: 6, 
              id_programare : 11,
              diagnostic: 'Malocluzie'}] });
//pacient 7
db.pacienti_istoricMed_consultatii.insertOne({ _id: 7, 
   nume: 'Radu', prenume: 'Maria',
   CNP: '3456789012345', data_nasterii: '1978-03-07',
   adresa: 'Bd. Independentei nr. 30, Timisoara',
   telefon: '0765123456',
   istoric_medical: [
            { id_istoric: 7,
              detalii: 'Extractie dentara'}],
   consultatii: [
            { id_consultatie: 7, 
              id_programare : 13,
              diagnostic: 'Extractie dentara'}] });
//pacient 8
db.pacienti_istoricMed_consultatii.insertOne({ _id: 8, 
   nume: 'Dumitrescu', prenume: 'Andrei',
   CNP: '4567890123456', data_nasterii: '1995-12-28',
   adresa: 'Str. Libertatii nr. 15, Iasi',
   telefon: '0740567890',
   istoric_medical: [
            { id_istoric: 8,
              detalii: 'Tratament endodontic'}],
   consultatii: [
            { id_consultatie: 8, 
              id_programare : 15,
              diagnostic: 'Infectie pulpara'}] });
//pacient 9
db.pacienti_istoricMed_consultatii.insertOne({ _id: 9, 
   nume: 'Georgescu', prenume: 'Elena',
   CNP: '5678901234567', data_nasterii: '1980-08-03',
   adresa: 'Bd. Unirii nr. 25, Constanta',
   telefon: '0711345678',
   istoric_medical: [
            { id_istoric: 9,
              detalii: 'Consultatie stomatologica'}],
   consultatii: [
            { id_consultatie: 9, 
              id_programare : 17,
              diagnostic: 'Igiena dentara'}] });
//pacient 10
db.pacienti_istoricMed_consultatii.insertOne({ _id: 10, 
   nume: 'Ionescu', prenume: 'Mihai',
   CNP: '1900101201234', data_nasterii: '1990-01-01',
   adresa: 'Str. Mihai Viteazu nr. 5, Iasi',
   telefon: '0721123256',
   istoric_medical: [
            { id_istoric: 10,
              detalii: 'Malocluzie'}],
   consultatii: [
            { id_consultatie: 10, 
              id_programare : 19,
              diagnostic: 'Carie dentara'}] });
//pacient 11
db.pacienti_istoricMed_consultatii.insertOne({ _id: 11, 
   nume: 'Popa', prenume: 'Maria',
   CNP: '2920402356789', data_nasterii: '1992-04-02',
   adresa: 'Str. Crinilor nr. 7, Iasi',
   telefon: '0721987654',
   istoric_medical: [
            { id_istoric: 11,
              detalii: 'Dertartraj'}],
   consultatii: [
            { id_consultatie: 11, 
              id_programare : 21,
              diagnostic: 'Necesita aparat dentar'}] });
//pacient 12
db.pacienti_istoricMed_consultatii.insertOne({ _id: 12, 
   nume: 'Radu', prenume: 'Alexandru',
   CNP: '1881103123456', data_nasterii: '1988-11-03',
   adresa: 'Str. Libertății nr. 3, Iasi',
   telefon: '0721543210',
   istoric_medical: [
            { id_istoric: 12,
              detalii: 'Curatare dentara'}],
   consultatii: [
            { id_consultatie: 12, 
              id_programare : 23,
              diagnostic: 'Necesita detartraj inainte de inainte de instalarea unui aparat dentar'}] });
//pacient 13
db.pacienti_istoricMed_consultatii.insertOne({ _id: 13, 
   nume: 'Dragomir', prenume: 'Elena',
   CNP: '2704091234568', data_nasterii: '1970-04-09',
   adresa: 'Str. Lalelelor nr. 12, Iasi'',
   telefon: '0721876543',
   istoric_medical: [
            { id_istoric: 13,
              detalii: 'Carii profunde'}],
   consultatii: [
            { id_consultatie: 13, 
              id_programare : 25,
              diagnostic: 'Necesita extragerea nervului '}] });

//create index
db.pacienti_istoricMed_consultatii.createIndex({ nume: 1, prenume: 1 });
db.pacienti_istoricMed_consultatii.createIndex({ CNP: 1 },{unique: false}); 
//initial am avut CNP cu indexul unic insa nu puteam sa fac impartirea pe sharding din cauza acestuia. 
db.pacienti_istoricMed_consultatii.createIndex({"consultatii.diagnostic": 1 });
db.pacienti_istoricMed_consultatii.createIndex({ telefon: 1 }, {unique: false}) ;

db.pacienti_istoricMed_consultatii.find().pretty() ;

//==================================================================================
//     (2) collection "medici_programari"  inglobeaza 2 tabele relationale:
//      - "medici"
//		- "programari" (vector)
//==================================================================================

db.medici_programari.remove({})
//Medic1
db.medici_programari.insertOne({ 
   _id: 1, nume: 'Axinte', prenume: 'Alina',
   specializare: 'Stomatologie generala',
   telefon : '0744317914',
   programari: [
             { id_programare: 3, id_pacient: 2,
               data_programare: new Date("2024-03-21"),
               ora_programare: '11:00',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 7, id_pacient: 2,
               data_programare: new Date("2024-03-25"),
               ora_programare: '10:00',
               tip_tratament: 'Detartraj dentar'
            },
            {  id_programare: 9, id_pacient: 5,
               data_programare: new Date("2024-03-21"),
               ora_programare: '10:00',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 10, id_pacient: 5,
               data_programare: new Date("2024-03-22"),
               ora_programare: '11:00',
               tip_tratament: 'Tratament carie dentara'
            },
            { id_programare: 17, id_pacient: 9,
              data_programare: new Date("2024-03-17"),
              ora_programare: '11:00',
              tip_tratament: 'Consultatie'
            },
            { id_programare: 18, id_pacient: 9,
              data_programare: new Date("2024-03-18"),
              ora_programare: '12:00',
              tip_tratament: 'Tratament de igienizare'
            },
            { id_programare: 19, id_pacient: 10,
              data_programare: new Date("2024-03-22"),
              ora_programare: '13:00',
              tip_tratament: 'Consultatie'
            },
            { id_programare: 20, id_pacient: 10,
              data_programare: new Date("2024-03-24"),
              ora_programare: '10:00',
              tip_tratament: 'Tratare carie'
            }
       ]});
//Medic2
db.medici_programari.insertOne({ 
   _id: 2, nume: 'Tvigun', prenume: 'Leia',
   specializare: 'Ortodont',
   telefon : '0740096510',
   programari: [
             { id_programare: 4, id_pacient: 4,
               data_programare: new Date("2024-03-21"),
               ora_programare: '11:30',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 8, id_pacient: 4,
               data_programare: new Date("2024-03-25"),
               ora_programare: '11:00',
               tip_tratament: 'Instalare aparat dentar'
            },
            {  id_programare: 11, id_pacient: 6,
               data_programare: new Date("2024-03-20"),
               ora_programare: '09:00',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 12, id_pacient: 6,
               data_programare: new Date("2024-03-21"),
               ora_programare: '10:00',
               tip_tratament: 'Tratament ortodontic'
            },
            { id_programare: 21, id_pacient: 11,
              data_programare: new Date("2024-03-23"),
              ora_programare: '10:30',
              tip_tratament: 'Consultatie'
            },
            { id_programare: 22, id_pacient: 11,
              data_programare: new Date("2024-03-26"),
              ora_programare: '14:00',
              tip_tratament: 'Instalare aparat dentar'
            }
       ]});
       
//Medic 3
db.medici_programari.insertOne({ 
   _id: 3, nume: 'Morari', prenume: 'Alexandru',
   specializare: 'Chirurgie dento-alveolara',
   telefon : '0748280986',
   programari: [
             { id_programare: 1, id_pacient: 1,
               data_programare: new Date("2024-03-21"),
               ora_programare: '10:00',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 5, id_pacient: 1,
               data_programare: new Date("2024-03-22"),
               ora_programare: '11:00',
               tip_tratament: 'Extractie dentara'
            },
            {  id_programare: 13, id_pacient: 7,
               data_programare: new Date("2024-03-19"),
               ora_programare: '08:30',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 14, id_pacient: 7,
               data_programare: new Date("2024-03-20"),
               ora_programare: '09:00',
               tip_tratament: 'Extractie dentara'
            },
            { id_programare: 23, id_pacient: 12,
              data_programare: new Date("2024-03-23"),
              ora_programare: '09:00',
              tip_tratament: 'Consultatie'
            },
            { id_programare: 24, id_pacient: 12,
              data_programare: new Date("2024-03-25"),
              ora_programare: '11:30',
              tip_tratament: 'Dertartraj'
            }
       ]});
       
//Medic 4
db.medici_programari.insertOne({ 
   _id: 4, nume: 'Arion', prenume: 'Andreea-Claudia',
   specializare: 'Endodontist',
   telefon : '0742635146',
   programari: [
             { id_programare: 2, id_pacient: 3,
               data_programare: new Date("2024-03-21"),
               ora_programare: '10:30',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 6, id_pacient: 3,
               data_programare: new Date("2024-03-22"),
               ora_programare: '12:30',
               tip_tratament: 'Tratament canal'
            },
            {  id_programare: 15, id_pacient: 8,
               data_programare: new Date("2024-03-18"),
               ora_programare: '08:30',
               tip_tratament: 'Consultatie'
            },
            {  id_programare: 16, id_pacient: 8,
               data_programare: new Date("2024-03-19"),
               ora_programare: '09:30',
               tip_tratament: 'Tratament endodontic'
            },
            { id_programare: 25, id_pacient: 13,
              data_programare: new Date("2024-03-23"),
              ora_programare: '11:30',
              tip_tratament: 'Consultatie'
            },
            { id_programare: 26, id_pacient: 13,
              data_programare: new Date("2024-03-25"),
              ora_programare: '13:30',
              tip_tratament: 'Extragerea nervului'
            }
       ]});
       
//create indexes
db.medici_programari.createIndex({ nume: 1, prenume: 1 });
db.medici_programari.createIndex({ specializare: 1 });
db.medici_programari.createIndex({ telefon: 1 }, { unique: false }); //la fel si aici am eliminat ca indexul sa fie true
db.medici_programari.createIndex({ "programari.data_programare": 1, "programari.ora_programare": 1 }); //acest index este util 
//pentru cautarile care implica filtrarea sau sortarea programarilor medicilor in functie de data si ora.

db.medici_programari.find().pretty() ;

//==================================================================================
//   (3) collection "tratamente" is equivalent to relational table "tratamente"
//==================================================================================

db.tratamente.remove({})
// Tratamente pentru specializarea "Stomatologie generala"
db.tratamente.insertMany([
{ _id: 1001, specializare: 'Stomatologie generala', descriere: 'Detartraj dentar', cost: 150},
{ _id: 1002, specializare: 'Stomatologie generala', descriere: 'Curatare dentara profesionala', cost: 80},
{ _id: 1003, specializare: 'Stomatologie generala', descriere: 'Plombare cu material compozit', cost: 150},
{ _id: 1004, specializare: 'Stomatologie generala', descriere: 'Extractie dentara simpla', cost: 200}]);

// Tratamente pentru specializarea "Ortodont"
db.tratamente.insertMany([
{ _id: 2001, specializare: 'Ortodont', descriere: 'Instalare aparat dentar pe ambele arcade', cost: 3000},
{ _id: 2002, specializare: 'Ortodont', descriere: 'Instalare aparat dentar fix pe o singura arcada', cost: 1500},
{ _id: 2003, specializare: 'Ortodont', descriere: 'Consultatie ortodontica', cost: 100},
{ _id: 2004, specializare: 'Ortodont', descriere: 'Tratament ortodontic', cost: 800}]);

// Tratamente pentru specializarea "Chirurgie dento-alveolara"
db.tratamente.insertMany([
{ _id: 3001, specializare: 'Chirurgie dento-alveolara', descriere: 'Extractie molar de minte', cost: 300},
{ _id: 3002, specializare: 'Chirurgie dento-alveolara', descriere: 'Extractie dentara complicata', cost: 250},
{ _id: 3003, specializare: 'Chirurgie dento-alveolara', descriere: 'Chirurgie parodontala', cost: 300},
{ _id: 3004, specializare: 'Chirurgie dento-alveolara', descriere: 'Implant dentar', cost: 1500}]);

// Tratamente pentru specializarea "Endodont"
db.tratamente.insertMany([
{ _id: 4001, specializare: 'Endodontist', descriere: 'Tratament endodontic dinte monoradicular(include obturatia de canal)', cost: 850},
{ _id: 4002, specializare: 'Endodontist', descriere: 'Tratament endodontic', cost: 200},
{ _id: 4003, specializare: 'Endodontist', descriere: 'Apicectomie', cost: 300}]);

//create indexes
db.tratamente.createIndex({ _id : 1}) ;
db.tratamente.createIndex({ specializare: 1 });
db.tratamente.createIndex({ descriere: 1 });

db.tratamente.find().pretty() ;

//==================================================================================
//    (4) collection "facturi_plati" maps two relational tables: 
//      - "facturi"
//		- "plati"
// Aceasta colectie combina informatiile despre facturi si plati intr-un singur 
// document pentru fiecare tranzactie cu referinte la pacient si plata. Documentul include 
// un vector de documente pentru plati, astfel incat sa putem accesa toate detaliile
// despre incasarea facturii intr-un singur document.
//==================================================================================

//Facturile 101,101 pentru pacient 1
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '2901505228010'}) ; //caut pacientul 1 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 100, data_emitere: new ISODate("2024-03-21T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24100", suma: 50, 
        data_plata: new ISODate("2024-03-21T11:00:00Z")}
      ]},
  { _id: 101, data_emitere: new ISODate("2024-03-22T11:00:00Z"), id_pacient: myPacient._id, total_factura: 300,
     plati: [
      { id_plata: "24101", suma: 300, 
        data_plata: new ISODate("2024-03-22T11:00:00Z")}
      ]}  
]);
//Facturile 102,103 pentru pacient 3
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '1920608229800'}) ; //caut pacientul 3 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 102, data_emitere: new ISODate("2024-03-21T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24102", suma: 50, 
        data_plata: new ISODate("2024-03-21T11:00:00Z")}
      ]},
  { _id: 103, data_emitere: new ISODate("2024-03-22T11:00:00Z"), id_pacient: myPacient._id, total_factura: 850,
     plati: [
      { id_plata: "24103", suma: 850, 
        data_plata: new ISODate("2024-03-22T11:00:00Z")}
      ]}  
]);

//Facturile 104,105 pentru pacient 2
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '2880318229754'}) ; //caut pacientul 2 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 104, data_emitere: new ISODate("2024-03-21T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24104", suma: 50, 
        data_plata: new ISODate("2024-03-21T11:00:00Z")}
      ]},
  { _id: 105, data_emitere: new ISODate("2024-03-25T11:00:00Z"), id_pacient: myPacient._id, total_factura: 150,
     plati: [
      { id_plata: "24105", suma:  150, 
        data_plata: new ISODate("2024-03-25T11:00:00Z")}
      ]}  
]);
//Facturile 106,107 pentru pacient 4
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '6090712228173'}) ; //caut pacientul 4 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 106, data_emitere: new ISODate("2024-03-21T11:00:00Z"), id_pacient: myPacient._id, total_factura: 100,
     plati: [
      { id_plata: "24106", suma: 100, 
        data_plata: new ISODate("2024-03-21T11:00:00Z")}
      ]},
  { _id: 107, data_emitere: new ISODate("2024-03-25T11:00:00Z"), id_pacient: myPacient._id, total_factura: 2500,
     plati: [
      { id_plata: "24107", suma:  2500, 
        data_plata: new ISODate("2024-03-25T11:00:00Z")}
      ]}  
]);
//Facturile 108,109 pentru pacient 5
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '1234567890123'}) ; //caut pacientul 5 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 108, data_emitere: new ISODate("2024-03-21T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24108", suma: 50, 
        data_plata: new ISODate("2024-03-21T11:00:00Z")}
      ]},
  { _id: 109, data_emitere: new ISODate("2024-03-22T11:00:00Z"), id_pacient: myPacient._id, total_factura: 150,
     plati: [
      { id_plata: "24109", suma:  150, 
        data_plata: new ISODate("2024-03-22T11:00:00Z")}
      ]}  
]);
//Facturile 110,111 pentru pacient 6
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '2345678901234'}) ; //caut pacientul 6 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 110, data_emitere: new ISODate("2024-03-20T11:00:00Z"), id_pacient: myPacient._id, total_factura: 100,
     plati: [
      { id_plata: "24110", suma: 100, 
        data_plata: new ISODate("2024-03-20T11:00:00Z")}
      ]},
  { _id: 111, data_emitere: new ISODate("2024-03-21T11:00:00Z"), id_pacient: myPacient._id, total_factura: 1500,
     plati: [
      { id_plata: "24111", suma:  750, 
        data_plata: new ISODate("2024-03-22T11:00:00Z")}
      ]}  
]);
//Facturile 112,113 pentru pacient 7
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '3456789012345'}) ; //caut pacientul 7 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 112, data_emitere: new ISODate("2024-03-19T11:00:00Z"), id_pacient: myPacient._id, total_factura: 60,
     plati: [
      { id_plata: "24112", suma: 60, 
        data_plata: new ISODate("2024-03-19T11:00:00Z")}
      ]},
  { _id: 113, data_emitere: new ISODate("2024-03-20T11:00:00Z"), id_pacient: myPacient._id, total_factura: 250,
     plati: [
      { id_plata: "24113", suma:  150, 
        data_plata: new ISODate("2024-03-21T11:00:00Z")}
      ]}  
]);
//Facturile 114,115 pentru pacient 8
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '4567890123456'}) ; //caut pacientul 8 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 114, data_emitere: new ISODate("2024-03-18T11:00:00Z"), id_pacient: myPacient._id, total_factura: 60,
     plati: [
      { id_plata: "24114", suma: 60, 
        data_plata: new ISODate("2024-03-18T11:00:00Z")}
      ]},
  { _id: 115, data_emitere: new ISODate("2024-03-19T11:00:00Z"), id_pacient: myPacient._id, total_factura: 300,
     plati: [
      { id_plata: "24115", suma:  300, 
        data_plata: new ISODate("2024-03-20T11:00:00Z")}
      ]}  
]);
//Facturile 116,117 pentru pacient 9
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '5678901234567'}) ; //caut pacientul 9 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 116, data_emitere: new ISODate("2024-03-17T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24116", suma: 50, 
        data_plata: new ISODate("2024-03-17T11:00:00Z")}
      ]},
  { _id: 117, data_emitere: new ISODate("2024-03-18T11:00:00Z"), id_pacient: myPacient._id, total_factura: 80,
     plati: [
      { id_plata: "24117", suma:  80, 
        data_plata: new ISODate("2024-03-18T11:00:00Z")}
      ]}  
]);
//Facturile 118,119 pentru pacient 10
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '1900101201234'}) ; //caut pacientul 10 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 118, data_emitere: new ISODate("2024-03-22T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24118", suma: 50, 
        data_plata: new ISODate("2024-03-22T11:00:00Z")}
      ]},
  { _id: 119, data_emitere: new ISODate("2024-03-24T11:00:00Z"), id_pacient: myPacient._id, total_factura: 150,
     plati: [
      { id_plata: "24119", suma:  150, 
        data_plata: new ISODate("2024-03-24T11:00:00Z")}
      ]}  
]);
//Facturile 120,121 pentru pacient 11
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '2920402356789'}) ; //caut pacientul 11 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 120, data_emitere: new ISODate("2024-03-23T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24120", suma: 50, 
        data_plata: new ISODate("2024-03-23T11:00:00Z")}
      ]},
  { _id: 121, data_emitere: new ISODate("2024-03-26T11:00:00Z"), id_pacient: myPacient._id, total_factura: 3000,
     plati: [
      { id_plata: "24121", suma:  1500, 
        data_plata: new ISODate("2024-03-26T11:00:00Z")}
      ]}  
]);
//Facturile 122,123 pentru pacient 12
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '1881103123456'}) ; //caut pacientul 12 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 122, data_emitere: new ISODate("2024-03-23T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24122", suma: 50, 
        data_plata: new ISODate("2024-03-23T11:00:00Z")}
      ]},
  { _id: 123, data_emitere: new ISODate("2024-03-25T11:00:00Z"), id_pacient: myPacient._id, total_factura: 150,
     plati: [
      { id_plata: "24123", suma:  150, 
        data_plata: new ISODate("2024-03-25T11:00:00Z")}
      ]}  
]);
//Facturile 124,125 pentru pacient 13
var myPacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '2704091234568'}) ; //caut pacientul 13 dupa CNP.
db.facturi_plati.insertMany([
  { _id: 124, data_emitere: new ISODate("2024-03-23T11:00:00Z"), id_pacient: myPacient._id, total_factura: 50,
     plati: [
      { id_plata: "24124", suma: 50, 
        data_plata: new ISODate("2024-03-23T11:00:00Z")}
      ]},
  { _id: 125, data_emitere: new ISODate("2024-03-26T11:00:00Z"), id_pacient: myPacient._id, total_factura: 200,
     plati: [
      { id_plata: "24125", suma:  200, 
        data_plata: new ISODate("2024-03-26T11:00:00Z")}
      ]}  
]);
db.facturi_plati.createIndex({_id : 1}) ;
db.facturi_plati.createIndex({data_emitere: 1}, {unique: false}) ;
db.facturi_plati.createIndex({data_plata: 1}, {unique: false}) ; 

db.facturi_plati.find().pretty() ;



