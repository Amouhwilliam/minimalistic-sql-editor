import {Request, Response} from "express";
import {db} from "../../config/db.config";
import {getMessageForQueryType, getQueryType} from "../helpers/functions";

// Get the query to execute and send the response back
export const executeQuery = (req: Request, res: Response) => {
    try {
        const query: string = req.body?.sql_query
        const queryType: string = getQueryType(query);

        // Execute the SQL query based on the query types
        if (queryType === 'SELECT') {
            // Use db.all() for SELECT queries
            db.all(query, (err: any, rows: any) => {
                if (err) {
                    console.error('Error executing query:', err);
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.json({ results: rows });
            });
        } else {
            // Use db.run() for other types of queries
            db.run(query, (err: any) => {
                if (err) {
                    console.error('Error executing query:', err);
                    // Check if the error message indicates a syntax error
                    if (err.message.includes('syntax error')) {
                        res.status(400).json({ error: 'Syntax error in SQL query' });
                    } else {
                        res.status(500).json({ error: err.message });
                    }
                    return;
                }
                // Generate and send an appropriate message based on the query type
                const message: string = getMessageForQueryType(queryType);
                res.json({ message });
            });
        }

    } catch (err: any){
        console.log("Error",err)
        res.status(500).json({ error: err.message });
    }
};