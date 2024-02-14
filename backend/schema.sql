-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema goodi
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema goodi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `goodi` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `goodi` ;

-- -----------------------------------------------------
-- Table `goodi`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `goodi`.`user` (
  `idu` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image` LONGTEXT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
   `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idu`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `goodi`.`Produits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `goodi`.`Produits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `desc` LONGTEXT NOT NULL,
  `image` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `goodi`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `goodi`.`cart` (
  `Produits_id` INT NOT NULL,
  `user_idu` INT NOT NULL,
  INDEX `fk_cart_Produits1_idx` (`Produits_id` ASC) VISIBLE,
  INDEX `fk_cart_user1_idx` (`user_idu` ASC) VISIBLE,
  CONSTRAINT `fk_cart_Produits1`
    FOREIGN KEY (`Produits_id`)
    REFERENCES `goodi`.`Produits` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_idu`)
    REFERENCES `goodi`.`user` (`idu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
