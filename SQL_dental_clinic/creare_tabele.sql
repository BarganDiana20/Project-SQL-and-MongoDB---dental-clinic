				
				------------- Creare tabele Clinica Stomatologica ----------


-- Tabelul Pacienti
DROP TABLE IF EXISTS pacienti;
CREATE TABLE pacienti (
    id_pacient INT PRIMARY KEY,
    nume VARCHAR(255) NOT NULL,
    prenume VARCHAR(255) NOT NULL,
    CNP VARCHAR(13) UNIQUE NOT NULL,
    data_nasterii DATE NOT NULL,
    adresa VARCHAR(100),
    telefon VARCHAR(15) UNIQUE
);
-- Tabelul Medici
DROP TABLE IF EXISTS medici;
CREATE TABLE medici (
    id_medic INT PRIMARY KEY,
    nume_medic VARCHAR(255) NOT NULL,
    prenume_medic VARCHAR(255) NOT NULL,
	specializare VARCHAR(255) UNIQUE,
	telefon VARCHAR(15) UNIQUE
);
-- Tabelul Programari
DROP TABLE IF EXISTS programari;
CREATE TABLE programari (
    id_programare INT PRIMARY KEY,
    id_pacient INT NOT NULL,
    id_medic INT NOT NULL,
    data_programare DATE CHECK (data_programare >= (CURRENT_DATE - INTERVAL '30 days')),
    ora_programare TIME NOT NULL,
    tip_tratament VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_pacient) REFERENCES pacienti(id_pacient),
    FOREIGN KEY (id_medic) REFERENCES medici(id_medic)
);

-- Tabelul Tratamente
DROP TABLE IF EXISTS tratamente;
CREATE TABLE tratamente (
    id_tratament INT PRIMARY KEY,
	specializare VARCHAR(255),
    descriere VARCHAR(100) NOT NULL,
    cost DECIMAL(10, 2) CHECK (cost > 0),
	FOREIGN KEY (specializare) REFERENCES medici(specializare)
);

-- Tabelul Consultatii
DROP TABLE IF EXISTS consultatii ; 
CREATE TABLE consultatii (
    id_consultatie INT PRIMARY KEY,
    id_programare INT NOT NULL,
    diagnostic VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_programare) REFERENCES programari(id_programare)
);

-- Tabelul Istoric Medical
DROP TABLE IF EXISTS istoricMedical;
CREATE TABLE istoricMedical (
    id_istoric INT PRIMARY KEY,
    id_pacient INT NOT NULL,
    detalii TEXT,
    FOREIGN KEY (id_pacient) REFERENCES pacienti(id_pacient)
);

-- Tabelul Facturi
DROP TABLE IF EXISTS facturi ;
CREATE TABLE facturi (
    id_factura INT PRIMARY KEY,
    id_pacient INT NOT NULL,
    data_emitere DATE NOT NULL,
    total_factura DECIMAL(10, 2),
    FOREIGN KEY (id_pacient) REFERENCES pacienti(id_pacient)
);

-- Tabelul Plati
DROP TABLE IF EXISTS plati ;
CREATE TABLE plati (
    id_plata INT PRIMARY KEY,
    id_factura INT NOT NULL,
    suma DECIMAL(10, 2) CHECK (suma > 0),
    data_plata DATE NOT NULL,
    FOREIGN KEY (id_factura) REFERENCES facturi(id_factura)
);





