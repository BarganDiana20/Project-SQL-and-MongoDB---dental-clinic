
/*1. Display all the appointments that took place between 10:00 and 13:30 on 22.03.2024 
(selecting the name of the patients, the doctor with whom they have an appointment, the time and the type of appointment.)
*/

db.medici_programari.aggregate([
   {$unwind:"$programari" }, 
   {$match:{"programari.data_programare": ISODate("2024-03-22"),
           "programari.ora_programare": { $gte: "10:00", $lte: "13:30" }}},
   {$lookup: 
       {from: "pacienti_istoricMed_consultatii",
        localField: "programari.id_pacient",
        foreignField: "_id",
        as: "pacient_info" } },
   {$unwind: "$pacient_info"},
   {$project:{ _id: 0,
        nume_pacient:{ $concat: ["$pacient_info.nume", " ", "$pacient_info.prenume"] },
        nume_medic:{ $concat: ["$nume", " ", "$prenume"] },
        ora_programare: "$programari.ora_programare",
        tip_tratament: "$programari.tip_tratament"
   }}  
])


//2. Which invoices have not been fully paid, and what amount still needs to be collected?
//Sol.1
db.facturi_plati.aggregate([
   {$addFields: { suma_incasata: { $sum: "$plati.suma" }}},   
   {$match: {
        $expr: 
           { $ne: ["$total_factura", "$suma_incasata"]} }},
   {$addFields: { suma_ramasa_de_incasat: 
                    { $subtract: ["$total_factura", "$suma_incasata"]}}},
   {$project: { _id: 1, total_factura : 1,
       suma_ramasa_de_incasat: 1}}              
]);
//a) The total amount of payments is calculated for each invoice.
//b) The documents in the collection are filtered, using an expression to compare the two fields, setting the condition that they are not equal to each other.
//c) The new field suma_ramasa_de_incasat is calculated by subtracting the two fields: total_factura and suma_incasata.


//Sol.2
db.facturi_plati.aggregate([
   {$project: { _id: 1,
         total_factura: 1,
         suma_incasata: { $sum: "$plati.suma" }, //calculez suma totala a platilor
         suma_ramasa_de_incasat: {
            $subtract: ["$total_factura", { $sum: "$plati.suma" }] 
         }}},
   {$match: { suma_ramasa_de_incasat: { $ne: 0 } }}
]);

//The remaining amount to be collected is different from 0. This means that only invoices that have not been fully paid are displayed.

/*3. Which patients were issued invoices on the same day invoice no. 103 was created/issued? */

//Sol1.
db.facturi_plati.aggregate([
   {$match: {_id: 103}},
   {$lookup: {
       from: "facturi_plati",
       let: {factura_emitere: "$data_emitere" },
       pipeline:[{$match: {
                    $expr: { $eq: ["$$factura_emitere", "$data_emitere"]},
                       _id: { $ne: 103 } }}],
          as: "facturi_emitere_aceeasi_zi"
      }},
   {$unwind: "$facturi_emitere_aceeasi_zi"},
   {$lookup: {
         from: "pacienti_istoricMed_consultatii",
         localField: "facturi_emitere_aceeasi_zi.id_pacient",
         foreignField: "_id",
         as: "pacienti_facturati"}},
   {$unwind: "$pacienti_facturati"},
   {$project: { _id: 0,
        nume_pacient: {$concat: 
            ["$pacienti_facturati.nume", " ", "$pacienti_facturati.prenume"]}
        }}
]);

//Sol2 
var factura_103 = db.facturi_plati.findOne({ _id: 103 });
db.facturi_plati.aggregate([
   {$match: { data_emitere: factura_103.data_emitere,
              _id: { $ne: 103 } }}, //exclud factura 103 din rezultate
   {$lookup: {
      from: "pacienti_istoricMed_consultatii",
      localField: "id_pacient",
      foreignField: "_id",
      as: "pacient"}},
   {$unwind: "$pacient"},
   {$project: { _id: "$pacient._id",
       nume_pacient: {$concat: ["$pacient.nume", " ", "$pacient.prenume"]}}}
]);

//4. What is the average price of treatments performed by a doctor based on their specialization?

db.medici_programari.aggregate([
  {$unwind: "$programari" }, 
  {$lookup: { 
      from: "tratamente", 
      localField: "specializare", 
      foreignField: "specializare", 
      as: "tratamente" }},
  {$unwind: "$tratamente" }, 
  {$group: { 
      _id: {nume_medic:
                { $concat: ["$nume", " ", "$prenume"] },
            specializare: "$specializare"}, 
          pret_mediu_tratament: { $avg: "$tratamente.cost" }}}
]);

//I grouped the documents at the end based on name, surname, and specialization.
//Then, I calculated the average price of treatments for each group, considering the "cost" field from the documents in the "tratamente" collection.


//5. Find all consultation appointments (date and time) performed by doctor "Axinte Alina."
db.medici_programari.aggregate([
  {$match: {"nume": "Axinte","prenume": "Alina"}},
  {$unwind: "$programari"} ,
  {$match: { "programari.tip_tratament": "Consultatie"}} ,
  {$project: {_id: 0,"Data programare": "$programari.data_programare","Ora programare": "$programari.ora_programare" } }
])


//6. Display the top 5 treatments with the highest cost and specify the name of the doctor who performs each of these treatments.
db.tratamente.aggregate([
  {$lookup: {
      from: "medici_programari",
      localField: "specializare",
      foreignField: "specializare",
      as: "medic"}} ,
  { $unwind: "$medic"},
  { $sort: { "cost": -1 }},
  {$limit: 5},
  {$project: {
      "_id": 0,
      "id_tratament": 1,
      "descriere": 1,
      "cost": 1,
      "nume": "$medic.nume" ,
      'prenume' : "$medic.prenume"}}
]);
 
//7. What is the total number of consultations where the diagnosis contains the word "Carie dentară"?
db.pacienti_istoricMed_consultatii.aggregate([
  {$unwind: "$consultatii"},
  {$match: {"consultatii.diagnostic": /Carie dentara/} },
  { $count: "consultatii_diagnostic_carie_dentara" }
])
 
 
 //8.    Calculate the weekly invoice revenues.
 //Sol 1 
db.facturi_plati.aggregate([
  { $unwind: "$plati" },
  { $sort: { "data_emitere": 1 } },
  {$group: {   _id: {  $dateFromParts: {  
          isoWeekYear: { $isoWeekYear: "$data_emitere" }, 
          isoWeek: { $isoWeek: "$data_emitere" }
} },
      total_factura: { $sum: "$total_factura" } }  },
  { $sort: { "_id": 1 } }
])

//Sol 2
db.facturi_plati.aggregate([
  { $unwind: "$plati" },
  { $sort: { "data_emitere": 1 } },
  { $group: {
      _id: {
        isoWeekYear: { $isoWeekYear: "$data_emitere" },
        isoWeek: { $isoWeek: "$data_emitere" }},
      total_factura: { $sum: "$total_factura" } }},
  { $sort: { "_id": 1 } },
  { $project: {
      "De la": {$dateFromParts: {
          isoWeekYear: "$_id.isoWeekYear",
          isoWeek: "$_id.isoWeek",
          isoDayOfWeek: 1}},
      "Pana la": {   $dateFromParts: {
          isoWeekYear: "$_id.isoWeekYear",
          isoWeek: "$_id.isoWeek",
          isoDayOfWeek: 7}},
      Incasari_Sapt: "$total_factura" }},
  { $unset: "_id" }
])

//9. Display all patients who had payments between 200 lei and 1000 lei in total. 
db.facturi_plati.aggregate([
  {$unwind: "$plati" },
  { $group: {
      _id: "$id_pacient",
      suma_totala: { $sum: "$plati.suma" } } },
  {$match: {  suma_totala: { $gte: 200, $lte: 1000 } } },
  {$lookup: {
      from: "pacienti_istoricMed_consultatii", // Numele colecției din care vrem să aducem informații suplimentare
      localField: "_id", // Cheia din colecția curentă prin care facem legătura
      foreignField: "_id", // Cheia din colecția externă prin care facem legătura
      as: "detalii_pacient" // Numele sub care să stocăm informațiile aduse din join
    }},
  {$unwind: "$detalii_pacient" } ,
  {$project: {
      _id: 0,
      nume: "$detalii_pacient.nume",
      prenume: "$detalii_pacient.prenume",
      id_pacient: "$_id",
      suma_totala: 1} },
  {$sort: { id_pacient: 1 }}
])

//10. Extract the time scheduled for the Consultation for a specific patient, based on the CNP: 6090712228173.

var pacient = db.pacienti_istoricMed_consultatii.findOne({ CNP: '6090712228173' });
db.medici_programari.aggregate([
  {$match: {"programari.id_pacient": pacient._id,"programari.tip_tratament": "Consultatie"}},
  {$unwind: "$programari"},
  {$match: {"programari.id_pacient": pacient._id,"programari.tip_tratament": "Consultatie"}},
  {$replaceRoot: { newRoot: "$programari" }},
  {$project: {"_id": 0,"ora_programare": 1}}
]);

//11. Extract all the appointments for the patient with the CNP number 2704091234568.
var pacient=db.pacienti_istoricMed_consultatii.findOne({CNP:'2704091234568'});
db.medici_programari.aggregate([
  {$match:{"programari.id_pacient":pacient._id}},
  {$unwind:"$programari"},
  {$match:{"programari.id_pacient":pacient._id}},
  {$replaceRoot:{newRoot:"$programari"}}
]);


//12. Shows the list of appointments between 11:00 a.m. and 12:30 p.m. for all days.
db.medici_programari.aggregate([
  {$unwind:"$programari"},
  {$match:{"programari.ora_programare":{$gte:"11:00",$lte:"12:30"}}},
  {$lookup:{
    from:"pacienti_istoricMed_consultatii",
    localField:"programari.id_pacient",
    foreignField:"_id",
    as:"detalii_pacient"
  }},
  {$unwind:"$detalii_pacient"},
  {$project:{
    _id:0,
    nume_pacient:{$concat:["$detalii_pacient.nume"," ","$detalii_pacient.prenume"]},
    nume_medic:{$concat:["$nume"," ","$prenume"]},
    data_programare:"$programari.data_programare",
    ora_programare:"$programari.ora_programare",
    tip_tratament:"$programari.tip_tratament"
  }},
  {$sort:{data_programare:1}}
]);


//13. Which are the days on which at least 3 invoices were created (issued)?
db.facturi_plati.aggregate([
  {$group:{
    _id:{$dateToString:{format:"%Y-%m-%d",date:"$data_emitere"}},
    total_facturi:{$sum:1}
  }},
  {$match:{total_facturi:{$gte:3}}},
  {$project:{_id:0,ziua:"$_id",total_facturi:1}}
]);
