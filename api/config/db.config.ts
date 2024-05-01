import path from "path";

const sqlite3 = require('sqlite3').verbose();

export let db = new sqlite3.Database(path.resolve(__dirname, './sql_editor.db'), sqlite3.OPEN_READWRITE, (err: any) => {

    if (err) {
        console.error(err);
    } else {
        console.log('Connected to the sqlite database.');
    }
});