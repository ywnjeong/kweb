CREATE TABLE `users`(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(20) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `profile_picture` VARCHAR(100),
    `status_message` VARCHAR(100),
    `is_deleted` TINYINT(1) DEFAULT 0,
    `join_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(`user_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `channels` (
    `channel_id` INT NOT NULL AUTO_INCREMENT,
    `channel_name` VARCHAR(20) NOT NULL,
    `created_by_id` INT NOT NULL,
    `channel_link` VARCHAR(100),
    `max_members` INT,
    `is_deleted` TINYINT(1) DEFAULT 0,
    `created_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(`channel_id`),
    FOREIGN KEY(`created_by_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats` (
    `chat_id` INT NOT NULL AUTO_INCREMENT,
    `chat_info` VARCHAR(100) NOT NULL,
    `written_by_id` INT NOT NULL,
    `channel_id` INT NOT NULL,
    `created_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(`chat_id`),
    FOREIGN KEY(`written_by_id`) REFERENCES `users`(`user_id`),
    FOREIGN KEY(`channel_id`) REFERENCES `channels`(`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
    `follow_id` INT NOT NULL AUTO_INCREMENT,
    `follower_id` INT NOT NULL,
    `followee_id` INT NOT NULL,
    `follow_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(`follow_id`),
    FOREIGN KEY(`follower_id`) REFERENCES `users`(`user_id`),
    FOREIGN KEY(`followee_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks`(
    `block_id` INT NOT NULL AUTO_INCREMENT,
    `blocker_id` INT NOT NULL,
    `blockee_id` INT NOT NULL,
    `block_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(`block_id`),
    FOREIGN KEY(`blocker_id`) REFERENCES `users`(`user_id`),
    FOREIGN KEY(`blockee_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;