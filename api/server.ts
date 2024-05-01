import express from "express"
import cors from "cors"
import bodyParser from 'body-parser'

import { SQLQueriesRouter } from "./app/routes/sqlQuery.routes"

const dotenv = require('dotenv');
dotenv.config();

const app = express()

const corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions))

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json());

SQLQueriesRouter(app);

// set port, listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
