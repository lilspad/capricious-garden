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