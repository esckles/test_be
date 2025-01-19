import express, { Application } from "express";
import cors from "cors";
import env from "dotenv";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
env.config();

const app: Application = express();
app.use(express.json());
app.use(cors());

mainApp(app);
app.listen(process.env.PORT as string, () => {
  dbConfig();
  console.log(`server is running on PORT ${process.env.PORT}`);
});
