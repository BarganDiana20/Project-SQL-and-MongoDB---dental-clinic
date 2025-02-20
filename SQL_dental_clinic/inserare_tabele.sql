
--------------------------------------Inserarea inregistrarilor in tabele--------------------------------------------------

INSERT INTO pacienti VALUES(1,'Popescu','Ana','2901505228010','1990-05-15','Str. Florilor nr.10, Iasi','0721232387');
INSERT INTO pacienti VALUES(2,'Georgescu','Mihai','2880318229754','1988-03-18','Str. Mihai Viteazul nr.30, Iasi','0787455632');
INSERT INTO pacienti VALUES(3,'Ionescu','Ion','1920608229800','1992-06-08','Str. Musatini nr.25, Iasi','0721232388');
INSERT INTO pacienti VALUES(4,'Unguranu','Maria','6090712228173','2009-07-12','Str. Tabacului nr.13, Iasi','0787455639');
INSERT INTO pacienti (id_pacient, nume, prenume, CNP, data_nasterii, adresa, telefon) VALUES
(5, 'Popa', 'Constantin', '1234567890123', '1990-05-15', 'Str. Primaverii nr. 10, Bucuresti', '0721123456'),
(6, 'Ionescu', 'Vasile', '2345678901234', '1985-10-20', 'Str. Mihai Eminescu nr. 5, Cluj-Napoca', '0732456789'),
(7, 'Radu', 'Maria', '3456789012345', '1978-03-07', 'Bd. Independentei nr. 30, Timisoara', '0765123456'),
(8, 'Dumitrescu', 'Andrei', '4567890123456', '1995-12-28', 'Str. Libertatii nr. 15, Iasi', '0740567890'),
(9, 'Georgescu', 'Elena', '5678901234567', '1980-08-03', 'Bd. Unirii nr. 25, Constanta', '0711345678');
INSERT INTO pacienti VALUES
(10, 'Ionescu', 'Mihai', '1900101201234', '1990-01-01', 'Str. Mihai Viteazu nr. 5, Iasi', '0721123256'),
(11, 'Popa', 'Maria', '2920402356789', '1992-04-02', 'Str. Crinilor nr. 7, Iasi', '0721987654'),
(12, 'Radu', 'Alexandru', '1881103123456', '1988-11-03', 'Str. Libertății nr. 3, Iasi', '0721543210'),
(13, 'Dragomir', 'Elena', '2704091234568', '1970-04-09', 'Str. Lalelelor nr. 12, Iasi', '0721876543'),
select * from pacienti

--4 medici cu specializari diferite.
INSERT INTO medici VALUES(1,'Axinte','Alina','Stomatologie generala','0744317914');
INSERT INTO medici VALUES(2,'Tvigun','Leia','Ortodont','0740096510');
INSERT INTO medici VALUES(3,'Morari','Alexandru','Chirurgie dento-alveolara','0748280986');
INSERT INTO medici VALUES(4,'Arion','Andreea-Claudia','Endodontist','0742635146');
select * from medici;
/* Descriere specializari:
1.Medicul cu specializarea "Stomatologie dentara" este cel care examinează cavitatea orala
la prima vizita sau la vizitele periodice. El trateaza carii, albiri dentare, coroane, gingivita,
parodontita, detartraj.
2.Medicul cu specializarea "Ortodont" se ocupa exclusiv de corectarea dintilor nealiniati si de
problemele de crestere si dezvoltare ale maxilarelor. 
3.Medicul cu specializarea "Chirurgia dento-alveolara" se ocupa cu rezolvarea unor probleme complicate
ce au ca punct de plecare sistemul dento-maxilar: granuloame apicale, chisturi maxilare, extractia
molarii de minte inclusi, caninii inclusi, extractii dentare dificile, etc.
4.Medicul  cu specializare "Endodont" se ocupa cu tratamentul sau retratamentul canalelor dentare. Aceste canale 
contin nervi si vase de sange, iar îmbolnăvirea acestora necesită tratament endodontic pentru a salva dintele.
Este cunoscut sub denumirea de scoaterea nervului.
*/

INSERT INTO programari VALUES(1, 1, 3, '2024-03-21', '10:00', 'Consultatie'); --prog.consultatie pacient1
INSERT INTO programari VALUES(2, 3, 4, '2024-03-21', '10:30', 'Consultatie'); --prog.consultatie pacient3
INSERT INTO programari VALUES(3, 2, 1, '2024-03-21', '11:00', 'Consultatie'); --prog.consultatie pacient2
INSERT INTO programari VALUES(4, 4, 2, '2024-03-21', '11:30', 'Consultatie'); --prog.consultatie pacient4
-- Pacientul 1 face o noua programare pentru extractie dentara:
INSERT INTO programari VALUES(5, 1, 3, '2024-03-22', '11:00', 'Extractie dentara');
-- Pacientul 3 face o noua programare pentru tratament canal:
INSERT INTO programari VALUES(6, 3, 4, '2024-03-22', '12:30', 'Tratament canal');
-- Pacientul 2 face o noua programare pentru tratament detartraj:
INSERT INTO programari VALUES(7, 2, 1, '2024-03-25', '10:00', 'Detartraj dentar');
-- Pacientul 4 face o noua programare pentru instalarea aparatului dentar:
INSERT INTO programari VALUES(8, 4, 2, '2024-03-25', '11:00', 'Instalare aparat dentar');

INSERT INTO programari (id_programare, id_pacient, id_medic, data_programare, ora_programare, tip_tratament) VALUES 
(9, 5, 1,  '2024-03-21', '10:00', 'Consultatie'), -- Consultatie pacient 5
(10, 5, 1, '2024-03-22', '11:00', 'Tratament carie dentara'), -- Tratament pacient 5
(11, 6, 2, '2024-03-20', '09:00', 'Consultatie'),-- Consultatie pacient 6
(12, 6, 2, '2024-03-21', '10:00', 'Tratament ortodontic'), -- Tratament pacient 6
(13, 7, 3, '2024-03-19', '08:30', 'Consultatie'), -- Consultatie pacient 7
(14, 7, 3, '2024-03-20', '09:00', 'Extractie dentara'), -- Tratament pacient 7
(15, 8, 4, '2024-03-18', '08:30', 'Consultatie'), -- Consultatie pacient 8
(16, 8, 4, '2024-03-19', '09:30', 'Tratament endodontic'), -- Tratament pacient 8
(17, 9, 1, '2024-03-17', '11:00', 'Consultatie'), -- Consultatie pacient 9
(18, 9, 1, '2024-03-18', '12:00', 'Tratament de igienizare'); -- Tratament pacient 9

INSERT INTO programari VALUES
(19, 10, 1, '2024-03-22', '13:00', 'Consultatie'),
(20, 10, 1, '2024-03-24', '10:00', 'Tratare carie'),
(21, 11, 2, '2024-03-23', '10:30', 'Consultatie'),
(22, 11, 2, '2024-03-26', '14:00', 'Instalare aparat dentar'),
(23, 12, 3, '2024-03-23', '9:00', 'Consultatie'),
(24, 12, 3, '2024-03-25', '11:30:', 'Detartraj'),  --modific in baza
(25, 13, 4, '2024-03-23', '11:30', 'Consultatie'),
(26, 13, 4, '2024-03-26', '13:30', 'Extragerea nervului');
select * from programari;

INSERT INTO consultatii VALUES (1, 1, 'Abces dentar'); 
INSERT INTO consultatii VALUES (2, 2, 'Carie dentara avansata');
INSERT INTO consultatii VALUES (3, 3, 'Gingivita');
INSERT INTO consultatii VALUES (4, 4, 'Necesita aparat dentar');
INSERT INTO consultatii VALUES (5, 9, 'Carie dentara');
INSERT INTO consultatii VALUES (6, 11,'Malocluzie');
INSERT INTO consultatii VALUES (7, 13,'Extractie dentara');
INSERT INTO consultatii VALUES (8, 15,'Infectie pulpara');
INSERT INTO consultatii VALUES (9, 17,'Igiena dentara');
INSERT INTO consultatii VALUES
(10, 19, 'Carie dentara'),
(11, 21, 'Necesita aparat dentar'),
(12, 23, 'Necesita detartraj inainte de inainte de instalarea unui aparat dentar'),
(13, 25, 'Necesita extragerea nervului ');

select * from consultatii;

/*Pentru stabilirea id_tratament se procedeaza astfel:
Daca tipul de tratament face parte din specializarea 1, atunci vom scrie id-ul de la 1000. 
Spre exemplu: 1001, 1002, 1003 etc.
-> specializarea 2 de la 2001 etc.
-> specializarea 3 de la 3001 etc.
-> specializarea 4 de la 4001.*/

INSERT INTO tratamente VALUES(3001,'Chirurgie dento-alveolara', 'Extractie molar de minte',300);
INSERT INTO tratamente VALUES(4001,'Endodontist','Tratament endodontic dinte monoradicular(include obturatia de canal)',850);
INSERT INTO tratamente VALUES(1001,'Stomatologie generala','Detartraj dentar',150); -- Tratamentul sugerat pentru gingivita este detartrajul.
INSERT INTO tratamente VALUES(2001,'Ortodont', 'Instalare aparat dentar fix pe ambele arcade', 3000);
-- Pentru specializarea 1:
INSERT INTO tratamente VALUES (1002, 'Stomatologie generala', 'Curatare dentara profesionala', 80);
INSERT INTO tratamente VALUES (1003, 'Stomatologie generala', 'Plombare cu material compozit', 150);
INSERT INTO tratamente VALUES (1004, 'Stomatologie generala', 'Extractie dentara simpla', 200);
-- Pentru specializarea 2:
INSERT INTO tratamente VALUES (2002, 'Ortodont', 'Instalare aparat dentar fix pe o singura arcada', 1500);
INSERT INTO tratamente VALUES (2003, 'Ortodont', 'Consultatie ortodontica', 100);
INSERT INTO tratamente VALUES (2004, 'Ortodont', 'Tratament ortodontic', 800);
-- Pentru specializarea 3
INSERT INTO tratamente VALUES (3002, 'Chirurgie dento-alveolara', 'Extractie dentara complicata', 250);
INSERT INTO tratamente VALUES (3003, 'Chirurgie dento-alveolara', 'Chirurgie parodontala', 300);
INSERT INTO tratamente VALUES (3004, 'Chirurgie dento-alveolara', 'Implant dentar', 1500);
-- Pentru specializarea 4
INSERT INTO tratamente VALUES (4002, 'Endodontist', 'Tratament endodontic', 200);
INSERT INTO tratamente VALUES (4003, 'Endodontist', 'Apicectomie', 300);
select * from tratamente

INSERT INTO istoricMedical VALUES(1,1,'Abces dentar in trecut. Nicio interventie chirurgicala anterioara');
INSERT INTO istoricMedical VALUES(2,3,'Tratament ortodontic anterior');
INSERT INTO istoricMedical VALUES(3,2,'Gingivita in trecut. Nicio interventie chirurgicala anterioara.');
INSERT INTO istoricMedical VALUES(4,4,'Nicio interventie chirurgicala anterioara'); --fetita nu a fost inca la stomatolog de asta am pus asa
INSERT INTO istoricMedical (id_istoric, id_pacient, detalii) VALUES 
(5, 5, 'Tratament carie dentara'),
(6, 6, 'Consultatie ortodontica'),
(7, 7, 'Extractie dentara'),
(8, 8, 'Tratament endodontic'),
(9, 9, 'Consultatie stomatologica');
INSERT INTO istoricMedical VALUES 
(10, 10, 'Malocluzie'),
(11, 11, 'Detartraj'),
(12, 12, 'Curatare dentara'), 
(13, 13, 'Carii profunde')

select * from istoricMedical;
/* 
->Numarul facturile o sa inceapa cu id-ul de la 100 !!
->Pentru data_emitere factura am pus data programarii la stomatolog 
*/

INSERT INTO facturi VALUES(100, 1, '2024-03-21', 50);  --pret consultatie pacientul 1 pe factura
INSERT INTO facturi VALUES(101, 1, '2024-03-22', 300); --pret tratament pacientul 1
INSERT INTO facturi VALUES(102, 3, '2024-03-21', 50);  --pret consultatie pacient 3
INSERT INTO facturi VALUES(103, 3, '2024-03-22', 850); --pret tratament pacient 3
INSERT INTO facturi VALUES(104, 2, '2024-03-21', 50); --pret consultatie pacient 2
INSERT INTO facturi VALUES(105, 2, '2024-03-25', 150); --pret tratament pacientul 2 pe factura
INSERT INTO facturi VALUES(106, 4, '2024-03-21', 100); --pret consultatie pacient 4 (La ortodont este mai scumpa consultatia)
INSERT INTO facturi VALUES(107, 4, '2024-03-25', 2500); --dupa tratament pacientul 4 primeste o factura

INSERT INTO facturi (id_factura, id_pacient, data_emitere, total_factura) VALUES
(108, 5, '2024-03-21', 50), -- Factura pentru consultatie pacient 5
(109, 5, '2024-03-22', 150), -- Factura pentru tratament pacient 5
(110, 6, '2024-03-20', 100), -- Factura pentru consultatie pacient 6 (La Ortodont consultatia este 100 lei)
(111, 6, '2024-03-21', 1500), -- Factura pentru tratament pacient 6
(112, 7, '2024-03-19', 60), -- Factura pentru consultatie pacient 7
(113, 7, '2024-03-20', 250), -- Factura pentru tratament pacient 7
(114, 8, '2024-03-18', 60), -- Factura pentru consultatie pacient 8
(115, 8, '2024-03-19', 300), -- Factura pentru tratament pacient 8
(116, 9, '2024-03-17', 50), -- Factura pentru consultatie pacient 9
(117, 9, '2024-03-18', 80); -- Factura pentru tratament pacient 9

INSERT INTO facturi VALUES 
(118, 10, '2024-03-22', 50),
(119, 10, '2024-03-24', 150),
(120, 11, '2024-03-23', 50),
(121, 11, '2024-03-26', 3000),
(122, 12, '2024-03-23', 50),
(123, 12, '2024-03-25', 150),
(124, 13, '2024-03-23', 50),
(125, 13, '2024-03-26', 200)

select * from facturi;

--Crearea id_plata: an-24 si la final id_plata=100,101,102etc.
INSERT INTO plati VALUES('24100', 100, 50, '2024-03-21'); --pacientul 1 plateste factura consultatie
INSERT INTO plati VALUES('24101', 101, 300, '2024-03-22'); --pacientul 1 plateste tratamentul
INSERT INTO plati VALUES('24102', 102, 50, '2024-03-21'); --pacient 3 plateste factura consultatie
INSERT INTO plati VALUES('24103', 103, 850, '2024-03-22'); --pacientul 3 plateste tratamentul
INSERT INTO plati VALUES('24104', 104, 50, '2024-03-21'); --pacient 2 plateste factura consultatie
INSERT INTO plati VALUES('24105', 105, 150,'2024-03-25'); --pacient 2 plateste factura tratament
INSERT INTO plati VALUES('24106', 106, 100,'2024-03-21'); --pacient 4 plateste factura consultatie
INSERT INTO plati VALUES('24107', 107, 2500,'2024-03-25'); --pacient 4 plateste factura tratament

-- Pentru pacientul 5
INSERT INTO plati VALUES('24108', 108, 50,'2024-03-21'); -- Plata pentru consultatie pacient 5
INSERT INTO plati VALUES('24109', 109, 150,'2024-03-22'); -- Plata pentru tratament pacient 5
-- Pentru pacientul 6
INSERT INTO plati VALUES('24110', 110, 100, '2024-03-20'); -- Plata pentru consultatie pacient 6
INSERT INTO plati VALUES('24111', 111, 750, '2024-03-22'); -- Plata pentru tratament pacient 6
--Pacient 6 mai are de platit 750 de lei. 

-- Pentru pacientul 7:
INSERT INTO plati VALUES ('24112', 112, 60, '2024-03-19'); -- Plata pentru consultatie pacient 7
INSERT INTO plati VALUES ('24113', 113, 150, '2024-03-21'); -- Plata pentru tratament pacient 7
--Pacient 7 mai are de platit 100 de lei.

-- Pentru pacientul 8:
INSERT INTO plati VALUES ('24114', 114, 60, '2024-03-18'); -- Plata pentru consultatie pacient 8
INSERT INTO plati VALUES ('24115', 115, 300, '2024-03-20'); -- Plata pentru tratament pacient 8
-- Pentru pacientul 9:
INSERT INTO plati VALUES ('24116', 116, 50, '2024-03-17'); -- Plata pentru consultatie pacient 5
INSERT INTO plati VALUES ('24117', 117, 80, '2024-03-18'); -- Plata pentru tratament pacient 5

INSERT INTO plati VALUES 
('24118', 118, 50,'2024-03-22' ),
('24119', 119, 150, '2024-03-24'),
('24120', 120, 50, '2024-03-23'),
('24121', 121, 1500, '2024-03-26'), --REST DE PLATA 1500 de lei
('24122', 122, 50, '2024-03-23'),
('24123', 123, 150, '2024-03-25'),
('24124', 124, 50, '2024-03-23'),
('24125', 125, 200, '2024-03-26');

select * from plati;