UPDATE plants
    SET price_range = '£'
WHERE price_range = 1;

UPDATE plants
    SET price_range = '££'
WHERE price_range = 2;

UPDATE plants
    SET price_range = '£££'
WHERE price_range = 3;


--select all indoor plants:
SELECT 
    name AS 'Genus', 
    common_name AS 'Common Name',
    CASE
        WHEN care_level = 2 THEN 'fussy'
        WHEN care_level = 3 THEN 'extra fussy'
        ELSE 'easy'
    END AS 'Care',
    price_range AS 'Price' 
FROM plants;

--select all easycare plants:
SELECT 
    name AS 'Genus', 
    common_name AS 'Common Name', 
    CASE
        WHEN care_level = 2 THEN 'fussy'
        WHEN care_level = 3 THEN 'extra fussy'
        ELSE 'easy'
    END AS 'Care', 
    price_range AS 'Price' 
FROM plants 
WHERE care_level = 1;

--select all fussy plants:
SELECT 
    name AS 'Genus', 
    common_name AS 'Common Name', 
    CASE
        WHEN care_level = 2 THEN 'fussy'
        WHEN care_level = 3 THEN 'extra fussy'
        ELSE 'easy'
    END AS 'Care',
    price_range AS 'Price' 
FROM plants 
WHERE care_level >= 2;

--select flowering plants:
SELECT 
    name AS 'Genus', 
    common_name AS 'Common Name', 
    CASE
        WHEN care_level = 2 THEN 'fussy'
        WHEN care_level = 3 THEN 'extra fussy'
        ELSE 'easy'
    END AS 'Care',
    price_range AS 'Price' 
FROM plants 
WHERE flowering = 'yes';

--select foliage plants:
SELECT 
    name AS 'Genus', 
    common_name AS 'Common Name', 
    CASE
        WHEN care_level = 2 THEN 'fussy'
        WHEN care_level = 3 THEN 'extra fussy'
        ELSE 'easy'
    END AS 'Care',
    price_range AS 'Price' 
FROM plants 
WHERE foliage = 'yes';

--select succulents (&cacti):
SELECT 
    name AS 'Genus', 
    common_name AS 'Common Name', 
    CASE
        WHEN care_level = 2 THEN 'fussy'
        WHEN care_level = 3 THEN 'extra fussy'
        ELSE 'easy'
    END AS 'Care',
    price_range AS 'Price' 
FROM plants 
WHERE type LIKE '%succulent%' OR '%cactus%';