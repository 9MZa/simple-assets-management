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
-- Table structure for table `employee_assets`
--

DROP TABLE IF EXISTS `employee_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `asset_id` int DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  `date_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `staff_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_asset_id_idx` (`asset_id`),
  KEY `FK_emp_id_idx` (`employee_id`),
  KEY `FK_staff_id_idx` (`staff_id`),
  CONSTRAINT `FK_asset_id` FOREIGN KEY (`asset_id`) REFERENCES `assets_item` (`id`),
  CONSTRAINT `FK_emp_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`),
  CONSTRAINT `FK_staff_id` FOREIGN KEY (`staff_id`) REFERENCES `staffs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_assets`
--

LOCK TABLES `employee_assets` WRITE;
/*!40000 ALTER TABLE `employee_assets` DISABLE KEYS */;
INSERT INTO `employee_assets` VALUES (1,3,3,'2021-05-19 19:49:51',1),(2,1,1,'2021-05-19 19:48:12',1),(3,2,2,'2021-05-19 19:49:11',2),(4,4,4,'2021-05-19 19:50:38',4),(5,5,6,'2021-05-19 20:34:55',3),(6,8,7,'2021-05-19 20:36:18',5),(7,15,8,'2021-05-19 20:37:19',3),(8,9,10,'2021-05-29 14:36:54',5),(9,15,7,'2021-05-29 14:51:58',3);
/*!40000 ALTER TABLE `employee_assets` ENABLE KEYS */;
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
