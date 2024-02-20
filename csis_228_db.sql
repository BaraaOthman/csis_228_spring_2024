CREATE DATABASE `csis_228_spring_24_db` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_first_name` varchar(15) DEFAULT NULL,
  `user_last_name` varchar(15) DEFAULT NULL,
  `user_dob` datetime DEFAULT NULL,
  `user_pwd` varchar(45) DEFAULT NULL,
  `user_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `post_type_id` int(11) DEFAULT NULL,
  `post_title` varchar(15) DEFAULT NULL,
  `post_content` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `post_user__user_id_idx` (`user_id`),
  KEY `post_post_type__post_type_id_idx` (`post_type_id`),
  CONSTRAINT `post_post_type__post_type_id` FOREIGN KEY (`post_type_id`) REFERENCES `ref_post_type` (`post_type_id`) ON UPDATE NO ACTION,
  CONSTRAINT `post_user__user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE `ref_post_type` (
  `post_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_type_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`post_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `like` (
  `like_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


