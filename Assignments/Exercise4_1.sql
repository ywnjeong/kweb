CREATE TABLE `students`(
    `name` VARCHAR(20),
    `student_id` INT NOT NULL,
    `admission_year` INT NOT NULL,
    `major` VARCHAR(20) NOT NULL,
    `phone_number` VARCHAR(20),
    `address` VARCHAR(50),
    `accumulated_credit` INT DEFAULT 0,
    `average_grade` FLOAT DEFAULT 0.0,
    `enrollment_status` TINYINT(1) DEFAULT 1,
    PRIMARY KEY(`student_id`)
    );
