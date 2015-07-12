/**
 * Create a table
 * @reference CREATE TABLE table_name ( column_name data_type, ... )
 * @param  {string} table_name The table name
 * @param  {string} values     The column_name and data_type
 * @return {string}            The necessary string to create a table
 */
function createTable(table_name, values){
    return "CREATE TABLE " + table_name + " ( " + values + " ) ";
}

/**
 * Drop a table
 * @param  {string} table_name The table name
 * @return {string}            The necessary string to drop a table
 */
function dropTable(table_name){
    return "DROP TABLE " + table_name;
}

/**
 * Select a table
 * @param  {string} table_name The table name
 * @return {string}            The necessary string to select a table
 */
function selectTable(table_name){
    return "SELECT * FROM " + table_name;
}

/**
 * Insert an entry to the table
 * @reference INSERT INTO table_name VALUES (value, ...)
 * @param  {string} table_name The table name
 * @param  {string} values     The column values
 * @return {string}            The necessary string to insert an entry table.
 */
function insertEntry(table_name, values){
    return "INSERT INTO " + table_name  + " VALUES (" + values + ")";
}

/**
 * Delete an entry from the table
 * @reference DELETE FROM table_name WHERE some_column=some_value
 * @param  {string} table_name The table name
 * @param  {string} condition  The column=value
 * @return {string}            The necessary string to delete an entry from the table
 */
function deleteEntry(table_name, condition){
    return "DELETE FROM " + table_name + " WHERE " + condition;
}

/**
 * Update an entry from the table
 * @reference UPDATE table_name SET column=value WHERE column=value
 * @param  {string} table_name The table name
 * @param  {string} values     The column=value
 * @param  {string} condition  The column=value
 * @return {string}            The necessary string to update an entry.
 */
function updateEntry(table_name, values, condition){
    return "UPDATE " + table_name + " SET " + values + " WHERE " + condition;   
}

var batman      = "1, 'Batman', 'Bruce Wayne', 0, 0";
var nightwing   = "2, 'Nightwing', 'Dick Grayson', 1, 0";
var red_hood    = "3, 'Red Hood', 'Jason Todd', 2, 0";
var red_robin   = "4, 'Red Robin', 'Tim Drake', 3, 0";
var robin       = "5, 'Robin', 'Damian Wayne', 4, 0";

var shipsTable =    "id INT," +
                    "name_of_ship VARCHAR(100)," +
                    "owner VARCHAR(100)," +
                    "x INT," +
                    "y INT";

var columns = "name_of_ship, owner, x, y";

sendQuery(insertEntry("ships", batman));
sendQuery(selectTable("ships"));