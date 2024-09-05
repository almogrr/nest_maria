CREATE DATABASE IF NOT EXISTS excel_upload_tasks;

USE excel_upload_tasks;

CREATE TABLE IF NOT EXISTS users
(

    u_id    INT AUTO_INCREMENT PRIMARY KEY,

    u_name  VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS files
(

    f_id    INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS customers
(

    c_id         INT AUTO_INCREMENT PRIMARY KEY,

    c_name       VARCHAR(255) NOT NULL,

    c_email      VARCHAR(255) NOT NULL,

    c_israeli_id VARCHAR(255) NOT NULL,

    c_phone      VARCHAR(255) NOT NULL,

    f_id         INT,

    FOREIGN KEY (f_id) REFERENCES files (f_id) ON DELETE CASCADE
);

-- Inserting 5 fake users into the 'users' table with UUID tokens
INSERT INTO users (u_name)
VALUES ('John Doe'),
       ('Jane Smith'),
       ('Alice Johnson'),
       ('Bob Brown'),
       ('Charlie Davis');