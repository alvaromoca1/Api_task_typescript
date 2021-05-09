import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { Routeres } from "./api/router";
const app: Application = express();

mongoose.connect('mongodb+srv://root:root@cluster0.15xsn.mongodb.net/tareadb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("se Conecto a la BD sin problemas");
}).catch(err => {
    console.log("Existe un problema: " + err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

new Routeres(app);
app.listen(3000, (): void => {
    console.log("Se conecto a localhost:3000");
})
