CREATE DATABASE tsapi;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users (name, email)
  VALUES ('joe', 'joe@email.com'),
         ('ryan', 'ryan@email.com');



         