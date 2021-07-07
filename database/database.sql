CREATE DATABASE excercise_db;

USE excercise_db;

CREATE TABLE folders(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180) NOT NULL,
    status VARCHAR(40) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE folders;

CREATE TABLE tasks(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    folder_id INT(11) NOT NULL,
    description VARCHAR(180) NOT NULL,
    status VARCHAR(40) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT folder_id
    FOREIGN KEY (folder_id)
    REFERENCES excercise_db.folders (id)
);

DESCRIBE tasks;

