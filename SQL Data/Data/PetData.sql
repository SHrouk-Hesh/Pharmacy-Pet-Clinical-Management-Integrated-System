CREATE DATABASE PetDatabase;
USE PetDatabase;

CREATE TABLE Appointment (
  AppointmentID INT PRIMARY KEY,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Telephone VARCHAR(15),
  Email VARCHAR(100),
  Address VARCHAR(100),
  City VARCHAR(50),
  PostalCode VARCHAR(10),
  PetName VARCHAR(50) NOT NULL,
  Species VARCHAR(50),
  Gender VARCHAR(10),
  Breed VARCHAR(50),
  Color VARCHAR(50),
  Age INT,
  ApproxWeight DECIMAL(5, 2),
  CheckService TINYINT(1),
  Note TEXT,
  Sent TEXT
);

CREATE TABLE MedicationFood (
  MedicationFoodID INT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  Telephone VARCHAR(15),
  Email VARCHAR(100),
  Address VARCHAR(100),
  City VARCHAR(50),
  PostalCode VARCHAR(10),
  PetName VARCHAR(50) NOT NULL,
  Species VARCHAR(50),
  Gender VARCHAR(10),
  Breed VARCHAR(50),
  Color VARCHAR(50),
  Age INT,
  ApproxWeight DECIMAL(5, 2),
  MedicationFoodName VARCHAR(100),
  MedicationFoodQuantity VARCHAR(50),
  Note TEXT
);

CREATE TABLE ContactUs (
  ContactID INT PRIMARY KEY,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Telephone VARCHAR(15),
  Email VARCHAR(100),
  Address VARCHAR(100),
  City VARCHAR(50),
  PostalCode VARCHAR(10),
  PetName VARCHAR(50),
  Species VARCHAR(50),
  Gender VARCHAR(10),
  Breed VARCHAR(50),
  Color VARCHAR(50),
  Age INT,
  ApproxWeight DECIMAL(5, 2),
  Message TEXT
);
