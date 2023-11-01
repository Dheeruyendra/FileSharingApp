import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

DBConnection();

app.use('/', router);

app.listen(port, () => {console.log(`server is running on port ${port}.`)});