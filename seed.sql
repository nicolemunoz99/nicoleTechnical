INSERT INTO users (username, city)
VALUES
('hal', 'fargo'),
('mary', 'denver'),
('jon', 'boulder');


INSERT INTO bikes(user_id, brand, miles)
VALUES
(1, 'bikebrand', 123),
(1, 'yyyy', 5555),
(2, 'bianchi', 1234),
(2, 'yyyy', 9878),
(3, 'santa cruz', 9876),
(3, 'bikebrand', 234);

INSERT INTO parts (bike_id, part_type, brand)
VALUES 
(1, 'chain', 'brand1'),
(1, 'frame', 'ere'),
(2, 'chain', 'brand1'),
(2, 'frame', 'ere'),
(3, 'chain', 'brand3'),
(3, 'frame', 'kmc'),
(4, 'chain', 'brand1'),
(4, 'frame', 'plo'),
(5, 'chain', 'plo'),
(5, 'frame', 'ere'),
(6, 'chain', 'brand324'),
(6, 'frame', 'edcfd');