# hanpoom
 coding exam for hanpoom

QUICKSTART GUIDE

1. These are the tools/libraries used in this project. Run `npm install` to install dependencies listed in package.json. For clarity, these are the packages used:

node        14.19.3
npm         6.14.17
dotenv      16.4.5
express     4.19.2
mysql2      3.9.4
sequelize   6.37.2

2. Configure the .env file to for YOUR OWN local machine. My

PORT            this will be part of the url you call APIs with (http://localhost:XXXX/)
DB_HOST         should be 'localhost' if running on local machine
DB_USERNAME     username for the MySQL connection. Typically 'root'.
DB_PASSWORD     password for the MySQL connection. By default has no password.
DB_DBNAME       name of the schema/database in MySQL.

3. Run `npm start`. once you see "sequelize sync successful" it means you are ready to call for the API

4. Currently, API has 4 endpoints

http://localhost:3000/picking-slips                     GET

Gets all picking_slips (with filter, sort pagination functionality)

For filter, insert field name into params key and the {value} to params value or append into URL (i.e. http://localhost:3000/picking-slips?id=68)
For sort, type 'sortField' with respective field name and 'sortOrder' into params key with either 'ASC' (ascending) or 'DESC' (descending) into params value. (i.e. http://localhost:3000/picking-slips?sortField=id&sortOrder=DESC)
For pagination, insert 'page' and 'pageSize' into params key with respective value. (i.e. http://localhost:3000/picking-slips?pageSize=3&page=10)

http://localhost:3000/picking-slips/printed             GET
http://localhost:3000/picking-slips/not-printed         GET
http://localhost:3000/picking-slips/held                GET

Gets all printed/not-printed/held picking_slips
