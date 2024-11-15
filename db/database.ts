// db/database.ts
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Initialize the database
const db = new DB("hotdogs.db");

// Create the hotdogs table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS hotdogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
  )
`);

export default db;