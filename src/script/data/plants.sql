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
WHERE type LIKE '%succulent%' 
OR type LIKE '%cactus%';


--outdoor_plants queries

--Seeds:
SELECT
    name AS 'Name',
    specification AS 'Kind',
    season AS 'Season'
FROM outdoor_plants
WHERE seed = 'yes';

--Perennials:
SELECT
    name AS 'Name',
    specification AS 'Kind',
    season AS 'Season'
FROM outdoor_plants
WHERE type LIKE '%evergreen%' 
OR type LIKE '%herb%'
AND name != 'Mint'
AND name != 'Oregano';

--Ornamental:
SELECT
    name AS 'Name',
    specification AS 'Kind',
    season AS 'Season'
FROM outdoor_plants
WHERE type LIKE '%flower%'
OR type LIKE '%bedding%'
OR type LIKE 'fern';