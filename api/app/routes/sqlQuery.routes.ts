import express from "express"
import {executeQuery} from "../controllers/sqlQuery.controller"

const SQLQueriesRouter = (app: any) => {
    const router = express.Router();

    // Execute all queries
    router.post("/execute", executeQuery);
  
    app.use('/api/v1', router);
  };

export {SQLQueriesRouter}