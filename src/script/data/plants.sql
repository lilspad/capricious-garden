-- terminal
/* .schema plants
CREATE TABLE plants(
	id INTEGER PRIMARY KEY,
	img TEXT,
	scientific_name TEXT,
	common_name TEXT,
	type TEXT,
	care_level TEXT,
	price INTEGER
);
DROP TABLE IF EXISTS plants;
CREATE TABLE plants(
	id INTEGER PRIMARY KEY NOT NULL,
	img TEXT,
	scientific_name TEXT NOT NULL,
	common_name TEXT NOT NULL,
	type TEXT NOT NULL,
	care_level TEXT NOT NULL,
	price INTEGER NOT NULL
);
.mode csv
.import plants-data-no-header.csv plants */

--select all plants:
SELECT * FROM plants;

--select all easycare plants:
SELECT * FROM plants
WHERE care_level = 'easy';

--select all fussy plants:
SELECT * FROM plants
WHERE care_level = 'fussy';

--select flowering plants:
SELECT * FROM plants
WHERE type LIKE '%flowering%';

--select foliage plants:
SELECT * FROM plants
WHERE type LIKE '%foliage%';

--select succulents (&cacti):
SELECT * FROM plants
WHERE type LIKE '%succulent%';