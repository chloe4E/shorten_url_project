//-------- This file is my server file: --------//
import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

let __dirname = path.resolve();

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// import my routes:
import { router } from "./routes/url.routes.js";
app.use("/", router);

// connect to db:
mongoose.connect(process.env.MONGO_DB_URI, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database connected successfully");
});

app.listen(3000, () => {
  console.log("👂 App listening on port 3000");
});
