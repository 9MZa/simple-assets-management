CREATE DATABASE  IF NOT EXISTS `assets` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `assets`;
-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: localhost    Database: assets
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assets_item`
--

DROP TABLE IF EXISTS `assets_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `asset_type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Type_idx` (`asset_type_id`),
  CONSTRAINT `FK_Type` FOREIGN KEY (`asset_type_id`) REFERENCES `asset_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets_item`
--

LOCK TABLES `assets_item` WRITE;
/*!40000 ALTER TABLE `assets_item` DISABLE KEYS */;
INSERT INTO `assets_item` VALUES (1,'Mac Pro',1),(2,'Dell PC',1),(3,'Dell XPS',2),(4,'Macbook Pro',2),(5,'Dell Ultrasharp Monitor U2419H',3),(6,'Samsung Monitor 34\" LS34J550WQEXXT 60Hz',3),(7,'Keychron K2',4),(8,'Keychron K4',4),(9,'Keychron K6',4),(10,'UniFi Switch Pro 48 PoE',5),(11,'UniFi Dream Machine PRO',5),(12,'FUJI XEROX SC2022',6),(13,'Canon Laser Printers LBP621Cw',6),(14,'Dell EMC PowerEdge R7525',7),(15,'ASUS ROG GLADIUS III',8),(16,'SSD SAMSUNG T7 BLUE 1 TB PORTABLE',8),(17,'iPad Pro 2022',2);
/*!40000 ALTER TABLE `assets_item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-31 11:23:36
