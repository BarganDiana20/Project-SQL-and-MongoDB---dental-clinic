
/*1. Display all the appointments that took place between 10:00 and 13:30 on 22.03.2024 
(selecting the name of the patients, the doctor with whom they have an appointment, the time and the type of appointment.)
*/

SELECT 
    CONCAT(nume, ' ', prenume) AS nume_pacient,
	CONCAT(nume_medic, ' ', prenume_medic) AS nume_medic,
    ora_programare, tip_tratament
FROM programari 
INNER JOIN pacienti ON programari.id_pacient = pacienti.id_pacient
INNER JOIN medici ON programari.id_medic = medici.id_medic
WHERE DATE(programari.data_programare) = '2024-03-22'
    AND CAST(ora_programare AS TIME) BETWEEN '10:00:00' AND '13:30:00';


 --2. Which invoices have not been fully paid, and what amount still needs to be collected?

SELECT id_factura, 
       total_factura - COALESCE((SELECT SUM(suma) FROM plati
                                WHERE plati.id_factura = facturi.id_factura), 0) AS rest_de_incasat
FROM facturi
WHERE total_factura - COALESCE(
        (SELECT SUM(suma)
        FROM plati
        WHERE plati.id_factura = facturi.id_factura), 0) > 0;


--3. Which patients were issued invoices on the same day invoice no. 103 was created/issued? */
--Solution 1 

SELECT CONCAT(nume, ' ', prenume) AS nume_pacient
FROM pacienti 
INNER JOIN facturi ON pacienti.id_pacient = facturi.id_pacient
WHERE data_emitere IN (SELECT data_emitere 
					  FROM facturi
					  WHERE id_factura = 103
) AND pacienti.id_pacient != (
    SELECT id_pacient
    FROM facturi
    WHERE id_factura = 103
)

			  
--Solution 2 - with 2 levels of subqueries [Subqueries in the WHERE clause of the IN operator]

SELECT id_pacient, CONCAT(nume, ' ', prenume) AS nume_pacient
FROM pacienti
WHERE id_pacient IN (
    SELECT id_pacient
    FROM facturi
    WHERE data_emitere IN (
        SELECT data_emitere
        FROM facturi
        WHERE id_factura = 103
    )
) AND id_pacient != (
    SELECT id_pacient
    FROM facturi
    WHERE id_factura = 103
)

-- 4. What is the average price of treatments performed by a doctor based on their specialization?

SELECT m.nume_medic, m.prenume_medic, m.specializare,
	ROUND(AVG(t.cost),1) AS pret_mediu_tratament
FROM medici m
INNER JOIN tratamente t ON m.specializare = t.specializare
GROUP BY m.nume_medic, m.prenume_medic, m.specializare

--5. Find all consultation appointments (date and time) performed by doctor "Axinte Alina."

SELECT pr.data_programare, pr.ora_programare
FROM programari pr
JOIN medici md ON pr.id_medic = md.id_medic
WHERE md.nume_medic = 'Axinte' AND md.prenume_medic = 'Alina' AND pr.tip_tratament= 'Consultatie';

--6. Display the top 5 treatments with the highest cost and specify the name of the doctor who performs each of these treatments.
WITH Top5Tratamente AS (
    SELECT
        t.id_tratament,
        t.descriere,
        t.cost,
	t.specializare,
        ROW_NUMBER() OVER (ORDER BY t.cost DESC) AS ranking
    FROM
        tratamente t
)
SELECT
    id_tratament,
   descriere,
    cost,
   nume_medic
FROM
    Top5Tratamente 
JOIN
    medici on Top5Tratamente.specializare = medici.specializare
WHERE
    ranking <= 5
	order by cost desc
	
--7. What is the total number of consultations where the diagnosis contains the word "Carie dentară"?
SELECT
    COUNT(*)AS consultatii_diagnostic_carie_dentara
FROM
    consultatii
WHERE
    diagnostic LIKE '%Carie dentara%';


--8. Calculate the weekly invoice revenues.
--Solution 1
SELECT DATE_TRUNC('week', data_emitere) AS start_of_week, SUM(total_factura) AS incasari_saptamanale
FROM facturi
GROUP BY DATE_TRUNC('week', data_emitere)
ORDER BY start_of_week;

--Solution 2
SELECT TO_CHAR(DATE_TRUNC('week', data_emitere), 'YYYY-MM-DD') AS start_of_week, SUM(total_factura) AS incasari_saptamanale
FROM facturi
GROUP BY DATE_TRUNC('week', data_emitere)
ORDER BY start_of_week;

--9. Display all patients who had payments between 200 lei and 1000 lei in total.

SELECT
    p.id_pacient,
    p.nume,
    p.prenume,
    SUM(pl.suma) AS suma_totala
FROM
    pacienti p
    JOIN facturi f ON p.id_pacient = f.id_pacient
    JOIN plati pl ON f.id_factura = pl.id_factura
GROUP BY
    p.id_pacient
HAVING
    SUM(pl.suma) BETWEEN 200 AND 1000
	ORDER BY id_pacient;

--10. Extract the time scheduled for the Consultation for a specific patient, based on the CNP: 6090712228173.

SELECT p.ora_programare
FROM programari p
JOIN pacienti pac ON p.id_pacient = pac.id_pacient
WHERE pac.CNP = '6090712228173' AND p.tip_tratament = 'Consultatie';

--11. Extract all the appointments for the patient with the CNP number 2704091234568.

SELECT id_programare, data_programare, ora_programare, tip_tratament
FROM programari p
WHERE id_pacient = (SELECT id_pacient 
					FROM pacienti
					WHERE CNP = '2704091234568'


--12. Shows the list of appointments between 11:00 a.m. and 12:30 p.m. for all days.			

SELECT CONCAT(pac.nume, ' ', pac.prenume) AS nume_pacient,
       CONCAT(med.nume_medic, ' ', med.prenume_medic) AS nume_medic,
       p.data_programare,
       p.ora_programare,
       p.tip_tratament
FROM programari p
INNER JOIN pacienti pac ON p.id_pacient = pac.id_pacient
INNER JOIN medici med ON p.id_medic = med.id_medic
WHERE p.ora_programare BETWEEN '11:00' AND '12:30';					
					
--13. Which are the days on which at least 3 invoices were created (issued)?
				
SELECT data_emitere, COUNT(*) AS numar_facturi
FROM facturi
GROUP BY data_emitere
HAVING COUNT(*) >= 3;				

