Query 2:Find the Highest sale price for each year.

Answer: 
select extract(year from transfer_date) as year, max( price) as sale_price
from land_registry_price_paid_uk
group by year
order by sale_price;
Time: 39.141 ms

Result:
 year | sale_price 
------+------------
 1996 |     325000
 1997 |     375000
 1998 |     400000
 1999 |     408000
 2003 |     481500
 2000 |     495000
 1995 |     650000
 2001 |     675000
 2005 |     680000
 2006 |     735000
 2011 |     895001
 2008 |     900000
 2007 |     950000
 2012 |    1050000
 2004 |    1372500
 2010 |    1650000
 2002 |    1750000
 2009 |    2937987
 2013 |    5881800
 2015 |   11500000
 2014 |   15400000
 2017 |   20930000
 2016 |   23100000
 2018 |   43100000
 2019 |  194800000
(25 rows)

