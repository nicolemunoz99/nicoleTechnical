-- DROP DATABASE threetables;
-- CREATE DATABASE threetables;



CREATE TABLE IF NOT EXISTS users(
  id SERIAL NOT NULL, 
  PRIMARY KEY (id),
  username VARCHAR NOT NULL,
  city VARCHAR
);

CREATE TABLE IF NOT EXISTS bikes(
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) references users(id),
  id SERIAL PRIMARY KEY NOT NULL,
  brand VARCHAR,
  miles INT
);

CREATE TABLE IF NOT EXISTS parts(
  bike_id INT references bikes(id),
  id SERIAL PRIMARY KEY,
  part_type VARCHAR,
  brand VARCHAR
);
