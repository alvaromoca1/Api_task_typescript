import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, (): void => {
    console.log("Se conecto a localhost:3000");
})
